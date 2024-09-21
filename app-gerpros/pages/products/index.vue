<script setup>
const productionsData = ref([
  {
    id: 1,
    title: 'Shoes',
    description: 'If a dog chews shoes whose shoes does he choose?',
    image: 'https://picsum.photos/600/800?random=1',
    tags: ['Fashion', 'Products'],
    isNew: true,
  },
  {
    id: 2,
    title: 'Hat',
    description: 'A stylish hat for all occasions.',
    image: 'https://picsum.photos/600/800?random=2',
    tags: ['Fashion', 'Accessories'],
    isNew: false,
  },
  {
    id: 3,
    title: 'Watch',
    description: 'Keep track of time with this elegant watch.',
    image: 'https://picsum.photos/600/800?random=3',
    tags: ['Fashion', 'Accessories'],
    isNew: true,
  },
  {
    id: 4,
    title: 'Bag',
    description: 'A spacious bag for your daily needs.',
    image: 'https://picsum.photos/600/800?random=4',
    tags: ['Fashion', 'Products'],
    isNew: false,
  },
  {
    id: 5,
    title: 'Sunglasses',
    description: 'Protect your eyes with these stylish sunglasses.',
    image: 'https://picsum.photos/600/800?random=5',
    tags: ['Fashion', 'Accessories'],
    isNew: true,
  },
  {
    id: 6,
    title: 'Jacket',
    description: 'Stay warm with this fashionable jacket.',
    image: 'https://picsum.photos/600/800?random=6',
    tags: ['Fashion', 'Clothing'],
    isNew: false,
  },
  {
    id: 7,
    title: 'Belt',
    description: 'A durable belt for everyday use.',
    image: 'https://picsum.photos/600/800?random=7',
    tags: ['Fashion', 'Accessories'],
    isNew: true,
  },
  {
    id: 8,
    title: 'Scarf',
    description: 'A cozy scarf for chilly days.',
    image: 'https://picsum.photos/600/800?random=8',
    tags: ['Fashion', 'Clothing'],
    isNew: false,
  },
  {
    id: 9,
    title: 'Gloves',
    description: 'Keep your hands warm with these gloves.',
    image: 'https://picsum.photos/600/800?random=9',
    tags: ['Fashion', 'Accessories'],
    isNew: true,
  },
]);
</script>

<template>
  <div class="container mx-auto mb-10">
    <div class="productions-wrapper grid grid-cols-1 sm:grid-cols-3 gap-10">
      <div
        v-for="prod in productionsData"
        :key="prod.id"
        class="card w-100 h-100 shadow-xl"
      >
        <figure class="cursor-pointer">
          <img :src="prod.image" :alt="prod.title" />
        </figure>
        <div class="card-body">
          <h2 class="card-title cursor-pointer">
            {{ prod.title }}
            <div v-if="prod.isNew" class="badge badge-secondary">NEW</div>
          </h2>
          <p>{{ prod.description }}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline cursor-pointer">
              {{ prod.tags[0] }}
            </div>
            <div class="badge badge-outline cursor-pointer">
              {{ prod.tags[1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
