<script setup>
import usePizzas from '@/composables/usePizzas';
import { ref } from 'vue';

const { allPizzas, deletePizza, message } = usePizzas();
const showPizzas = ref(false);

</script>

<template>
    <section class="admin_section">
        <header class="admin_section_header">
            <h3>Menu</h3>
            <button class="toggle_btn" @click="showPizzas=!showPizzas">{{ showPizzas ? "hide" : "show" }}</button>
        </header>
        <p v-if="message" class="pizza_error" role="alert">{{ message }}</p>
        <table v-show="showPizzas">
            <thead>
                <tr>
                    <th>Pizza</th>
                    <th>Size 1</th>
                    <th>Price 1</th>
                    <th>Size 2</th>
                    <th>Price 2</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pizza in allPizzas" :key="pizza.id">
                    <td>{{pizza.name}}</td>
                    <template v-for="option in pizza.options" :key="pizza.id + option.size">
                        <td>{{ option.size }}</td>
                        <td>${{ Number(option.price).toFixed(2) }}</td>
                    </template>
                    <td>
                        <button type="button" class="btn_remove" @click="deletePizza(pizza.id)">&times;</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
.admin_section {
    margin-top: 1.5rem;
    padding: clamp(1.25rem, 4vw, 2rem);
    border: 1px solid #e3ddcf;
    border-top: 4px solid var(--color-tomato);
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

.pizza_error {
    margin: 0 0 1rem;
    padding: 0.75rem 1rem;
    border-left: 4px solid var(--color-tomato);
    background: #fff2ef;
    color: #8c2d24;
}

.admin_section table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.admin_section th,
.admin_section td {
    padding: 0.8rem 0.65rem;
    border-bottom: 1px solid #e8e3d8;
}

.admin_section th {
    background: #f5f2e9;
    color: #625f56;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.admin_section th:last-child,
.admin_section td:last-child {
    width: 5rem;
    text-align: center;
}

.admin_section td:first-child {
    color: var(--color-ink);
    font-weight: 600;
}

.admin_section td:nth-child(3),
.admin_section td:nth-child(5) {
    color: var(--color-basil);
    font-weight: 600;
    white-space: nowrap;
}

.admin_section td:nth-child(4),
.admin_section td:nth-child(5) {
    color: #777267;
}

.admin_section tbody tr:last-child td {
    border-bottom: 0;
}

.btn_remove {
    display: inline-grid;
    width: 2.5rem;
    aspect-ratio: 1;
    place-items: center;
    border: 1px solid #e6b9b1;
    border-radius: 6px;
    background: #fff7f5;
    color: var(--color-tomato);
    font: inherit;
    font-size: 1.4rem;
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
    .admin_section {
        padding: 1rem 0.75rem;
    }

    .admin_section th,
    .admin_section td {
        padding: 0.7rem 0.35rem;
        font-size: 0.8rem;
    }

    .admin_section th:last-child,
    .admin_section td:last-child {
        width: 3.25rem;
    }

    .btn_remove {
        width: 2rem;
    }
}
</style>