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
        <swiper-slide class="slide slide1" />
        <swiper-slide class="slide slide2" />
        <swiper-slide class="slide slide3" />
        <swiper-slide class="slide slide4" />
      </swiper-container>
      <div class="title-text">
        <img src="/image/logo.webp" alt="" width="500" class="full-content" >
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
    <div />
  </div>
</template>

<style scoped>
.title-wrapper {
  height: 75vh;
}
.title-text {
  position: absolute;
  z-index: 2;
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
  animation: zoom 7s infinite alternate;
}
.slide1 {
  background: url('/image/main-pc-1.webp');
}
.slide2 {
  background: url('/image/main-pc-2.webp');
}
.slide3 {
  background: url('/image/main-pc-3.webp');
}
.slide4 {
  background: url('/image/main-pc-4.webp');
}

@media (max-width: 1000px) {
  .slide {
    background-size: cover;
    animation: none;
  }
}

@media (max-width: 400px) {
  .slide1 {
    background: url('/image/main-mobile-1.webp');
  }
  .slide2 {
    background: url('/image/main-mobile-2.webp');
  }
  .slide3 {
    background: url('/image/main-mobile-3.webp');
  }
  .slide4 {
    background: url('/image/main-mobile-4.webp');
  }
}
@keyframes zoom {
  0% {
    background-size: 105%;
  }
  100% {
    background-size: 100%;
  }
}
</style>
