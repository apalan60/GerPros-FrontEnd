<template>
  <div>
    <div class="join">
      <button class="join-item btn">1</button>
      <button class="join-item btn btn-active">2</button>
      <button class="join-item btn">3</button>
      <button class="join-item btn">4</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPages,
});
console.log('🚀 ~ props:', props);
</script>

<style scoped></style>
