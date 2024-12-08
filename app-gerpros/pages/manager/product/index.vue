<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">產品管理</h1>

    <!-- 產品清單 -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="card bg-base-100 shadow-md hover:shadow-lg"
      >
        <figure>
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.detail || '暫無描述' }}</p>
          <p class="text-lg font-bold">${{ product.price }}</p>
        </div>
      </div>
    </div>

    <!-- 分頁 -->
    <div class="flex justify-center mt-6">
      <button
        class="btn btn-outline"
        :disabled="!pagination.hasPreviousPage"
        @click="fetchProducts(pagination.pageNumber - 1)"
      >
        上一頁
      </button>
      <button
        class="btn btn-outline ml-2"
        :disabled="!pagination.hasNextPage"
        @click="fetchProducts(pagination.pageNumber + 1)"
      >
        下一頁
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useApiFetch } from '~/composables/useApiFetch';

definePageMeta({
  layout: 'manager',
});

const products = ref([]);
const pagination = ref({
  pageNumber: 1,
  totalPages: 0,
  totalCount: 0,
  hasPreviousPage: false,
  hasNextPage: false,
});

const fetchProducts = async (page: number) => {
  try {
    const { data } = await useApiFetch('/ProductItems', {
      params: {
        PageNumber: page,
        PageSize: 24,
      },
    });
    if (data.value) {
      products.value = data.value.items;
      pagination.value = {
        pageNumber: data.value.pageNumber,
        totalPages: data.value.totalPages,
        totalCount: data.value.totalCount,
        hasPreviousPage: data.value.hasPreviousPage,
        hasNextPage: data.value.hasNextPage,
      };
    }
  } catch (error) {
    console.error('無法獲取產品資料', error);
  }
};

onMounted(() => {
  fetchProducts(1);
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.card-body {
  padding: 1rem;
}
</style>
