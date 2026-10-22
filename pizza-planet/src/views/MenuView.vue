<script setup>
import { ref } from 'vue';
import useBasket from '@/composables/useBasket';
import usePizzas from '@/composables/usePizzas';

const { allPizzas, message } = usePizzas();
const { basket, addToBasket, changeQuantity, basketTotal, addNewOrder, basketText } = useBasket();

</script>

<template>
    <div class="menu_wrapper">
        <div class="menu">
            <h3>~ Authentic Handmade Pizza ~</h3>
            <p v-if="message" class="pizza_error" role="alert">{{ message }}</p>
            <table class="menu_table">
                <tbody v-for="pizza in allPizzas" :key="pizza.id">
                    <tr class="pizza_heading">
                        <th colspan="3">{{ pizza.name }}</th>
                    </tr>
                    <tr class="pizza_description">
                        <td colspan="3">{{ pizza.description }}</td>
                    </tr>
                    <tr v-for="option in pizza.options" :key="pizza.id + option.size" class="pizza_option">
                        <td>{{ option.size }}&quot;</td>
                        <td>${{ Number(option.price).toFixed(2) }}</td>
                        <td>
                            <button
                                type="button"
                                class="add_btn"
                                :aria-label="`Add ${pizza.name}, ${option.size} inch, to basket`"
                                @click="addToBasket(pizza, option)"
                            >
                                &#43;
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="basket">
            <h3>~ Basket ~</h3>
            <div v-if="basket.length > 0">
                <table>
                    <tbody v-for="(item, index) in basket" :key="index">
                        <tr>
                            <td>
                                <button type="button" class="quantity_btn" :aria-label="`Remove one ${item.name}`" @click="changeQuantity(index, -1)">&#8722;</button>
                                <span>{{ item.quantity }}</span>
                                <button type="button" class="quantity_btn" :aria-label="`Add one ${item.name}`" @click="changeQuantity(index, 1)">&#43;</button>
                            </td>
                            <td>{{ item.name }} {{ item.size }}&quot;</td>
                            <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order Total: ${{ basketTotal.toFixed(2) }}</p>
                <button @click="addNewOrder()">Place Order</button>
            </div>
            <div v-else>
                <p>{{ basketText }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu_wrapper {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(280px, 0.8fr);
    align-items: start;
    gap: 2rem;
    width: min(1200px, calc(100% - 3rem));
    margin: 2.5rem auto 4rem;
}

.menu,
.basket {
    min-width: 0;
    padding: 1.5rem;
    border-top: 4px solid var(--color-tomato);
    border-radius: 8px;
    background: #fffefa;
    box-shadow: 0 12px 30px rgba(41, 40, 36, 0.07);
}

.basket {
    position: sticky;
    top: 1.5rem;
    border-top-color: var(--color-basil);
}

.menu h3,
.basket h3 {
    margin: 0 0 1.25rem;
    color: var(--color-basil);
    font-size: 1.35rem;
}

.pizza_error {
    margin: 0 0 1rem;
    padding: 0.75rem 1rem;
    border-left: 4px solid var(--color-tomato);
    background: #fff2ef;
    color: #8c2d24;
}

.menu_table,
.basket table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.menu_table tbody + tbody {
    border-top: 1px solid #e7e2d6;
}

.pizza_heading th {
    padding: 1rem 0.5rem 0.15rem;
    color: var(--color-ink);
    font-size: 1.05rem;
    text-align: left;
}

.menu_table tbody:first-child .pizza_heading th {
    padding-top: 0.25rem;
}

.pizza_description td {
    padding: 0 0.5rem 0.65rem;
    color: #625f56;
    line-height: 1.6;
}

.pizza_option td {
    padding: 0.55rem 0.5rem;
    border-top: 1px solid #f0ede5;
    color: var(--color-ink);
    font-weight: 600;
    white-space: nowrap;
}

.pizza_option td:last-child {
    text-align: right;
}

button {
    display: inline-flex;
    min-width: 2.5rem;
    min-height: 2.5rem;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.5rem 0.8rem;
    border: 0;
    border-radius: 6px;
    background: var(--color-tomato);
    color: white;
    cursor: pointer;
    font: inherit;
    font-weight: 600;
    transition: background-color 160ms ease, transform 160ms ease;
}

button:hover {
    background: #a93327;
}

button:active {
    transform: translateY(1px);
}

button:focus-visible {
    outline: 3px solid var(--color-cheese);
    outline-offset: 3px;
}

.basket table td {
    padding: 0.65rem 0.35rem;
    border-bottom: 1px solid #e7e2d6;
}

.basket table td:first-child {
    white-space: nowrap;
}

.basket table td:first-child span {
    display: inline-block;
    min-width: 1.75rem;
    text-align: center;
}

.basket table td:last-child {
    text-align: right;
    white-space: nowrap;
}

.quantity_btn {
    min-width: 2rem;
    min-height: 2rem;
    padding: 0.25rem;
    background: #edf1e9;
    color: var(--color-basil);
}

.quantity_btn:hover {
    background: #dce6d8;
}

.basket p {
    margin: 1.25rem 0;
    color: var(--color-ink);
    font-weight: 600;
    text-align: right;
}

.basket > button {
    width: 100%;
    background: var(--color-basil);
}

.basket > button:hover {
    background: #35563d;
}

@media (max-width: 760px) {
    .menu_wrapper {
        grid-template-columns: 1fr;
        gap: 1rem;
        width: min(100% - 2rem, 36rem);
        margin: 1.5rem auto 3rem;
    }

    .menu,
    .basket {
        padding: 1.25rem;
    }

    .basket {
        position: static;
    }
}

@media (max-width: 480px) {
    .menu,
    .basket {
        padding: 1rem;
    }

    .menu h3,
    .basket h3 {
        font-size: 1.15rem;
    }

    .pizza_heading th,
    .pizza_description td,
    .pizza_option td {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
    }

    .basket table {
        table-layout: fixed;
    }

    .basket table td:first-child {
        width: 7.5rem;
    }

    .basket table td:nth-child(2) {
        overflow-wrap: anywhere;
    }

    .quantity_btn {
        min-width: 1.8rem;
        min-height: 1.8rem;
    }
}
</style>