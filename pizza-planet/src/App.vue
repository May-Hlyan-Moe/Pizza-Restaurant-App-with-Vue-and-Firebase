<script setup>
  import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <RouterView />
  <div class="info_block_wrapper">
    <RouterView name="delivery" />
    <RouterView name="locations" />
  </div>
</template>

<style>
:root {
  font-family: "Poppins", sans-serif;
  color: #292824;
  background: #faf8f1;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --color-ink: #292824;
  --color-paper: #faf8f1;
  --color-tomato: #c94332;
  --color-basil: #456b4e;
  --color-cheese: #edbd58;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(ellipse at 12% 16%, rgba(237, 189, 88, 0.12), transparent 28rem),
    var(--color-paper);
}

img {
  display: block;
  max-width: 100%;
}

#app > h1,
#app > h3 {
  width: min(1200px, calc(100% - 3rem));
  margin: 2.5rem auto;
  padding: 0.25rem 0 0.25rem 1rem;
  border-left: 5px solid var(--color-tomato);
  color: var(--color-ink);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.2;
}

.about {
  width: min(1200px, calc(100% - 3rem));
  margin: 3rem auto;
}

.intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
}

.info_text_wrapper h3 {
  margin: 0 0 1rem;
  color: var(--color-basil);
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.15;
}

.info_text {
  max-width: 38rem;
  margin: 0;
  color: #625f56;
  font-size: 1.1rem;
  line-height: 1.8;
}

.intro img {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  object-fit: cover;
}

.more_info_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 3rem;
  padding: 1.5rem 0;
  border-top: 1px solid #ded9cb;
  border-bottom: 1px solid #ded9cb;
}

.more_info_wrapper h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.more_info_wrapper nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.more_info_wrapper a {
  padding: 0.6rem 0.9rem;
  border: 1px solid #d8d2c4;
  border-radius: 6px;
  color: var(--color-basil);
  font-weight: 600;
  text-decoration: none;
  transition: color 160ms ease, background-color 160ms ease, border-color 160ms ease;
}

.more_info_wrapper a:hover,
.more_info_wrapper a.router-link-active {
  border-color: var(--color-basil);
  background: var(--color-basil);
  color: white;
}

.more_info_wrapper a:focus-visible {
  outline: 3px solid var(--color-cheese);
  outline-offset: 3px;
}

@media (max-width: 700px) {
  #app > h1,
  #app > h3,
  .about,
  .info_block_wrapper {
    width: min(100% - 2rem, 36rem);
  }

  #app > h1,
  #app > h3 {
    margin: 1.75rem auto;
  }

  .about {
    margin: 2rem auto;
  }

  .intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .intro img {
    aspect-ratio: 16 / 10;
  }

  .more_info_wrapper {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2rem;
  }

}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
