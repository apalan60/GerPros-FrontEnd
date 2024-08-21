<template>
  <div>
    <div>product {{ $route.params.id }}</div>
  </div>
</template>

<script setup>
// access route detail
const route = useRoute();
console.log('current id:' + route.params.id);
</script>

<style scoped></style>
