<template>
  <div class="card lg:card-side bg-base-300 shadow-xl mt-4 rounded-lg">
    <div class="relative card-body lg:w-[75%] lg:h-[275px] w-full h-[300px] p-0">
      <figure class="object-cover h-full w-full">
        <img
          class="object-cover h-full w-full"
          :src="props.topic.coverImage"
          :alt="props.topic.title"
        >
      </figure>
      <div
        class="tags flex flex-wrap cursor-pointer absolute top-0 left-0 p-4 max-h-[50%] gap-1"
      >
        <div
          v-for="tag in props.topic.tags"
          :key="tag"
          class="tag badge badge-outline cursor-pointer text-[#3d3d3d] border-none"
          @click="clickTag(tag)"
        >
          {{ tag }}
        </div>
      </div>
    </div>
    <div class="card-body w-[100%] bg-[#d2c2af]">
      <h2 class="card-title">
        {{ props.topic.title }}
      </h2>
      <p class="text-wrap w-full max-w-sm break-words">
        {{ props.topic.description }}
      </p>
      <div class="card-actions justify-end items-center">
        <div class="flex items-center gap-10">
          <NuxtLink :to="{ name: 'topic-id', params: { id: props.topic?.id } }">
            <button
              class="btn btn-lg bg-white text-[#92887b] hover:text-white hover:bg-[#92887b]"
            >
              閱讀更多
            </button>
          </NuxtLink>
          <div v-if="isManager" class="flex gap-2">
            <NuxtLink
              :to="{
                name: 'manager-topic-id',
                params: { id: props.topic?.id },
              }"
            >
              <button class="btn btn-success">編輯</button>
            </NuxtLink>
            <button class="btn btn-error" @click="onClickDelete">刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['click-tag', 'click-delete']);
const props = defineProps({
  topic: {
    type: Object,
    default: () => ({
      title: 'title',
      description: 'description',
      coverImage: {
        src: 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp',
        alt: 'test',
      },
      tags: ['tag1', 'tag2'],
    }),
  },
  isManager: {
    type: Boolean,
    default: false,
  },
});

function clickTag(tag) {
  emit('click-tag', tag);
}

function onClickDelete() {
  emit('click-delete', props.topic.id);
}
</script>

<style scoped>
.tag {
  background-color: rgba(250, 250, 250, 0.5);
  backdrop-filter: blur(5px);
}
</style>
