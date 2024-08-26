<template>
  <div>
    <div class="todo service w-screen h-96 bg-slate-200">
      <swiper-container class="h-full" effect="fade" autoplay-delay="10000">
        <swiper-slide class="h-full slide slide1">Slide 1</swiper-slide>
        <swiper-slide class="h-full slide slide2">Slide 2</swiper-slide>
        <swiper-slide class="h-full slide slide3">Slide 3</swiper-slide>
      </swiper-container>
    </div>
    <div class="todo service w-screen min-h-5 bg-slate-200">
      <Services />
    </div>
    <div class="todo comment w-screen min-h-5 bg-slate-200">
      <Testimonials />
    </div>
    <div class="todo production w-screen min-h-5 bg-slate-400">
      <Products />
    </div>
    <div class="todo contact w-screen min-h-5 bg-slate-400">
      強調是總代理，聯繫方式，經銷地方
    </div>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import Testimonials from '~/components/MainPageTestimonial.vue';
import Services from '~/components/MainPageService.vue';
import Products from '~/components/MainPageProduct.vue';

register();
</script>

<style scoped>
.slide {
  height: 100%;
  display: flex;
}
.slide1 {
  background: url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position-y: center;
}
.slide2 {
  background: url('https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
}
.slide3 {
  background: url('https://images.unsplash.com/photo-1512972972907-6d71529c5e92?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
}
</style>
