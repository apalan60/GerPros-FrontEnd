<script setup>
const productions = reactive([
  {
    name: 'product1',
    category: 'type1',
    image: 'https://picsum.photos/600/800?random=1',
  },
  {
    name: 'product2',
    category: 'type1',
    image: 'https://picsum.photos/600/800?random=2',
  },
  {
    name: 'product3',
    category: 'type1',
    image: 'https://picsum.photos/600/800?random=3',
  },
  {
    name: 'product4',
    category: 'type1',
    image: 'https://picsum.photos/600/800?random=4',
  },
  {
    name: 'product5',
    category: 'type1',
    image: 'https://picsum.photos/600/800?random=5',
  },
  {
    name: 'product6',
    category: 'type1',
    image: 'https://picsum.photos/600/800?random=6',
  },
  {
    name: 'product7',
    category: 'type2',
    image: 'https://picsum.photos/600/800?random=7',
  },
  {
    name: 'product8',
    category: 'type2',
    image: 'https://picsum.photos/600/800?random=8',
  },
  {
    name: 'product9',
    category: 'type2',
    image: 'https://picsum.photos/600/800?random=9',
  },
  {
    name: 'product10',
    category: 'type2',
    image: 'https://picsum.photos/600/800?random=10',
  },
  {
    name: 'product11',
    category: 'type3',
    image: 'https://picsum.photos/600/800?random=11',
  },
  {
    name: 'product12',
    category: 'type3',
    image: 'https://picsum.photos/600/800?random=12',
  },
]);
const filter = ref('All');

const filterProducts = computed(() => {
  if (filter.value === 'All') {
    return productions;
  }
  // eslint-disable-next-line @stylistic/arrow-parens
  return productions.filter((p) => p.category === filter.value);
});

const changeFilter = (value) => {
  filter.value = value;
};
</script>

<template>
  <section class="py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-2">最新商品</h2>
      <p class="text-gray-400 mb-8">
        
      </p>
      <div class="flex justify-center space-x-4 mb-8">
        <button
          class="text-gray-400 font-semibold"
          :class="{ 'text-accent ': filter === 'All' }"
          @click="changeFilter('All')"
        >
          All
        </button>
        <button
          class="text-gray-400 font-semibold"
          :class="{ 'text-accent ': filter === 'type1' }"
          @click="changeFilter('type1')"
        >
          北歐簡約
        </button>
        <button
          class="text-gray-400 font-semibold"
          :class="{ 'text-accent ': filter === 'type2' }"
          @click="changeFilter('type2')"
        >
          古典奢華
        </button>
      </div>
    </div>

    <div class="container">
      <div class="flex w-screen h-4/5 flex-wrap">
        <img
          v-for="p in filterProducts"
          :key="p.name"
          class="w-1/5 h-2/5 object-cover rounded-lg"
          :src="p.image"
          :alt="p.name"
        />
      </div>
    </div>

    <div class="text-center mt-8">
      <button
        class="bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        See More
      </button>
    </div>
  </section>
</template>
