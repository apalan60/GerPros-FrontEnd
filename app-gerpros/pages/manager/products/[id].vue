<template>
  <NuxtLayout name="product">
    <template #content>
      <div
        class="breadcrumbs w-full pl-10 mb-8 flex justify-start border-b border-solid border-base-200"
      >
        <ul>
          <li>
            <a>
              <NuxtLink :to="'/manager/products'">All Products</NuxtLink>
            </a>
          </li>
          <li>
            <a @click="goTo({ brand: product?.brandName })">{{ product?.brandName }}</a>
          </li>
          <li>
            <a @click="goTo({ brand: product?.brandName, series: product?.seriesName })">
              {{ product?.seriesName }}
            </a>
          </li>
          <li>
            {{ product?.name }}
          </li>
        </ul>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto px-4 md:px-0">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- 照片編輯區 -->
            <div class="rounded-lg shadow overflow-hidden">
              <figure class="h-64 md:h-96">
                <input
                  type="file"
                  class="file-input file-input-bordered w-full"
                  @change="handleFileChange"
                >
                <img
                  :src="previewImage || product?.image"
                  :alt="product?.name"
                  class="w-full h-full object-cover"
                >
              </figure>
            </div>
            <div class="rounded-lg shadow p-6 md:p-10">
              <div class="mb-4">
                <input
                  v-model="editableName"
                  class="input input-bordered w-full text-xl md:text-xl font-bold"
                  placeholder="輸入產品名稱"
                >
              </div>

              <div class="space-y-4 border-t border-gray-200 pt-4">
                <div>
                  <h2 class="text-lg font-medium">
                    品牌
                  </h2>
                  <p class="text-gray-600">
                    {{ product?.brandName }}
                  </p>
                </div>
                <div>
                  <h2 class="text-lg font-medium">
                    系列
                  </h2>
                  <p class="text-gray-600">
                    {{ product?.seriesName }}
                  </p>
                </div>
                <div>
                  <h2 class="text-lg font-medium">
                    價格
                  </h2>
                  <input
                    v-model.number="editablePrice"
                    type="number"
                    class="input input-bordered w-full"
                    placeholder="輸入價格"
                  >
                </div>
                <div>
                  <h2 class="text-lg font-medium">
                    描述
                  </h2>
                  <textarea
                    v-model="editableDetail"
                    class="textarea textarea-bordered w-full"
                    placeholder="輸入描述"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex space-x-4 pt-4">
        <UpdateProductButton
          :product-item-id="product?.id"
          :series-id="product?.seriesId"
          :name="editableName"
          :price="editablePrice"
          :image="selectedFile"
          :detail="editableDetail"
        />
        <DeleteProductButton
          :product-item-id="product?.id"
        />
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UpdateProductButton from '~/components/product/UpdateProductButton.vue';
import DeleteProductButton from '~/components/product/DeleteProductButton.vue';
import { TEST_PRODUCT_DETAIL } from '@/constants';

const route = useRoute();
const product = ref();
const id = ref(route.params.id);
const editableName = ref('');
const editablePrice = ref(0);
const editableDetail = ref('');
const selectedFile = ref(null);
const previewImage = ref('');

onMounted(async () => {
  await fetchData();
  console.log('seriesId', product.value.seriesId);
});

async function fetchData() {
  try {
    const data = await useApiFetch(`/ProductItems/${id.value}`);
    console.log('product detail in manager page', data);
    if (data) {
      product.value = data;
      editableName.value = data.name;
      editablePrice.value = data.price;
      editableDetail.value = data.detail;
    }
  }
  catch (error) {
    product.value = TEST_PRODUCT_DETAIL;
    editablePrice.value = TEST_PRODUCT_DETAIL.price;
    editableDetail.value = TEST_PRODUCT_DETAIL.detail;
    console.error('無法獲取產品資料', error);
  }
}

function handleFileChange(e) {
  const file = e.target.files[0];
  if (file) {
    selectedFile.value = file;
    const reader = new FileReader();
    reader.onload = (event) => {
      previewImage.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}

async function goTo({ pageNumber = 1, brand, series } = {}) {
  await navigateTo({
    path: '/manager/products',
    query: {
      PageNumber: pageNumber,
      Brand: brand,
      Series: series,
    },
  });
}
</script>

<style scoped></style>
