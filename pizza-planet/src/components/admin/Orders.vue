<script setup>
import useOrders from '@/composables/useOrders';
import { onMounted, ref } from 'vue';

const { orders, ordersMessage, getOrders, deleteOrder } = useOrders();
const showOrders = ref(false);

function orderItems(order) {
    return Object.values(order.pizza ?? {});
}

onMounted(getOrders);
</script>

<template>
    <section class="admin_section orders_section">
        <header class="admin_section_header">
            <h3>Orders ({{ orders.length }})</h3>
            <button class="toggle_btn" @click="showOrders=!showOrders">{{ showOrders ? "hide" : "show" }}</button>
        </header>
        <p v-if="ordersMessage" class="orders_message" role="alert">{{ ordersMessage }}</p>
        <p v-else-if="orders.length === 0" class="orders_empty">No orders yet.</p>
        <table v-else v-show="showOrders">
            <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Size</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price (total)</th>
                    <th>
                        Delete Order
                    </th>
                </tr>
            </thead>
            <tbody v-for="(order, orderIndex) in orders" :key="order.id">
                <tr class="order_heading">
                    <td colspan="4">
                        <strong>Order number: {{ orderIndex + 1 }}</strong>
                    </td>
                </tr>
                <tr v-for="(item, itemIndex) in orderItems(order)" :key="`${order.id}-${itemIndex}`">
                    <td>{{ item.name }}</td>
                    <td>{{ item.size }} in</td>
                    <td>{{ item.quantity }}</td>
                    <td>${{ (Number(item.price) * Number(item.quantity)).toFixed(2) }}</td>
                    <td>
                        <button type="button" class="btn_remove" @click="deleteOrder(order.id)">&times;</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
.orders_section {
    margin-top: 1.5rem;
    padding: clamp(1.25rem, 4vw, 2rem);
    border: 1px solid #e3ddcf;
    border-top: 4px solid var(--color-cheese);
    border-radius: 8px;
    background: #fffefa;
    box-shadow: 0 12px 30px rgba(41, 40, 36, 0.07);
}

.admin_section_header h3 {
    margin: 0 0 1.25rem;
    color: var(--color-basil);
    font-size: 1.4rem;
    line-height: 1.25;
}

.orders_section table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.orders_section th,
.orders_section td {
    padding: 0.8rem 0.75rem;
    border-bottom: 1px solid #e8e3d8;
}

.orders_section th {
    background: #f5f2e9;
    color: #625f56;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
}

.orders_section th:nth-child(2),
.orders_section th:nth-child(3),
.orders_section th:nth-child(4),
.orders_section tbody tr:not(.order_heading) td:nth-child(n + 2) {
    text-align: right;
    white-space: nowrap;
}

.orders_section tbody tr:not(.order_heading) td:first-child {
    font-weight: 600;
}

.orders_section .order_heading td {
    padding-top: 1rem;
    padding-bottom: 0.65rem;
    border-bottom: 0;
    color: var(--color-basil);
}

.orders_message {
    margin: 0;
    color: var(--color-tomato);
    line-height: 1.5;
}

.orders_empty {
    margin: 0;
    color: #625f56;
}

.order_heading td {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.btn_remove {
    display: inline-grid;
    width: 2.25rem;
    aspect-ratio: 1;
    flex: 0 0 auto;
    place-items: center;
    border: 1px solid #e6b9b1;
    border-radius: 6px;
    background: #fff7f5;
    color: var(--color-tomato);
    font: inherit;
    font-size: 1.3rem;
    line-height: 1;
    cursor: pointer;
    transition: border-color 160ms ease, background-color 160ms ease, color 160ms ease;
}

.btn_remove:hover {
    border-color: var(--color-tomato);
    background: var(--color-tomato);
    color: #fff;
}

.btn_remove:focus-visible {
    outline: 3px solid var(--color-cheese);
    outline-offset: 3px;
}

@media (max-width: 480px) {
    .orders_section {
        padding: 1rem 0.75rem;
    }

    .orders_section th,
    .orders_section td {
        padding: 0.7rem 0.35rem;
        font-size: 0.8rem;
    }
}
</style>