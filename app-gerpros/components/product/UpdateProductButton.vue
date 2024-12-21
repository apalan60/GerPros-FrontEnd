<template>
  <button
    class="btn btn-primary"
    @click="updateProduct"
  >
    更新
  </button>
</template>

<script setup lang="ts">
import { useApiFetch } from '~/composables/useApiFetch';

const props = defineProps<{
  productItemId: string;
  seriesId: string;
  name: string;
  price: number;
  image: File | null;
  detail: string;
}>();

const { showToast } = useToast();

const updateProduct = async () => {
  try {
    const formData = new FormData();
    formData.append('seriesId', props.seriesId);
    formData.append('name', props.name);
    formData.append('price', props.price.toString());
    formData.append('detail', props.detail || '');
    if (props.image) {
      formData.append('image', props.image);
    }

    const result = await useApiFetch(`/ProductItems/${props.productItemId}`, {
      method: 'PUT',
      body: formData,
    });
    console.log('產品更新成功', result);
    showToast('success', '產品更新成功！');
  }
  catch (error) {
    console.error('產品更新失敗', error);
    showToast('error', '產品更新失敗！');
  }
};
</script>
