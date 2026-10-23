<script setup>
import SignIn from './SignIn.vue';
import useAuth from '@/composables/useAuth';

const { signInModelOpen, userData, logOut } = useAuth();
</script>
<template>
    <header class="site-header">
        <div class="header-content">
            <RouterLink :to="{ name: 'home' }" class="brand-link" aria-label="Pizza Planet home">
                <span class="brand-mark" aria-hidden="true">P</span>
                <span class="brand-name">Pizza Planet</span>
            </RouterLink>
            <nav class="nav-links" aria-label="Main navigation">
                <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
                <RouterLink :to="{ name: 'aboutLink' }" class="nav-link">About</RouterLink>
                <RouterLink :to="{ name: 'menuLink' }" class="nav-link">Menu</RouterLink>
                <RouterLink :to="{ name: 'adminLink' }" class="nav-link">Admin</RouterLink>
                <button type="button" class="nav-link signin-trigger" @click="signInModelOpen = true" v-if="!userData">Sign In</button>
                <button type="button" class="nav-link signin-trigger" @click="logOut" v-if="userData">Log Out</button>
            </nav>
        </div>
        <div class="hero-tagline">
            <h2>The #1 Place For Pizza</h2>
        </div>
    </header>
    <SignIn />
</template>

<style scoped>
.site-header {
    overflow: hidden;
    border-bottom: 4px solid var(--color-tomato, #c94332);
    background: var(--color-ink, #292824);
    color: #fffefa;
}

.header-content {
    width: min(1200px, calc(100% - 3rem));
    min-height: 88px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.brand-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    color: #fffefa;
    text-decoration: none;
}

.brand-mark {
    display: grid;
    width: 44px;
    aspect-ratio: 1;
    place-items: center;
    border-radius: 8px;
    background: var(--color-tomato, #c94332);
    color: #fffefa;
    font-size: 1.4rem;
    font-weight: 800;
}

.brand-name {
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 1;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.nav-link {
    position: relative;
    padding: 0.7rem 0.85rem;
    color: rgba(255, 254, 250, 0.78);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: color 160ms ease;
    cursor: pointer;
}

.signin-trigger {
    border: 0;
    background: transparent;
    font-family: inherit;
}

.nav-link:hover,
.nav-link.router-link-active {
    color: #fffefa;
}

.nav-link::after {
    position: absolute;
    right: 0.85rem;
    bottom: 0.35rem;
    left: 0.85rem;
    height: 2px;
    background: var(--color-cheese, #edbd58);
    content: "";
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 160ms ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
    transform: scaleX(1);
}

.brand-link:focus-visible,
.nav-link:focus-visible {
    outline: 2px solid var(--color-cheese, #edbd58);
    outline-offset: 4px;
}

.hero-tagline {
    padding: 0.8rem 1.5rem;
    border-top: 1px solid rgba(255, 254, 250, 0.12);
    background: rgba(255, 254, 250, 0.035);
    text-align: center;
}

.hero-tagline h2 {
    margin: 0;
    color: var(--color-cheese, #edbd58);
    font-size: 0.9rem;
    font-weight: 600;
}

@media (max-width: 640px) {
    .header-content {
        width: min(100% - 2rem, 36rem);
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        padding: 1rem 0 0.75rem;
    }

    .brand-mark {
        width: 38px;
        font-size: 1.2rem;
    }

    .brand-name {
        font-size: 1.4rem;
    }

    .nav-links {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.25rem;
    }

    .nav-link {
        padding: 0.65rem 0.2rem;
        text-align: center;
        font-size: 0.85rem;
    }

    .nav-link::after {
        right: 0.5rem;
        bottom: 0.25rem;
        left: 0.5rem;
    }

    .hero-tagline {
        padding: 0.65rem 1rem;
    }
}
</style>