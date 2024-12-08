<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useApiFetch } from '~/composables/useApiFetch';

const auth = useAuthStore();

const regEmail = ref('abc@gmail.com');
const regPassword = ref('1qaz@WSX3edc');
const message = ref('');

// 密碼驗證函式
const validatePassword = (password: string) => {
  // 至少8個字符
  if (password.length < 8) {
    return '密碼至少需要8個字符'
  }

  // 至少包含一個小寫字母
  if (!/[a-z]/.test(password)) {
    return '密碼需要包含至少一個小寫字母'
  }

  // 至少包含一個大寫字母
  if (!/[A-Z]/.test(password)) {
    return '密碼需要包含至少一個大寫字母'
  }

  // 至少包含一個數字
  if (!/[0-9]/.test(password)) {
    return '密碼需要包含至少一個數字'
  }

  // 至少包含一個特殊字符
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return '密碼需要包含至少一個特殊字符'
  }

  return null // 驗證通過
}


const handleRegister = async () => {
  if (!auth.isLoggedIn.value) {
    message.value = 'You must be logged in to register.';
    return;
  }

  // 前端密碼驗證
  const passwordError = validatePassword(regPassword.value)
  if (passwordError) {
    message.value = passwordError;
    return;
  }

  const { data, error } = await useApiFetch('/Users/Register', {
    method: 'POST',
    body: { email: regEmail.value, password: regPassword.value },
  });

  if (error.value) {
    // 後端回傳的錯誤訊息格式處理
    const errorData = error.value.data as any

    if (errorData && errorData.errors) {
      // 提取所有錯誤訊息並顯示
      const serverErrors = Object.values(errorData.errors).flat()
      message.value = serverErrors.join(', ')
    } else {
      message.value = 'Registration failed.'
    }
    return;
  }

  if (data.value) {
    message.value = 'Registration successful!';
  }
};
</script>

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
