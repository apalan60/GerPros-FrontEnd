<template>
  <button
    class="btn btn-primary"
    @click="handleAdd"
  >
    新增產品
  </button>
</template>

<script setup lang="ts">
import { useApiFetch } from '~/composables/useApiFetch';

const props = defineProps<{
  seriesId: string;
  name: string;
  price: number;
  image: File | null;
  detail: string;
}>();

const emit = defineEmits<{
  (e: 'success', result: any): void;
  (e: 'error', error: any): void;
}>();

const handleAdd = async () => {
  try {
    const formData = new FormData();
    formData.append('seriesId', props.seriesId);
    formData.append('name', props.name);
    formData.append('price', props.price.toString());
    formData.append('detail', props.detail || '');
    if (props.image) {
      formData.append('image', props.image);
    }

    const result = await useApiFetch('/ProductItems', {
      method: 'POST',
      body: formData,
    });
    console.log('產品新增成功', result);
    emit('success', result);
  }
  catch (error) {
    console.error('產品新增失敗', error);
    emit('error', error);
  }
};
</script>
