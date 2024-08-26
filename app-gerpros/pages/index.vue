<template>
  <div>
    <div class="todo service w-screen min-h-5 bg-slate-200">
      <Carousel />
    </div>
    <div class="todo service w-screen min-h-5 bg-slate-200">
      <Testimonials />
    </div>
    <div class="todo comment w-screen min-h-5 bg-slate-200">
      客戶正面回饋的評論
    </div>
    <div class="todo production w-screen min-h-5 bg-slate-400">主打的商品</div>
    <div class="todo contact w-screen min-h-5 bg-slate-400">
      強調是總代理，聯繫方式，經銷地方
    </div>
  </div>
</template>

<script setup>
import Testimonials from '~/components/MainPageTestimonial.vue';
</script>

<style scoped></style>
