<template>
  <NuxtLayout name="production">
    <template #content>
      <h1 v-if="isSearched" class="text-xl my-5 flex gap-9">
        <span v-if="searchedKeyWord">關鍵字：{{ searchedKeyWord }}</span>
        <span v-if="searchedBrand">品牌：{{ searchedBrand }}</span>
        <span v-if="searchedSeries">系列：{{ searchedSeries }}</span>
      </h1>
      <div
        class="productions-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10 mx-16"
      >
        <ProductCard
          v-for="product in productionsData"
          :key="product.name"
          :production="product"
          @search-series="searchSeries"
          @search-brand="searchBrand"
        />
      </div>
      <span @click="goTo({ pageNumber: 2 })">2</span>
    </template>
  </NuxtLayout>
</template>

<script setup>
const TEST_PRODUCTIONS_LIST = ref({});
const productionsData = computed(() => {
  const productions = TEST_PRODUCTIONS_LIST.value.items;
  return productions?.map((production) => {
    return {
      ...production,
      image: '/image/about-us-photo-2.webp',
    };
  });
});
const searchedKeyWord = useState('searchedKeyWord');
const searchedBrand = useState('searchedBrand');
const searchedSeries = useState('searchedSeries');
const isSearched = computed(() => {
  return searchedKeyWord.value || searchedBrand.value || searchedSeries.value;
});

onMounted(async () => {
  const route = useRoute();
  const { PageNumber, Brand, Series } = route.query;
  const params = {
    PageSize: 12, // 固定參數
  };
  params.PageNumber = PageNumber ?? 1;
  if (Brand) {
    params.Brand = Brand;
  }
  if (Series) {
    params.Series = Series;
  }

  console.log('🚀 ~ onMounted ~ params:', params);
  TEST_PRODUCTIONS_LIST.value = await useApiFetch('/ProductItems', {
    params,
  });

  searchedKeyWord.value = '';
  searchedBrand.value = '';
  searchedSeries.value = '';
});

async function goTo({ pageNumber = 1, brand, series }) {
  await navigateTo({
    path: '/product',
    query: {
      PageNumber: pageNumber,
      Brand: brand,
      Series: series,
    },
  });
}

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
