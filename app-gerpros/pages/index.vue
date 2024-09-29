<script setup>
import { register } from 'swiper/element/bundle';

register();
</script>

<template>
  <div>
    <div class="title-wrapper w-screen flex items-center justify-center mb-16">
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
        <h2 class="text-8xl">GerPros</h2>
      </div>
    </div>
    <div class="mb-20">
      <MainPageService />
    </div>
    <div class="mb-20">
      <MainPageTestimonial />
    </div>
    <div class="mb-20">
      <MainPageProduct />
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.title-wrapper {
  height: 75vh;
}
.title-text {
  position: absolute;

  font-weight: bold;
  font-family: 'Cinzel', serif;
  z-index: 2;
  color: #dedede;
  mix-blend-mode: exclusion;
  text-align: center;
}
.slide-container {
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide {
  background-position: top center;
  background-size: cover;
  animation: zoom 7s infinite alternate;
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
@keyframes zoom {
  0% {
    background-size: 115%;
  }
  100% {
    background-size: 105%;
  }
}
</style>
