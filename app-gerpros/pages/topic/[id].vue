<template>
  <div class="topic-wrapper">
    <div class="cover-wrapper w-full h-96">
      <div class="header">
        <h2 class="zh mb-4 font-bold ">
          {{ topic.title }}
        </h2>
        <div class="tags flex flex-wrap gap-2">
          <div
            v-for="tag in topic.tags"
            :key="tag"
            class="badge badge-outline cursor-pointer"
            @click="goToTag(tag)"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </div>

    <div class="topic-content-wrapper m-8">
      <div
        class="content container p-10"
        v-html="topic.content"
      />
    </div>
  </div>
</template>

<script setup>
import { TEST_TOPIC_DETAILS } from '~/constants';

const route = useRoute();
const id = ref(route.params.id);
const topic = ref({});

onMounted(async () => {
  await fetchData();
});

async function fetchData() {
  try {
    const data = await useApiFetch(`/Posts/${id.value}`);
    if (data) {
      topic.value = data;
    }
  }
  catch (error) {
    topic.value = TEST_TOPIC_DETAILS;
    console.error('無法獲取文章資料', error);
  }
}

async function goToTag(tag) {
  await navigateTo({
    path: '/topic',
    query: {
      Tags: tag,
    },
  });
}
</script>

<style scoped>
.topic-wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cover-wrapper {
  display: flex;
  justify-content: right;
  align-items: flex-end;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: url('/image/topic-header-pc.webp');
}

.header {
  width: 90dvw;
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.2);
  margin-bottom: 3rem;
}
</style>

<style>
.topic-content-wrapper .content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.topic-content-wrapper .content h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
.topic-content-wrapper .content h2 {
  font-size: 1.25rem;
  font-weight: bold;
}
.topic-content-wrapper .content img {
  max-width: 100%;
  height: auto;
}

.topic-content-wrapper .content a {
  color: royalblue;
  text-decoration: underline;
}
</style>
