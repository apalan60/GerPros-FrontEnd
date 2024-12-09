<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">產品管理</h1>

    <!-- 品牌與系列選單 -->
    <div class="mb-4">
      <div class="flex flex-col sm:flex-row gap-4">
        <!-- 品牌下拉選單 -->
        <div class="flex flex-col">
          <label for="brand-select" class="mb-1 text-sm font-semibold">選擇品牌</label>
          <select
              id="brand-select"
              class="select select-bordered"
              v-model="selectedBrandId"
              @change="onBrandChange"
          >
            <option value="" disabled selected>請選擇品牌</option>
            <option v-for="brand in brands" :key="brand.id" :value="brand.id">
              {{ brand.name }}
            </option>
          </select>
        </div>

        <!-- 系列下拉選單 -->
        <div class="flex flex-col" v-if="selectedBrand">
          <label for="series-select" class="mb-1 text-sm font-semibold">選擇系列</label>
          <select
              id="series-select"
              class="select select-bordered"
              v-model="selectedSeriesId"
              @change="onSeriesChange"
          >
            <option value="" disabled selected>請選擇系列</option>
            <option v-for="series in selectedBrand.series" :key="series.id" :value="series.id">
              {{ series.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- 產品清單 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

const products = ref([]);
const brands = ref([]);
const selectedBrand = ref(null);
const selectedBrandId = ref("");
const selectedSeriesId = ref("");
const pagination = ref({
  pageNumber: 1,
  totalPages: 0,
  totalCount: 0,
  hasPreviousPage: false,
  hasNextPage: false,
});

const fetchBrands = async () => {
  try {
    const { data } = await useApiFetch('/Brands');
    if (data.value) {
      brands.value = data.value;
    }
  } catch (error) {
    console.error('無法獲取品牌資料', error);
  }
};

const fetchProducts = async (page: number) => {
  try {
    const params: Record<string, any> = {
      PageNumber: page,
      PageSize: 24,
    };
    if (selectedBrandId.value) {
      params.Brand = brands.value.find((b) => b.id === selectedBrandId.value)?.name;
    }
    if (selectedSeriesId.value) {
      params.Series = selectedBrand.value?.series.find((s) => s.id === selectedSeriesId.value)?.name;
    }

    const { data } = await useApiFetch('/ProductItems', { params });
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

const onBrandChange = () => {
  selectedBrand.value = brands.value.find((b) => b.id === selectedBrandId.value) || null;
  selectedSeriesId.value = ""; // 重置系列選擇
  fetchProducts(1);
};

const onSeriesChange = () => {
  fetchProducts(1);
};

onMounted(() => {
  fetchBrands();
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
