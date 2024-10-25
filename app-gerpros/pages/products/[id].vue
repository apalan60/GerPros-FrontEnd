<template>
  <NuxtLayout name="production">
    <template #content>
      <div class="breadcrumbs text-sm w-full ml-10 flex justify-start">
        <ul>
          <li>
            <a><NuxtLink :to="'/products'">Productions</NuxtLink> </a>
          </li>
          <li>
            <a>{{ product.brand }}</a>
          </li>
          <li>
            <a>{{ product.series }}</a>
          </li>
          <li>
            <a>{{ product.name }}</a>
          </li>
        </ul>
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mx-16 my-10">
          <div>
            <figure>
              <img :src="product.image" :alt="product.title" />
            </figure>
          </div>
          <div>
            <h1 class="text-2xl mb-5">{{ product.name }}</h1>
            <h2 class="text-xl">Brand: {{ product.brand }}</h2>
            <h2 class="text-xl">Series: {{ product.series }}</h2>
            <h2 class="text-xl">Price: {{ product.price }}</h2>
            <h2 class="text-xl">
              Description: {{ id }} {{ product.description }}
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
const product = ref(TEST_PRODUCT_DETAIL);
const id = ref(route.params.id);
</script>

<style scoped></style>
