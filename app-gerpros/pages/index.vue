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
  background: url('/image/topic-header-main.webp');
}
.slide2 {
  background: url('/image/service-header-main.webp');
}
.slide3 {
  background: url('/image/qa-header-main.webp');
}

@media (max-width: 900px) {
  .slide {
    background-size: cover;
    animation: none;
  }
}

@media (max-width: 798px) {
  .slide1 {
    background: url('/image/topic-header-mobile.webp');
  }
  .slide2 {
    background: url('/image/service-header-mobile.webp');
  }
  .slide3 {
    background: url('/image/qa-header-mobile.webp');
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
