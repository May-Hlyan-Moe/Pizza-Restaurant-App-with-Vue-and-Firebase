import { ref, onMounted } from "vue";
import { getDocs } from "firebase/firestore";
import { dbPizzasRef } from "@/firebase";

export default function usePizzas () {
    const allPizzas = ref([]);

    async function getPizzas () {
        const snapshot = await getDocs(dbPizzasRef);
        allPizzas.value = snapshot.docs.map((pizzaDoc) => ({
            id: pizzaDoc.id,
            ...pizzaDoc.data(),
        }));
    }

    onMounted(getPizzas);

    return {
        allPizzas,
    }
}