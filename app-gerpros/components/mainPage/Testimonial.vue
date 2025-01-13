<template>
  <section>
    <div class="max-w-6xl mx-auto pt-10 text-center relative">
      <h2 class="text-xl font-bold relative z-50">客戶回饋</h2>
      <div class="background absolute"/>
      <div class="mt-10 h-[200px]" >
        <swiper-container
          class="slide-container w-full h-full"
          pagination="true"
          :slides-per-view=slidesPerView
          space-between="30" 
          loop="true"
          autoplay-delay="3000"
        >
          <swiper-slide v-for="test in testimonials" :key="test.name" class="slide flex items-center" >
            <div class="bg-gray-200 flex items-center justify-center shadow-lg">
              <img :src="test.image" alt="avatar" class="w-20 h-20 rounded-full m-4">
              <div class="w-[300px] text-left my-4 me-4">
                <p class="text-sm mb-1">{{ test.position }} {{ test.name }}</p>
                <p class="text-sm">{{ test.quote }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';

register();

const width = ref(0);
const updateWidth = () => {
  if (typeof window !== "undefined") {
  width.value = window.innerWidth;
  }
};
onMounted(() => {
  updateWidth();
  if (typeof window !== "undefined") {
    window.addEventListener('resize', updateWidth);
  }
});
onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener('resize', updateWidth);
  }
});

const slidesPerView = computed(() => {
  if (width.value < 640) {
    return 1;
  } else if (width.value < 1024) {
    return 2;
  } else {
    return 3;
  }
});


const testimonials = ref([
  {
    name: '李先生',
    position: '高雄市',
    image:
      'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png',
    quote: '邱業務 講解詳細 談話風趣 能幫客戶找到屬於心儀 的地板樣式，會再回購',
  },
  {
    name: '陳小姐',
    position: '台南市',
    image:
    'https://th.bing.com/th/id/OIP.8F97-4tTe0kDw2M0XktW8gHaHZ?rs=1&pid=ImgDetMain',
    quote: '價格公正實惠，師傅做工細心，非常推薦的店家',
  },
  {
    name: '李先生',
    position: '台南市',
    image: 'https://www.w3schools.com/howto/img_avatar.png',
    quote: '設計師指定選用Art Floor超耐磨木地板，感謝公司 讓我們到現場看大板，也有部分色號有鋪面展示， 木地板很漂亮！',
  },
  {
    name: '劉小姐',
    position: '台南市',
    image:
      'https://th.bing.com/th/id/OIP.8F97-4tTe0kDw2M0XktW8gHaHZ?rs=1&pid=ImgDetMain',
    quote: '做地板找小胖 服務態度好到沒話說',
  },
]);
</script>

<style scoped>
.background {
  background: url('/image/topic-header-pc.webp') no-repeat center center/cover;
  opacity: 0.5;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 100%;
  border-radius: 50px 50px 0 0;
}

</style>
