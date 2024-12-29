<template>
  <div v-if="topic.id">
    <TopicEditTopic :topic="topic" />
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
      data.coverImage = '/image/contact_us_cover.webp';
      data.content = replaceImgSrcToMock(data.content);
      topic.value = data;
    }
  }
  catch (error) {
    topic.value = TEST_TOPIC_DETAILS;
    console.error('無法獲取文章資料', error);
  }
}

function replaceImgSrcToMock(htmlContent) {
  return htmlContent.replace(/src="(.+?)"/g, 'src="/image/about-us-photo-2.webp"');
}

</script>

<style scoped>

</style>
