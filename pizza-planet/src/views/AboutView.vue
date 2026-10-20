<template>
    <div class="about">
        <section class="intro">
            <div class="info_text_wrapper">
                <h3>Quality Pizza for 30 years</h3>
                <p class="info_text">
                    Nothing but the best ingredients, with the friendly atmosphere.
                </p>
            </div>
            <img src="../assets/images/calzone.jpg" class="" alt="img"/>
        </section>
        <section class="more_info_wrapper">
            <h3>Click on the links for more info.</h3>
            <nav>
                <RouterLink :to="{ name: 'deliveryLink' }">Delivery</RouterLink>
                <RouterLink :to="{ name: 'historyLink' }">History</RouterLink>
                <RouterLink :to="{ name: 'locationsLink' }">Locations</RouterLink>
            </nav>
        </section>
    </div>

    <RouterView />
</template>