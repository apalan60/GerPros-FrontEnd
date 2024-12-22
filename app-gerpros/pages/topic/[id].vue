<template>
  <div class="topic-wrapper">
    <div
      class="cover-wrapper w-full h-96 bg-red-300"
      :style="{ backgroundImage: `url(${topic.coverImage})` }"
    >
      <div class="header">
        <h2 class="zh mb-4 font-bold ">
          {{ topic.title }}
        </h2>
        <div class="tags flex flex-wrap gap-2">
          <div
            v-for="tag in topic.tags"
            :key="tag"
            class="badge badge-outline"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </div>

    <div class="topic-content-wrapper m-4">
      <div
        class="content"
        v-html="topic.content"
      />
    </div>
  </div>
</template>

<script setup>
import { TEST_TOPIC_DETAILS } from '~/constants';

const topic = ref({});

onMounted(() => {
  topic.value = TEST_TOPIC_DETAILS;
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.header {
  width: 90dvw;
  font-size: 2rem;
  color: #dedede;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
}
</style>

<style>
.topic-content-wrapper .content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.topic-content-wrapper .content h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
.topic-content-wrapper .content img {
  max-width: 100%;
  height: auto;
}

.topic-content-wrapper .content a {
  color: blue;
  text-decoration: underline;
}
</style>
