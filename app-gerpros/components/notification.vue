<template>
  <div
    v-if="visible"
    class="bg-green-500 text-white p-4 rounded shadow-lg transition-opacity duration-300"
    :class="{ 'opacity-0': !visible, 'opacity-100': visible }"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  message: String,
  show: Boolean,
});

const visible = ref(false);

watch(
  () => props.show,
  (newValue) => {
    visible.value = newValue;
    if (newValue) {
      // 自動隱藏通知框
      setTimeout(() => {
        visible.value = false;
      }, 2000);
    }
  },
  { immediate: true },
);
</script>

<style scoped>
/* 添加動畫效果 */
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
</style>
