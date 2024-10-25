<template>
  <NuxtLayout name="production">
    <template #content>
      <h1 v-if="isSearched" class="text-xl my-5 flex gap-9">
        <span v-if="searchedKeyWord">關鍵字：{{ searchedKeyWord }}</span>
        <span v-if="searchedBrand">品牌：{{ searchedBrand }}</span>
        <span v-if="searchedSeries">系列：{{ searchedSeries }}</span>
      </h1>
      <div
        class="productions-wrapper grid grid-cols-1 md:grid-cols-2 gap-10 mx-16"
      >
        <ProductCard
          v-for="product in productionsData"
          :key="product.name"
          :production="product"
          @search-series="searchSeries"
          @search-brand="searchBrand"
        />
      </div>
      <label for="drawer" class="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { TEST_PRODUCTIONS_LIST, TEST_BRANDS_LIST } from '@/constants';

const productionsData = computed(() => {
  // TODO: 未來改帶 API 的參數
  return TEST_PRODUCTIONS_LIST.products.filter((product) => {
    let matches = true;
    if (searchedKeyWord.value) {
      matches = matches && product.name.includes(searchedKeyWord.value);
    }
    if (searchedSeries.value) {
      matches = matches && product.series.includes(searchedSeries.value);
    }
    if (searchedBrand.value) {
      matches = matches && product.brand.includes(searchedBrand.value);
    }
    return matches;
  });
});
const brandsList = ref(TEST_BRANDS_LIST.brands);
const searchedKeyWord = useState('searchedKeyWord');
const searchedBrand = useState('searchedBrand');
const searchedSeries = useState('searchedSeries');
const isSearched = computed(() => {
  return searchedKeyWord.value || searchedBrand.value || searchedSeries.value;
});

onMounted(() => {
  searchedKeyWord.value = '';
  searchedBrand.value = '';
  searchedSeries.value = '';
});

function toggleSearch(value, searchField) {
  searchField.value = value === searchField.value ? '' : value;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchBrand(brand) {
  toggleSearch(brand, searchedBrand);
}

function searchSeries(series) {
  toggleSearch(series, searchedSeries);
}
</script>

<style scoped></style>
