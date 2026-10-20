<script setup lang="ts">
import NewPizza from '@/components/admin/NewPizza.vue';
import Orders from '@/components/admin/Orders.vue';
import Pizzas from '@/components/admin/Pizzas.vue';

</script>

<template>
    <main class="admin_page">
        <h1 class="admin_page_title">Admin</h1>
        <NewPizza />
        <Pizzas />
        <Orders />
    </main>
</template>

<style scoped>
.admin_page {
    width: min(900px, calc(100% - 3rem));
    margin: 2.5rem auto 4rem;
}

.admin_page_title {
    margin: 0 0 1.75rem;
    padding: 0.25rem 0 0.25rem 1rem;
    border-left: 5px solid var(--color-tomato);
    color: var(--color-ink);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    line-height: 1.2;
}

@media (max-width: 700px) {
    .admin_page {
        width: min(100% - 2rem, 36rem);
        margin: 1.75rem auto 3rem;
    }

    .admin_page_title {
        margin-bottom: 1.25rem;
    }
}
</style>