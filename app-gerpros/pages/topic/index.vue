<template>
  <div class="topic-wrapper">
    <div class="cover-wrapper w-full h-96 bg-red-300">
      <div class="header">
        <h2 class="zh">
          主題專欄
        </h2>
        <h3 class="eng">
          TOPIC
        </h3>
      </div>
    </div>

    <div class="flex gap-4 container mb-8">
      <div class="grow">
        <TopicCard
          v-for="topic in topicList"
          :key="topic.id"
          :topic="topic"
        />
      </div>
      <div class="flex-none w-[20%] h-100 p-4 border-l-2 border-gray-200">
        <h2 class=" text-lg font-bold pb-2 mb-4 border-b-2 border-base-200">
          主題標籤
        </h2>
        <div class="tags flex flex-wrap gap-2">
          <div
            v-for="tag in tagList"
            :key="tag"
            class="badge badge-outline"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TEST_TOPIC_LIST } from '~/constants';

const topicList = ref({});
const tagList = ref([]);

onMounted(() => {
  topicList.value = TEST_TOPIC_LIST;
  tagList.value = Array.from(new Set(TEST_TOPIC_LIST.map(topic => topic.tags).flat()));
});
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
  background-image: url('/image/contact_us_cover.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.header {
  width: 90dvw;
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
}
.header .eng {
  font-size: 1.5rem;
}
</style>
