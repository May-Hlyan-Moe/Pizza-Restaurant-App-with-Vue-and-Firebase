<script setup>
import useAuth from '@/composables/useAuth';
import { ref } from 'vue';

const {signUp, logIn, logOut, errorMessage, signInModelOpen, userData} = useAuth();
const formData = ref({
    email: "",
    password: "",
});
</script>

<template>
    <div class="modal" v-if="signInModelOpen">
        <div class="modal_content">
            <span class="close_modal" @click="signInModelOpen = !signInModelOpen">&#10060;</span>
            <p class="modal_text">Please login to continue.</p>
            <p class="error_message">{{ errorMessage }}</p>
            <form action="">
                <div class="form_group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="please enter your email" v-model="formData.email">
                </div>
                <div class="form_group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="please enter your password" v-model="formData.password">
                </div>
                <div class="form_group">
                    <button type="button" class="login_btn" @click.prevent="logIn(formData.email, formData.password)">Login</button>
                    <button type="button" class="signup_btn" @click.prevent="signUp(formData.email, formData.password)">Signup</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

.modal {
    position: fixed;
    z-index: 10;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: rgba(41, 40, 36, 0.58);
}

.modal_content {
    position: relative;
    width: min(100%, 28rem);
    padding: 2rem;
    border-top: 5px solid var(--color-tomato);
    border-radius: 8px;
    background: #fffefa;
    box-shadow: 0 24px 70px rgba(25, 24, 20, 0.24);
}

.close_modal {
    position: absolute;
    top: 0.75rem;
    right: 0.85rem;
    color: #777267;
    font-size: 0.9rem;
    cursor: pointer;
}

.modal_text {
    margin: 0 1.5rem 1.25rem 0;
    color: var(--color-ink);
    font-size: 1.35rem;
    font-weight: 600;
}

.error_message {
    margin: 0 0 1rem;
    color: var(--color-tomato);
    font-size: 0.9rem;
}

.form_group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-top: 1rem;
}

.form_group label {
    grid-column: 1 / -1;
    margin-bottom: -0.55rem;
    color: #625f56;
    font-size: 0.9rem;
    font-weight: 600;
}

.form_group input {
    grid-column: 1 / -1;
    width: 100%;
    min-height: 2.9rem;
    padding: 0.7rem 0.8rem;
    border: 1px solid #d8d2c4;
    border-radius: 4px;
    background: white;
    color: var(--color-ink);
    font: inherit;
    font-size: 0.9rem;
}

.form_group input:focus-visible {
    border-color: var(--color-basil);
    outline: 3px solid rgba(69, 107, 78, 0.2);
    outline-offset: 1px;
}

.form_group button {
    min-height: 2.9rem;
    padding: 0.65rem 0.8rem;
    border: 1px solid var(--color-basil);
    border-radius: 4px;
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 160ms ease, color 160ms ease;
}

.form_group button:focus-visible {
    outline: 3px solid var(--color-cheese);
    outline-offset: 3px;
}

.login_btn {
    background: var(--color-basil);
    color: white;
}

.login_btn:hover {
    background: #365a3f;
}

.signup_btn {
    background: transparent;
    color: var(--color-basil);
}

.signup_btn:hover {
    background: #edf2eb;
}

@media (max-width: 480px) {
    .modal_content {
        padding: 1.5rem;
    }
}
</style>