<template>
  <section class="text-black py-20">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold">客戶回饋</h2>
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
              <h4 class="text-xl font-semibold">{{ testimonial.name }}</h4>
              <p class="text-sm">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollMagic = (await import('scrollmagic')).default;

    const controller = new ScrollMagic.Controller();

    const revealElements = document.querySelectorAll('.digit');

    revealElements.forEach((element) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.7,
        reverse: true,
      })
        .setClassToggle(element, 'visible')
        .addTo(controller);
    });
  }
});

const testimonials = ref([
  {
    name: 'Rose Roberson',
    position: 'CEO at Company',
    image: '',
    quote:
      'Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur...',
  },
  {
    name: 'Chace Rodgers',
    position: 'CEO at Company',
    image: '',
    quote:
      'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation...',
  },
  {
    name: 'Chace Rodgers',
    position: 'CEO at Company',
    image: '',
    quote:
      'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation...',
  },
  {
    name: 'Chace Rodgers',
    position: 'CEO at Company',
    image: '',
    quote:
      'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation...',
  },
  {
    name: 'Chace Rodgers',
    position: 'CEO at Company',
    image: '',
    quote:
      'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation...',
  },
  {
    name: 'Chace Rodgers',
    position: 'CEO at Company',
    image: '',
    quote:
      'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation...',
  },
]);
</script>

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
