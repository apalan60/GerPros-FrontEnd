<template>
  <NuxtLayout name="product">
    <template #content>
      <div
        class="breadcrumbs w-full pl-10 mb-8 flex justify-start border-b border-solid border-base-200"
      >
        <ul>
          <li>
            <a><NuxtLink :to="'/products'">All Products</NuxtLink> </a>
          </li>
          <li>
            <a @click="goTo({ brand: brandName })">{{ product?.brandName }}</a>
          </li>
          <li>
            <a @click="goTo({ brand: brandName, series: seriesName })">{{
              product?.seriesName
            }}</a>
          </li>
          <li>
            {{ product?.name }}
          </li>
        </ul>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto px-4 md:px-0">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="rounded-lg shadow overflow-hidden">
              <figure class="h-64 md:h-96">
                <img
                  :src="product?.image"
                  :alt="product?.title"
                  class="w-full h-full object-cover"
                >
              </figure>
            </div>
            <div class="rounded-lg shadow p-6 md:p-10">
              <h1 class="text-2xl md:text-3xl font-bold mb-4">
                {{ product?.name }}
              </h1>
              <div class="space-y-4 border-t border-gray-200 pt-4">
                <div>
                  <h2 class="text-lg font-medium">
                    Brand
                  </h2>
                  <p class="text-gray-600">
                    {{ product?.brandName }}
                  </p>
                </div>
                <div>
                  <h2 class="text-lg font-medium">
                    Series
                  </h2>
                  <p class="text-gray-600">
                    {{ product?.seriesName }}
                  </p>
                </div>
                <div>
                  <h2 class="text-lg font-medium">
                    Price
                  </h2>
                  <p class="text-gray-600">
                    {{ product?.price }}
                  </p>
                </div>
                <div>
                  <h2 class="text-lg font-medium">
                    Description
                  </h2>
                  <p class="text-gray-600">
                    {{ product?.detail }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { TEST_PRODUCT_DETAIL } from '@/constants';

const route = useRoute();
const product = ref();
const id = ref(route.params.id);

onMounted(async () => {
  await fetchData();
});

async function fetchData() {
  try {
    const data = await useApiFetch(`/ProductItems/${id.value}`);
    if (data) {
      product.value = data;
    }
  }
  catch (error) {
    product.value = TEST_PRODUCT_DETAIL;
    console.error('無法獲取產品資料', error);
  }
}

async function goTo({ pageNumber = 1, brand, series } = {}) {
  await navigateTo({
    path: '/products',
    query: {
      PageNumber: pageNumber,
      Brand: brand,
      Series: series,
    },
  });
}
</script>

<style scoped></style>
