<template>
  <div class="drawer lg:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center">
      <slot name="content"></slot>
    </div>
    <div class="drawer-side">
      <label
        for="drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li>
          <h2 class="menu-title">精選品牌</h2>
          <ul v-for="brand in brandsList" :key="brand.name">
            <li>
              <a @click="goTo({ brand: brand.name })">{{ brand.name }}</a>
            </li>
            <ul>
              <li v-for="s in brand.series" :key="s.name">
                <a @click="goTo({ brand: brand.name, series: s.name })">{{
                  s.name
                }}</a>
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { TEST_BRANDS_LIST } from '@/constants';

const brandsList = ref();

async function fetchData() {
  try {
    const data = await useApiFetch('/Brands');
    console.log('🚀 ~ fetchData ~ data:', data);
    if (data) {
      brandsList.value = data;
    }
  } catch (error) {
    brandsList.value = TEST_BRANDS_LIST.brands;
    console.error('無法獲取品牌資料', error);
  }
}

onMounted(() => {
  fetchData(); // Ensure the hook is registered synchronously
});

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
