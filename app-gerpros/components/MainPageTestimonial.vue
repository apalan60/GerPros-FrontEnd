<template>
  <section class=" text-black py-20">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold">客戶回饋</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-gray-900 text-white p-6 rounded-lg"
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

<!-- todo reference https://go.demo.nextjstemplates.com/ -->

<script>
export default {
  data() {
    return {
      testimonials: [
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
      ],
    };
  },
};
</script>
