import { computed, ref } from 'vue';

export default function useBasket() {
    
    const basket = ref([]);

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

    return {
        basket,
        addToBasket,
        changeQuantity,
        basketTotal
    }
}