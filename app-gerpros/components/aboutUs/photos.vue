<template>
  <section class="company-culture">
    <div class="text-center">
      <h2 class="text-xl font-bold tracking-widest mb-8">
        內部環境
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-6"
      >
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="photo-item text-center"
        >
          <div class="photo-wrapper">
            <img
              :src="`/image/about-us-photo-${index}.webp`"
              :alt="photo.title"
              class="photo"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const photos = reactive([
  {
    title: '內部環境 1',
  },
  {
    title: '內部環境 2',
  },
  {
    title: '內部環環境 3',
  },
  {
    title: '內部環境 4',
  },
  {
    title: '內部環境 5',
  },
  {
    title: '內部環境 6',
  },
]);
</script>

<style scoped>
.company-culture {
  padding: 2rem 1rem;
}
.photo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo-wrapper {
  width: 336px;
  height: 224px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.photo {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center 75%;
}
</style>
