<script setup>
onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollMagic = (await import('scrollmagic')).default;

    const controller = new ScrollMagic.Controller();

    const revealElements = document.querySelectorAll('.digit');

    revealElements.forEach((element) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
        reverse: true,
      })
        .setClassToggle(element, 'visible')
        .addTo(controller);
    });
  }
});

const testimonials = ref([
  {
    name: '王先生',
    position: '台南市',
    image:
      'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png',
    quote: '非常好的一次消費體驗',
  },
  {
    name: '徐先生',
    position: '台北市',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    quote: '品質非常良好',
  },
  {
    name: '劉小姐',
    position: '台中市',
    image:
      'https://th.bing.com/th/id/OIP.8F97-4tTe0kDw2M0XktW8gHaHZ?rs=1&pid=ImgDetMain',
    quote: '家人都很喜歡',
  },
  {
    name: '陳小姐',
    position: '嘉義市',
    image:
      'https://th.bing.com/th/id/R.5522155776f935b968ee033b378c7dce?rik=oHI71v3KwMtjtA&riu=http%3a%2f%2fwww.w3schools.com%2fhowto%2fimg_avatar2.png&ehk=v5Am%2bIj3lmC1HosplNbkqiz5jntcbPnbQ%2bvttJpmDHA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    quote: '是個好選擇，推薦給有需要的人',
  },
]);
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold">客戶回饋</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-gray-900 text-white p-6 rounded-lg digit"
        >
          <p class="text-lg">"{{ testimonial.quote }}"</p>
          <div class="mt-6 flex items-center">
            <img
              :src="testimonial.image"
              alt="avatar"
              class="w-12 h-12 rounded-full"
            />
            <div class="ml-4">
              <h4 class="text-lg font-semibold">{{ testimonial.name }}</h4>
              <p class="text-sm">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.digit {
  opacity: 0;
  -webkit-transform: translateX(-40px);
  -moz-transform: translateX(-40px);
  -ms-transform: translateX(-40px);
  -o-transform: translateX(-40px);
  transform: translateX(-40px);
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  -ms-transition: all 0.6s ease-out;
  -o-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
}
.digit.visible {
  opacity: 1;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
}
</style>
