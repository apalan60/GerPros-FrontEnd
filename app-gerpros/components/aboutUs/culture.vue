<template>
  <div class="culture-middle-image w-full h-96" />
  <section class="company-culture">
    <div class="text-center">
      <h2 class="text-xl font-bold tracking-widest mb-8">
        公司文化
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto gap-6">
        <div
          v-for="(culture, index) in companyCultures"
          :key="index"
          class="culture-item text-center p-4"
        >
          <img
            :src="culture.image"
            loading="lazy"
            :alt="culture.title"
            class="mx-auto mb-4"
          >
          <h2 class="text-lg font-bold mb-3">
            {{ culture.title }}
          </h2>
          <p class="text-sm description">
            {{ culture.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const companyCultures = reactive([
  {
    title: '專業保證',
    image: '/image/icons8-handshake-100.webp', // Replace with the actual path to the image icon.
    description:
      '我們致力於為每位客戶提供專業的服務。我們始終提供統一標準的服務，無論客戶需求大小，我們都用心服務，確保每位客戶都能獲得最佳的體驗。',
  },
  {
    title: '品質卓越',
    image: '/image/icons8-award-100.webp', // Replace with the actual path to the image icon.
    description:
      '我們相信，優質的產品能帶來卓越的體驗。我們在每個細節上嚴格把關，確保達到高標準。我們的產品不僅享有保固服務，還通過多項國際認證，讓人用的安心又放心。',
  },
  {
    title: '高效執行',
    image: '/image/icons8-rise-100.webp', // Replace with the actual path to the image icon.
    description:
      '我們的專業團隊經驗豐富，能準確迅速地完成每個項目。我們注重每個細節，並以穩定和一致的標準完成所有工作。',
  },
  {
    title: '信任夥伴',
    image: '/image/icons8-thumbs-up-100.webp', // Replace with the actual path to the image icon.
    description:
      '我們堅持以客戶需求為導向，建立穩固的合作關係。我們致力於提供可靠的支持，成為客戶值得信任的重要夥伴。',
  },
]);

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollMagic = (await import('scrollmagic')).default;

    const controller = new ScrollMagic.Controller();

    const revealElements = document.querySelectorAll('.culture-item');

    revealElements.forEach((element, index) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
        reverse: true,
      })
        .on('enter', () => {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 200);
        })
        .on('leave', () => {
          element.classList.remove('visible');
        })
        .addTo(controller);
    });
  }
});
</script>

<style scoped>
.culture-middle-image {
  background-image: url('/image/about-us-middle.webp');
  background-size: cover;
  background-position: center;
}
.description {
  border-top: 2.5px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
}
.company-culture {
  padding: 2rem 1rem;
}
.culture-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s;
}
.culture-item.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
