<script setup>
    import Delivery from '@/components/Delivery.vue';
    import History from '@/components/History.vue';
</script>

<template>
    <main class="hot">
        <div class="hot_text">
            <h3 class="hot_pizza_name">Hot out the oven!</h3>
            <p class="hot_pizza_description">Vegetrian Hot Pizza</p>
            <RouterLink :to="{ name: 'menuLink' }">Let's Order</RouterLink>
        </div>
        <img src="../assets/images/fire.jpg" alt="pizza oven image">
    </main>
</template>