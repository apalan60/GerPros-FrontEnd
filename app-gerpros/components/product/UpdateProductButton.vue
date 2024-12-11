<template>
  <button class="btn btn-primary" @click="updateProduct">
    更新
  </button>
</template>

<script setup lang="ts">
import { useApiFetch } from '~/composables/useApiFetch';

const props = defineProps<{
  productItemId: string,
  seriesId: string,
  name: string,
  price: number,
  image: string,
  detail: string
}>();

const updateProduct = async () => {
  try {
    const payload = {
      id: props.productItemId,
      seriesId: props.seriesId,
      name: props.name,
      price: props.price,
      image: props.image,
      detail: props.detail,
    };

    const result = await useApiFetch(`/ProductItems/${props.productItemId}`, {
      method: 'PUT',
      body: payload,
    });
    console.log('產品更新成功', result);
  } catch (error) {
    console.error('產品更新失敗', error);
  }
};
</script>
