<template>
  <section>
    <div class="container mx-auto text-center">
      <h2 class="text-xl font-bold mb-4">注目產品</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div class="ceiling">
          <div class="prod-type">
            <div class="icon">
              <img
                src="https://img.icons8.com/?size=100&id=gmNNZ8Tvt2bT&format=png&color=666666"
                alt="floor-icon"
                class="floor-icon"
              >
            </div>
            <h3 class="ceiling-title text-lg">磁磚</h3>
          </div>
          <swiper-container
            class="swiper-container"
            direction="vertical"
            pagination="true"
            autoplay-delay="3000"
            loop="true"
          >
            <swiper-slide
              v-for="product in prodTile"
              :key="product.name"
              class="slide slide-ceiling"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
        </div>

        <div class="wall">
          <div class="prod-type">
            <img
              src="https://img.icons8.com/?size=100&id=aJW9bYLdUlk9&format=png&color=666666"
              alt="wall-icon"
              class="icon"
            >
            <h3 class="wall-title text-lg">壁布</h3>
          </div>
          <swiper-container
            class="swiper-container"
            direction="vertical"
            pagination="true"
            autoplay-delay="3000"
            loop="true"
          >
            <swiper-slide
              v-for="product in prodWall"
              :key="product.name"
              class="slide slide-wall"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
        <div class="floor">
          <div class="prod-type">
            <img
              src="https://img.icons8.com/?size=100&id=h7tOIyNxrvf2&format=png&color=666666"
              alt="ceiling-icon"
              class="icon"
            >
            <h3 class="floor-title text-lg">地板</h3>
          </div>
          <swiper-container
            class="swiper-container"
            direction="vertical"
            pagination="true"
            autoplay-delay="3000"
            loop="true"
          >
            <swiper-slide
              v-for="product in prodFloor"
              :key="product.name"
              class="slide slide-floor"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
        </div>    
        <div class="cook">
          <swiper-container
            class="swiper-container"
            direction="vertical"
            pagination="true"
            autoplay-delay="3000"
            loop="true"
          >
            <swiper-slide
              v-for="product in prodCook"
              :key="product.name"
              class="slide-down slide-cook"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="prod-type">
            <img
              src="https://img.icons8.com/?size=100&id=h7tOIyNxrvf2&format=png&color=666666"
              alt="ceiling-icon"
              class="icon"
            >
            <h3 class="floor-title text-lg">廚具</h3>
          </div>
        </div>
        <div class="system">
          <swiper-container
            class="swiper-container"
            direction="vertical"
            pagination="true"
            autoplay-delay="3000"
            loop="true"
          >
            <swiper-slide
              v-for="product in prodSystem"
              :key="product.name"
              class="slide-down slide-system"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="prod-type">
            <img
              src="https://img.icons8.com/?size=100&id=h7tOIyNxrvf2&format=png&color=666666"
              alt="ceiling-icon"
              class="icon"
            >
            <h3 class="floor-title text-lg">系統板材</h3>
          </div>
        </div>
        <div class="wood-floor">
          <swiper-container
            class="swiper-container"
            direction="vertical"
            pagination="true"
            autoplay-delay="3000"
            loop="true"
          >
            <swiper-slide
              v-for="product in prodWood"
              :key="product.name"
              class="slide-down slide-wood"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="prod-type">
            <img
              src="https://img.icons8.com/?size=100&id=h7tOIyNxrvf2&format=png&color=666666"
              alt="ceiling-icon"
              class="icon"
            >
            <h3 class="floor-title text-lg">木地板</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- eslint-disable @stylistic/arrow-parens -->
<script setup>
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';

register();

const productionsRawData = ref({});
const productionsItems = computed(() => {
  const productions = productionsRawData.value.items;
  return productions ?? [];
});
const prodTile = computed(() => {
  return productionsItems.value.slice(0, 2);
});
const prodWall = computed(() => {
  return productionsItems.value.slice(2, 4);
});
const prodFloor = computed(() => {
  return productionsItems.value.slice(4, 6);
});
const prodCook = computed(() => {
  // return productionsItems.value.slice(6, 8);
  return productionsItems.value.slice(1, 3);
});
const prodSystem = computed(() => {
  // return productionsItems.value.slice(8, 10);
  return productionsItems.value.slice(3, 5);
});
const prodWood = computed(() => {
  // return productionsItems.value.slice(10, 12);
  return productionsItems.value.slice(4, 6);
});

async function fetchData() {
  console.log("🚀 ~ fetchData ~ fetchData:", 'fetchData')
  const params = {
    PageSize: 12, // 固定參數
  };
  params.PageNumber = 1;
  try {
    const data = await useApiFetch('/ProductItems', {
      params,
    });
    if (data) {
      productionsRawData.value = data;
    }
  } catch (error) {
    productionsRawData.value = TEST_PRODUCTIONS_LIST;
    console.error('無法獲取產品資料', error);
  }
}

onBeforeMount(async () => {
  await fetchData();
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 300px;
  display: block;
}

.slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.slide-down {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.slide-down img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.slide-cook {
  border-bottom-left-radius: 100px;
}

.slide-cook img {
  border-bottom-left-radius: 100px;
}

.slide-wood {
  border-bottom-right-radius: 100px;
}

.slide-wood img {
  border-bottom-right-radius: 100px;  
}

.slide-ceiling {
  border-top-left-radius: 100px;
}

.slide-ceiling img {
  border-top-left-radius: 100px;
}

.slide-floor {
  border-top-right-radius: 100px;
}

.slide-floor img {
  border-top-right-radius: 100px;
}

.title {
  position: absolute;
  left: 0;
  right: 0;
  background-color: rgba(66, 66, 66, 0.5);
  color: white;
  padding: 0.5rem;
}

.slide .title{
  bottom: 0;
}

.slide-down .title {
  top: 0;
}

.icon {
  width: 50px;
  height: 50px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.floor-icon {
  width: 40px;
  height: 40px;
}

.prod-type {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
