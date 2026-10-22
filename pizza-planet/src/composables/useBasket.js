import { computed, ref } from 'vue';
import { addDoc, getDocs } from 'firebase/firestore';
import { dbOrdersRef } from '@/firebase';

export default function useBasket() {
    const basket = ref([]);
    const basketText = ref("Your basket is empty.");

    function addToBasket(pizza, option) {
        const pizzaExist = basket.value.find(function(item) {
            return item.name === pizza.name && item.size === option.size
        });
        if (pizzaExist) {
            pizzaExist.quantity++
            return
        }
        basket.value.push({
            name: pizza.name,
            price: option.price,
            size: option.size,
            quantity: 1,
        });
    }

    function changeQuantity(index, amount) {
        const item = basket.value[index];

        if (!item) return;

        if (item.quantity + amount <= 0) {
            basket.value.splice(index, 1);
            return;
        }

        item.quantity += amount;
    }

    const basketTotal = computed(() =>
        basket.value.reduce((total, item) => total + item.price * item.quantity, 0),
    );

    async function addNewOrder () {
        try {
            const order = {
                createdAt: new Date(),
                pizza: {...basket.value}
            };
            await addDoc(dbOrdersRef, order);
            basket.value = [];
            basketText.value = "Thank you. Your order has been placed.";
        } catch (error) {
            basketText.value = "There was an error placing an order, please try again.";
        }
    }

    return {
        basket,
        addToBasket,
        changeQuantity,
        basketTotal,
        addNewOrder,
        basketText,
    }
}