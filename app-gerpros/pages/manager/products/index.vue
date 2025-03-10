<template>
  <NuxtLayout
      name="product"
      :isManager="true"
  >
    <template #content>
      <div
          class="breadcrumbs w-full pl-10 mb-8 flex justify-start border-b border-solid border-base-200"
      >
        <ul>
          <li><a @click="goTo()">所有產品</a></li>
          <li v-if="searchedBrand">
            <a @click="goToCurrentBrand()">{{ searchedBrand }}</a>
          </li>
          <li v-if="searchedSeries">
            {{ searchedSeries }}
          </li>
        </ul>
      </div>
      <div
          class="productions-wrapper grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 mx-16"
      >
        <ProductCard
            v-for="product in productionsItems"
            :key="product.name"
            :production="product"
            :isManager="true"
            @search-brand="searchBrand"
            @search-series="searchSeries"
        />
      </div>
      <Pagination
          class="mt-8 mb-8"
          :total-pages="productionsTotalPages"
          @go-to-page="goToPage"
      />
      <add-product @reloadData="fetchData"/>
    </template>

  </NuxtLayout>
</template>

<script setup>
import {TEST_PRODUCTIONS_LIST} from '~/constants';
import AddProduct from '~/pages/manager/products/add-product.vue';

definePageMeta({
  layout: 'manager',
});
const route = useRoute();
console.log('route', route.fullPath);

// production
const productionsRawData = ref({});
const productionsItems = computed(() => {
  const productions = productionsRawData.value.items;
  return productions?.map((production) => {
    return {
      ...production,
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
  goTo({brand});
}

function searchSeries({brand, series}) {
  goTo({brand, series});
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
  await goTo({brand: searchedBrand.value});
}

async function goTo({pageNumber = 1, brand, series} = {}) {
  await navigateTo({
    path: '/manager/products',
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
    {immediate: true},
);
</script>

<style scoped></style>
