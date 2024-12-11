<template>
  <NuxtLayout name="production">
    <template #content>
      <div class="breadcrumbs text-sm w-full ml-10 flex justify-start">
        <ul>
          <li>
            <a><NuxtLink :to="'/products'">Productions</NuxtLink> </a>
          </li>
          <li>
            <a>{{ product?.brandName }}</a>
          </li>
          <li>
            <a>{{ product?.seriesName }}</a>
          </li>
          <li>
            {{ product?.name }}
          </li>
        </ul>
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mx-16 my-10">
          <div>
            <figure>
              <img :src="product?.image" :alt="product?.title" />
            </figure>
          </div>
          <div>
            <h1 class="text-2xl mb-5">{{ product?.name }}</h1>
            <h2 class="text-xl">Brand: {{ product?.brandName }}</h2>
            <h2 class="text-xl">Series: {{ product?.seriesName }}</h2>
            <h2 class="text-xl">Price: {{ product?.price }}</h2>
            <h2 class="text-xl">
              Description: {{ id }} {{ product?.description }}
            </h2>
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
  } catch (error) {
    product.value = TEST_PRODUCT_DETAIL;
    console.error('無法獲取產品資料', error);
  }
}
</script>

<style scoped></style>
