<template>
  <button class="btn btn-primary" @click="addProduct">
    新增產品
  </button>
</template>

<script setup lang="ts">
import { useApiFetch } from '~/composables/useApiFetch';

const props = defineProps<{
  seriesId: string,
  name: string,
  price: number,
  image: string,
  detail: string
}>();

const addProduct = async () => {
  try {
    const payload = {
      seriesId: props.seriesId,
      name: props.name,
      price: props.price,
      image: props.image,
      detail: props.detail,
    };

    const result = await useApiFetch('/ProductItems', {
      method: 'POST',
      body: payload,
    });
    console.log('產品新增成功', result);
  } catch (error) {
    console.error('產品新增失敗', error);
  }
};
</script>
