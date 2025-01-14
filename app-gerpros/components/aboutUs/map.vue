<template>
  <div class="flex flex-col items-center w-full my-8">
    <h2 class="text-xl font-bold tracking-widest mb-4">銷售地點</h2>
    <div class="map max-w-[1200px]">
      <img
        class="image"
        src="/image/about-us-taiwan-1.webp"
        loading="lazy"
        alt="shop"
      >
      <img
        class="image-2"
        src="/image/about-us-taiwan-2.webp"
        loading="lazy"
        alt="shop"
      >
    </div>
  </div>
</template>

<script setup>
onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollMagic = (await import('scrollmagic')).default;

    const controller = new ScrollMagic.Controller();

    const revealElement = document.querySelector('.image-2');

    if (revealElement) {
      new ScrollMagic.Scene({
        triggerElement: revealElement,
        triggerHook: 0.7,
        reverse: true,
      })
        .on('enter', () => {
          setTimeout(() => {
            revealElement.classList.add('visible');
          }, 900);
        })
        .on('leave', () => {
          revealElement.classList.remove('visible');
        })
        .addTo(controller);
    }
  }
});
</script>

<style scoped>
.map {
  position: relative;
}
.image-2 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.visible {
  opacity: 1;
}
</style>
