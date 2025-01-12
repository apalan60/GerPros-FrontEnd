<template>
  <div class="contact-wrapper">
    <div class="cover-wrapper w-full h-96 mb-8">
      <div class="service">
        <h2 class="zh">服務項目</h2>
        <h3 class="eng">Service</h3>
      </div>
    </div>
    <AboutUsService />
  </div>
</template>

<script setup></script>

<style scoped>
.contact-wrapper {
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
  background-image: url('/image/service-header-pc.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.service {
  width: 90dvw;
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
}
.service .eng {
  font-size: 1.5rem;
}
</style>
