<template>
  <div class="topic-wrapper w-full">
    <div class="cover-wrapper w-full h-96">
      <div class="header">
        <h2 class="zh">主題專欄</h2>
        <h3 class="eng">TOPIC</h3>
      </div>
    </div>
    <TopicList />
  </div>
</template>

<script setup>
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
  background-image: url('/image/topic-header-pc.webp');
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
