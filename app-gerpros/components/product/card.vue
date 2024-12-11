<template>
  <div class="card w-100 h-100 shadow-xl">
    <NuxtLink
      :to="{ name: 'products-id', params: { id: production?.id ?? 0 } }"
    >
      <figure class="cursor-pointer">
        <img :src="production?.image" :alt="production?.title" />
      </figure>
    </NuxtLink>
    <div class="card-body">
      <h2 class="card-title cursor-pointer">
        {{ production?.name }}
      </h2>
      <div class="card-actions justify-end">
        <div
          v-if="production.brandName"
          class="badge badge-outline cursor-pointer"
          :class="{
            'bg-indigo-100 text-indigo-800':
              searchedBrand === production?.brand,
          }"
          @click="searchBrand"
        >
          {{ production.brandName }}
        </div>
        <div
          v-if="production.seriesName"
          class="badge badge-outline cursor-pointer"
          :class="{
            'bg-indigo-100 text-indigo-800':
              searchedSeries === production?.series,
          }"
          @click="searchSeries"
        >
          {{ production.seriesName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { production = {} } = defineProps({ production: Object });
const emit = defineEmits(['search-brand', 'search-series']);
const searchedBrand = useState('searchedBrand');
const searchedSeries = useState('searchedSeries');
function searchBrand() {
  emit('search-brand', production.brandName);
}
function searchSeries() {
  emit('search-series', {
    brand: production.brandName,
    series: production.seriesName,
  });
}
</script>
