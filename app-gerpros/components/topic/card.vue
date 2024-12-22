<template>
  <div class="card lg:card-side lg:w-[100%] bg-base-300 shadow-xl mt-4">
    <figure>
      <img
        class="lg:w-[200px] lg:h-[200px] h-[300px] w-[100%] object-cover object-center"
        :src="props.topic.coverImage"
        :alt="props.topic.title"
      >
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ props.topic.title }}
      </h2>
      <p>{{ props.topic.abstract }}</p>
      <div class="card-actions justify-between items-center">
        <div class="tags flex flex-wrap gap-2">
          <div
            v-for="tag in props.topic.tags"
            :key="tag"
            class="badge badge-outline"
          >
            {{ tag }}
          </div>
        </div>
        <NuxtLink
          :to="{ name: 'topic-id', params: { id: props.topic?.id } }"
        >
          <button
            class="btn btn-primary"
          >
            閱讀更多
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topic: {
    type: Object,
    default: () => ({
      title: 'title',
      abstract: 'abstract',
      coverImage: {
        src: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp',
        alt: 'test',
      },
      tags: ['tag1', 'tag2'],
    }),
  },
});
</script>

<style scoped></style>
