<template>
  <div
    class="relative flex items-center justify-center min-h-screen bg-gray-100"
  >
    <!-- 通知框 -->
    <Notification
      :message="notificationMessage"
      :show="showNotification"
      class="absolute top-4 left-1/2 transform -translate-x-1/2"
    />

    <!-- 註冊表單 -->
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h1 class="mb-6 text-2xl font-bold text-center text-gray-800">註冊</h1>
      <div v-if="!auth.isLoggedIn" class="text-center">
        <p class="text-gray-600">
          You are not logged in. Please
          <nuxt-link to="/" class="text-blue-500 hover:underline"
            >login</nuxt-link
          >.
        </p>
      </div>
      <form v-else class="space-y-6" @submit.prevent="handleRegister">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email:</span>
          </label>
          <input
            v-model="regEmail"
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
            v-model="regPassword"
            type="password"
            class="input input-bordered w-full"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="btn btn-success w-full">送出</button>
      </form>
      <p v-if="message" class="mt-4 text-sm text-red-500 text-center">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useApiFetch } from '~/composables/useApiFetch';
import Notification from '~/components/Notification.vue';

definePageMeta({
  layout: 'manager',
});

const auth = useAuthStore();

const regEmail = ref('abc@gmail.com');
const regPassword = ref('1qaz@WSX3edc');
const message = ref('');

// 密碼驗證函式
const validatePassword = (password: string) => {
  if (password.length < 8) return '密碼至少需要8個字符';
  if (!/[a-z]/.test(password)) return '密碼需要包含至少一個小寫字母';
  if (!/[A-Z]/.test(password)) return '密碼需要包含至少一個大寫字母';
  if (!/[0-9]/.test(password)) return '密碼需要包含至少一個數字';
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    return '密碼需要包含至少一個特殊字符';
  return null;
};

const showNotification = ref(false);
const notificationMessage = ref('');
const isLoading = ref(false);

const handleRegister = async () => {
  if (isLoading.value) return;

  message.value = '';
  isLoading.value = true;

  if (!auth.isLoggedIn.value) {
    message.value = 'You must be logged in to register.';
    isLoading.value = false;
    return;
  }

  const passwordError = validatePassword(regPassword.value);
  if (passwordError) {
    message.value = passwordError;
    isLoading.value = false;
    return;
  }

  try {
    const data = await useApiFetch('/Users/Register', {
      method: 'POST',
      body: { email: regEmail.value, password: regPassword.value },
    });

    notificationMessage.value = '註冊成功';
    showNotification.value = true;

  } catch (error: any) {
    const errorData = error?.data;
    if (errorData && errorData.errors) {
      const serverErrors = Object.values(errorData.errors).flat();
      message.value = serverErrors.join(', ');
    } else {
      message.value = 'Registration failed.';
    }
  } finally {
    isLoading.value = false;
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
