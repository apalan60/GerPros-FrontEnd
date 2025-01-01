<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center w-full">
      <FaqEdit v-if="isEditMode" />
      <FaqList v-else />
    </div>
    <button class="btn btn-outline w-full mb-2" @click="isEditMode = !isEditMode">
      {{ isEditMode ? '返回清單' : '進入編輯' }}
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'manager',
});

const isEditMode = ref(false);
</script>

<style scoped></style>
