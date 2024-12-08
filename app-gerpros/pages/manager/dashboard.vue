<template>
  <div class="admin-page container mx-auto py-10">
    <div class="grid grid-cols-2 gap-8">
      <NuxtLink
        to="/manager/register"
        class="option-card bg-blue-100 p-6 rounded-lg text-center hover:bg-blue-200"
      >
        <h2 class="text-xl font-semibold">註冊</h2>
      </NuxtLink>

      <NuxtLink
        to="/manager/products"
        class="option-card bg-green-100 p-6 rounded-lg text-center hover:bg-green-200"
      >
        <h2 class="text-xl font-semibold">產品/品牌系列</h2>
      </NuxtLink>

      <NuxtLink
        to="/manager/faq"
        class="option-card bg-yellow-100 p-6 rounded-lg text-center hover:bg-yellow-200"
      >
        <h2 class="text-xl font-semibold">常見問題</h2>
      </NuxtLink>

      <NuxtLink
        to="/manager/topic"
        class="option-card bg-red-100 p-6 rounded-lg text-center hover:bg-red-200"
      >
        <h2 class="text-xl font-semibold">主題專欄</h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'manager',
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
.option-card {
  transition: background-color 0.3s;
  cursor: pointer;
}
</style>
