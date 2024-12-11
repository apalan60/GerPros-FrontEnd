<template>
  <button class="btn btn-danger" @click="deleteProduct">
    刪除
  </button>
  <ToastMessage />
</template>

<script setup lang="ts">
import { useApiFetch } from '~/composables/useApiFetch';
import { useToast } from '~/composables/useToast';
import ToastMessage from "~/components/ToastMessages.vue";

const props = defineProps<{
  productItemId: string
}>();

const { showToast } = useToast();

const deleteProduct = async () => {
  try {
    const result = await useApiFetch(`/ProductItems/${props.productItemId}`, {
      method: 'DELETE',
    });
    // 刪除成功後顯示成功訊息
    showToast('success', '產品刪除成功！');
  } catch (error) {
    // 刪除失敗顯示錯誤訊息
    showToast('error', '產品刪除失敗，請稍後再試');
  }
};
</script>
