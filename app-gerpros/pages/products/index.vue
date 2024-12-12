<template>
  <NuxtLayout name="product">
    <template #content>
      <div
        class="breadcrumbs w-full pl-10 mb-8 flex justify-start border-b border-solid border-base-200"
      >
        <ul>
          <li><a @click="goTo()">All Products</a></li>
          <li v-if="searchedBrand">
            <a @click="goToCurrentBrand()">{{ searchedBrand }}</a>
          </li>
          <li v-if="searchedSeries">{{ searchedSeries }}</li>
        </ul>
      </div>
      <div
        class="productions-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10 mx-16"
      >
        <ProductCard
          v-for="product in productionsItems"
          :key="product.name"
          :production="product"
          @search-brand="searchBrand"
          @search-series="searchSeries"
        />
      </div>
      <ProductPagination
        class="mt-8"
        :total-pages="productionsTotalPages"
        @go-to-page="goToPage"
      />
    </template>
  </NuxtLayout>
</template>

<script setup>
import { TEST_PRODUCTIONS_LIST } from '~/constants';

const route = useRoute();

// production
const productionsRawData = ref({});
const productionsItems = computed(() => {
  const productions = productionsRawData.value.items;
  return productions?.map((production) => {
    return {
      ...production,
      image: '/image/about-us-photo-2.webp',
    };
  });
});
const productionsTotalPages = computed(() => {
  return productionsRawData.value.totalPages;
});

// search
const searchedBrand = computed(() => route.query.Brand);
const searchedSeries = computed(() => route.query.Series);

function searchBrand(brand) {
  goTo({ brand });
}

function searchSeries({ brand, series }) {
  goTo({ brand, series });
}

async function fetchData() {
  const params = {
    PageSize: 12, // 固定參數
  };
  params.PageNumber = route.query.PageNumber ?? 1;
  if (searchedBrand.value) {
    params.Brand = searchedBrand.value;
  }
  if (searchedSeries.value) {
    params.Series = searchedSeries.value;
  }
  try {
    const data = await useApiFetch('/ProductItems', {
      params,
    });
    if (data) {
      productionsRawData.value = data;
    }
  } catch (error) {
    productionsRawData.value = TEST_PRODUCTIONS_LIST;
    console.error('無法獲取產品資料', error);
  }
}

// goTo
async function goToPage(pageNumber) {
  await goTo({
    pageNumber,
    brand: searchedBrand.value,
    series: searchedSeries.value,
  });
}

async function goToCurrentBrand() {
  await goTo({ brand: searchedBrand.value });
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

watch(
  () => route.query,
  () => {
    fetchData();
  },
  { immediate: true },
);
</script>

<style scoped></style>
