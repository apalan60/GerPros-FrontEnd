<template>
  <div>
    <h1>Register</h1>
    <div v-if="!auth.isLoggedIn">
      <p>
        You are not logged in. Please <nuxt-link to="/login">login</nuxt-link>.
      </p>
    </div>
    <form v-else @submit.prevent="handleRegister">
      <div>
        <label>Email:</label>
        <input v-model="regEmail" type="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input v-model="regPassword" type="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useApiFetch } from '~/composables/useApiFetch';

const regEmail = ref('abc@gmail.com');
const regPassword = ref('1qaz@WSX3edc');
const message = ref('');
const auth = useAuthStore();

const handleRegister = async () => {
  if (!auth.isLoggedIn.value) {
    message.value = 'You must be logged in to register.';
    return;
  }

  const { data, error } = await useApiFetch('/api/Users/Register', {
    method: 'POST',
    body: { email: regEmail.value, password: regPassword.value },
  });

  if (error.value) {
    message.value = 'Registration failed.';
    return;
  }

  if (data.value) {
    message.value = 'Registration successful!';
  }
};
</script>
