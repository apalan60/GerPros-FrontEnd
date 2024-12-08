<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h1 class="mb-6 text-2xl font-bold text-center text-gray-800">登入</h1>
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email:</span>
          </label>
          <input
            v-model="email"
            type="email"
            class="input input-bordered w-full"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password:</span>
          </label>
          <input
            v-model="password"
            type="password"
            class="input input-bordered w-full"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-full">送出</button>
      </form>
      <p v-if="errorMessage" class="mt-4 text-sm text-red-500 text-center">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';

definePageMeta({
  layout: 'manager',
});

const email = ref('administrator@localhost');
const password = ref('Administrator1!');
const errorMessage = ref('');
const router = useRouter();
const auth = useAuthStore();

const handleLogin = async () => {
  try {
    const { data, error } = await useApiFetch('/Users/Login', {
      method: 'POST',
      body: { email: email.value, password: password.value },
    });

    if (error.value) {
      errorMessage.value = 'Login failed';
      return;
    }

    if (data.value) {
      auth.setTokens(data.value);
      router.push('manager/dashboard');
    }
  } catch (e) {
    console.error(e);
    errorMessage.value = 'An error occurred.';
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #f9fafb;
}
</style>
/script>
