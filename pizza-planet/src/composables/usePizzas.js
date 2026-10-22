import { ref, onMounted } from "vue";
import { doc, getDocs, deleteDoc } from "firebase/firestore";
import { dbPizzasRef } from "@/firebase";

export default function usePizzas () {
    const allPizzas = ref([]);
    const message = ref('');

    async function getPizzas () {
        try {
            message.value = "";
            const pizzaDocs = await getDocs(dbPizzasRef);
            allPizzas.value = pizzaDocs.docs.map((pizzaDoc) => ({
                id: pizzaDoc.id,
                ...pizzaDoc.data(),
            }));
        } catch (error) {
            message.value = "Unable to load pizzas. Please try again.";
        }
    }

    onMounted(getPizzas);

    async function deletePizza (id) {
        if (!window.confirm("Are you sure you want to delete this pizza?")) {
            return;
        }
        try {
            message.value = "";
            const pizza = doc(dbPizzasRef, id);
            await deleteDoc(pizza);
            await getPizzas();
        } catch (error) {
            message.value = "Unable to delete pizza. Please try again.";
        }
    }

    return {
        allPizzas,
        deletePizza,
        message,
    }
}