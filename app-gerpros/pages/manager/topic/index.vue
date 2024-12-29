<template>
  <div>
    <button class="btn btn-primary">
      <NuxtLink to="/manager/topic/addTopic">Create Topic</NuxtLink>
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
