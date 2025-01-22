<template>
  <div>
    <div class="w-full relative">
      <div class="text-[#e3e1e1] text-[100px] font-black p-[20px]">
        <p>CASE STUDIES</p>
      </div>
      <div class="container flex flex-col md:flex-row md:mx-16">
        <div class="md:w-1/2 m-8 z-20">
          <h2 class="text-lg font-bold mb-5">Gerpros超耐磨木地板</h2>
          <p>
            我們的足跡遍及全台，無論是溫馨的家庭，還是高流量的商業場所，皆
            能為您打造耐用、舒適且美觀的地板環境。選擇我們，選擇安心！
          </p>
        </div>
        <div class="md:w-1/2 md:translate-y-[-100px] studies z-30">
          <swiper-container
            class="slide-container"
            loop="true"
            autoplay-delay="3000"
          >
            <swiper-slide
              v-for="item in caseShare"
              :key="item"
              class="flex justify-center items-center relative"
            >
              <div class="w-full">
                <figure class="max-h-[350px]" @click="showImage(item.image)">
                  <img
                    :src="item.image"
                    :alt="item"
                    class="max-h-[350px] object-cover h-full w-full"
                  >
                </figure>
                <p class="container text-black text-wrap p-4">
                  {{ item.description }}
                </p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
      <div class="block md:absolute md:bottom-10 right-0 w-full bg-[#d8d3c9]">
        <div class="container py-8 px-16">
          <h2 class="text-md text-white mb-2">案例分享</h2>
          <h2 class="text-xl text-white mb-8">Case Studies</h2>
          <button
            class="btn btn-outline btn-sm border-white text-white cursor-pointer"
          >
            <nuxt-link to="/products">了解更多</nuxt-link>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="container mx-[400px]">
        <swiper-container
          class="slide-container w-full h-full"
          :slides-per-view="slidesPerView"
          loop="true"
          autoplay-delay="3000"
          navigation="true"
        >
          <swiper-slide
            v-for="item in items"
            :key="item"
            class="flex justify-center items-center p-[10px]"
          >
            <figure
              class="h-[300px] w-[300px] p-[30px] shadow-lg bg-slate-50 cursor-pointer"
              @click="showImage(item)"
            >
              <img :src="item" :alt="item" class="object-cover h-full w-full" >
            </figure>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
  <AppShowImage
    :image="showedImage"
    :visible="shouldShowImage"
    @close="hideImage"
  />
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import { CASE_IMAGES, CASE_SHARE } from '@/constants/imageDesc';
import 'swiper/swiper-bundle.css';
import AppShowImage from '../AppShowImage.vue';

register();

const width = ref(0);
const updateWidth = () => {
  if (typeof window !== 'undefined') {
    width.value = window.innerWidth;
  }
};
onMounted(() => {
  updateWidth();
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWidth);
  }
});
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWidth);
  }
});

const slidesPerView = computed(() => {
  if (width.value < 640) {
    return 1;
  } else if (width.value < 1024) {
    return 2;
  } else {
    return 4;
  }
});

const items = computed(() => {
  return CASE_IMAGES.map((image) => `/image/case/${image}`);
});
const showedImage = ref('');
const shouldShowImage = ref(false);
const hideImage = () => {
  showedImage.value = '';
  shouldShowImage.value = false;
};
const showImage = (image) => {
  showedImage.value = image;
  shouldShowImage.value = true;
};

const caseShare = computed(() => {
  return CASE_SHARE.map((item) => {
    return {
      ...item,
      image: `/image/case-share/${item.image}`,
    };
  });
});
</script>

<style scoped>
.studies::after {
  @media (min-width: 768px) {
    content: '';
    position: absolute;
    top: 40px;
    left: -20px;
    width: calc(100% + 20px);
    height: calc(100% - 40px - 1rem);
    background: #d8d3c9;
  }
}
</style>
