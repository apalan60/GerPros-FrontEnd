<template>
  <button class="btn btn-danger" @click="deleteProduct">
    刪除產品
  </button>
</template>

<script setup lang="ts">
import { useApiFetch } from '~/composables/useApiFetch';

const props = defineProps<{
  productItemId: string
}>();

const deleteProduct = async () => {
  try {
    const result = await useApiFetch(`/ProductItems/${props.productItemId}`, {
      method: 'DELETE',
    });
    console.log('產品刪除成功', result);
  } catch (error) {
    console.error('產品刪除失敗', error);
  }
};
</script>
