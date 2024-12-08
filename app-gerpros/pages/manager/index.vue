<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Email:</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
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
      //測試refresh token用
//       auth.setTokens({
//   tokenType: data.value.tokenType,
//   accessToken: data.value.accessToken,
//   refreshToken: data.value.refreshToken,
//   expiresIn: 5 // 設為10秒，方便測試
// })
      router.push('manager/dashboard');
    }
  } catch (e) {
    console.error(e);
    errorMessage.value = 'An error occurred.';
  }
};
</script>
