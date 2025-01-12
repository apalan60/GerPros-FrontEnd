<template>
  <div>
    <AppHeader />
    <div class="min-h-screen noto-sans-tc-font">
      <slot />
    </div>
    <AppFooter />
    <SecondAppFooter />
    <img class="to-top cursor-pointer" width="64" height="64" src="/image/icons8-top-100.webp" alt="" @click="toTheTop">
  </div>
</template>


<script setup>
function toTheTop() {
  console.log('toTheTop');
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');

.noto-sans-tc-font {
  font-family: 'Noto Sans TC', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.to-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
}
</style>
