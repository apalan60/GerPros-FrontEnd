<template>
  <div>
    <button class="btn btn-primary mt-4">
      <NuxtLink to="/manager/topic/addTopic">新增文章</NuxtLink>
    </button>
    <TopicList />
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'manager',
});
</script>

<style scoped></style>
