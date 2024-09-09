<template>
  <div class="bg-gray-900 p-6 rounded-lg flex flex-col items-start">
    <component :is="icon" class="text-xl text-white mb-4"></component>
    <h3 class="text-lg text-white font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-400">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>
