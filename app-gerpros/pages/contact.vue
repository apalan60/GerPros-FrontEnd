<template>
  <div class="contact-wrapper">
    <div class="cover-wrapper w-full h-96">
      <div class="contact-us">
        <h2 class="zh">聯絡我們</h2>
        <h3 class="eng">CONTACT US</h3>
      </div>
    </div>
    <ContactUsIntroduction @click-reserve="onClickReserve" />
    <div id="contact-form">
      <ContactUsForm  />
    </div>
  </div>
</template>

<script setup>
defineEmits(['click-reserve']);

function onClickReserve() {
  const form = document.getElementById('contact-form');
  form.scrollIntoView({ behavior: 'smooth' });
}
</script>

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
  background-image: url('/image/contact_us_cover.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.contact-us {
  width: 90dvw;
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
}
.contact-us .eng {
  font-size: 1.5rem;
}
</style>
