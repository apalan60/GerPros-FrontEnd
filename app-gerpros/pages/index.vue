<template>
  <div>
    <div
      class="title-wrapper w-screen bg-black flex items-center justify-center"
    >
      <swiper-container
        class="slide-container"
        effect="fade"
        autoplay-delay="7000"
      >
        <swiper-slide class="slide slide1"> </swiper-slide>
        <swiper-slide class="slide slide2"> </swiper-slide>
        <swiper-slide class="slide slide3"> </swiper-slide>
      </swiper-container>
      <div class="title-text">
        <h2>GerPros</h2>
        <h3>打造專屬居家美學</h3>
      </div>
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
    <div class="todo contact w-screen min-h-5 bg-black pt-12">
      <SoleAgent />
    </div>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import Testimonials from '~/components/MainPageTestimonial.vue';
import Services from '~/components/MainPageService.vue';
import Products from '~/components/MainPageProduct.vue';
import SoleAgent from '~/components/SoleAgent.vue';

register();
</script>

<style scoped>
.title-wrapper {
  height: 90vh;
}
.slide-container {
  height: 80%;
  width: 100vw;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide {
  background-position: top center;
  background-size: cover;
  animation: zoom 7s infinite alternate;
  border-radius: 20px;
}
.slide1 {
  background: url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
.slide2 {
  background: url('https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
.slide3 {
  background: url('https://images.unsplash.com/photo-1512972972907-6d71529c5e92?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

.title-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  z-index: 999;
  color: #dedede;
  mix-blend-mode: exclusion;
  text-align: center;
}
.title-text h2 {
  font-size: 3rem;
}
.title-text h3 {
  font-size: 2rem;
}

@keyframes zoom {
  0% {
    background-size: 115%;
  }
  100% {
    background-size: 105%;
  }
}
</style>
