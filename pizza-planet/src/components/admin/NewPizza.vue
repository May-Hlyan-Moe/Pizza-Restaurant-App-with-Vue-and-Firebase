<script setup>

import { ref } from 'vue';
import { addDoc } from 'firebase/firestore';
import { dbPizzasRef } from '@/firebase';

const newPizza = ref({
        name: "Eg. Margherita",
        description: "Eg. A delicious tomato based pizza topped with mozarella",
        options: [
                { size: 9, price: 6.95 },
                { size: 12, price: 12.95 },
        ],
});

async function add () {
        try {
                await addDoc(dbPizzasRef, newPizza.value);
                window.alert(`Pizza ${newPizza.value.name} has been added.`);
        }
        catch (e) {
                window.alert('There was an error adding a pizza...');
        }
}

</script>
<template>
        <section class="admin_section">
                <header class="admin_section_header">
                        <h3>Add new pizza</h3>
                        <form action="">
                                <div class="form_group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" v-model="newPizza.name">
                                </div>
                                <div class="form_group">
                                        <label for="description">Description</label>
                                        <textarea rows="5" id="description" v-model="newPizza.description"></textarea>
                                </div>

                                <p>
                                        <strong>Option 1:</strong>
                                </p>
                                <div class="form_group">
                                        <label for="size1">Size (")</label>
                                        <input type="text" id="size1" v-model="newPizza.options[0].size">
                                </div>
                                <div class="form_group">
                                        <label for="price1">Price</label>
                                        <input type="text" id="price1" v-model="newPizza.options[0].price">
                                </div>

                                <p>
                                        <strong>Option 2:</strong>
                                </p>
                                <div class="form_group">
                                        <label for="size2">Size (")</label>
                                        <input type="text" id="size2" v-model="newPizza.options[1].size">
                                </div>
                                <div class="form_group">
                                        <label for="price2">Price</label>
                                        <input type="text" id="price2" v-model="newPizza.options[1].price">
                                </div>

                                <div class="form_group">
                                        <button @click.prevent="add">Add</button>
                                </div>
                        </form>
                </header>
        </section>
</template>

<style scoped>
.admin_section {
        padding: clamp(1.25rem, 4vw, 2rem);
        border: 1px solid #e3ddcf;
        border-top: 4px solid var(--color-basil);
        border-radius: 8px;
        background: #fffefa;
        box-shadow: 0 12px 30px rgba(41, 40, 36, 0.07);
}

.admin_section_header h3 {
        margin: 0 0 1.5rem;
        color: var(--color-basil);
        font-size: 1.4rem;
        line-height: 1.25;
}

.admin_section form {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.1rem 1.25rem;
}

.form_group {
        display: flex;
        min-width: 0;
        flex-direction: column;
        gap: 0.4rem;
}

.form_group:first-child,
.form_group:nth-child(2),
.form_group:last-child {
        grid-column: 1 / -1;
}

.form_group label {
        color: #4f4b43;
        font-size: 0.9rem;
        font-weight: 600;
}

.form_group input,
.form_group textarea {
        width: 100%;
        min-height: 2.8rem;
        padding: 0.7rem 0.8rem;
        border: 1px solid #d8d2c4;
        border-radius: 6px;
        background: #fff;
        color: var(--color-ink);
        font: inherit;
        line-height: 1.5;
        transition: border-color 160ms ease, box-shadow 160ms ease;
}

.form_group textarea {
        min-height: 8rem;
        resize: vertical;
}

.form_group input:focus,
.form_group textarea:focus {
        border-color: var(--color-basil);
        outline: none;
        box-shadow: 0 0 0 3px rgba(69, 107, 78, 0.16);
}

.admin_section form > p {
        grid-column: 1 / -1;
        margin: 0.2rem 0 -0.25rem;
        padding: 0.85rem 0 0.15rem;
        border-top: 1px solid #e3ddcf;
        color: var(--color-basil);
}

.admin_section form > p strong {
        display: inline-flex;
        min-height: 1.9rem;
        align-items: center;
        padding: 0.2rem 0.65rem;
        border-radius: 4px;
        background: #edf1e9;
        font-size: 0.85rem;
}

.form_group button {
        align-self: flex-start;
        min-height: 2.8rem;
        padding: 0.65rem 1.4rem;
        border: 0;
        border-radius: 6px;
        background: var(--color-tomato);
        color: #fff;
        font: inherit;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 160ms ease, transform 160ms ease;
}

.form_group button:hover {
        background: #ad3528;
        transform: translateY(-1px);
}

.form_group button:focus-visible {
        outline: 3px solid var(--color-cheese);
        outline-offset: 3px;
}

@media (max-width: 560px) {
        .admin_section form {
                grid-template-columns: 1fr;
                gap: 0.9rem;
        }

        .admin_section {
                padding: 1.1rem;
        }

        .form_group:first-child,
        .form_group:nth-child(2),
        .form_group:last-child,
        .admin_section form > p {
                grid-column: 1;
        }
}
</style>