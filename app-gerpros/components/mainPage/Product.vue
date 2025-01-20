<template>
  <section>
    <div class="container mx-auto text-center mt-44 mb-44">
      <h2 class="text-xl font-bold mb-4">注目產品</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div class="ceiling">
          <div class="prod-type">
            <div class="icon">
              <img
                src="/image/SoleAgent/人字型icon.png"
                alt="floor-icon"
                class="floor-icon"
              >
            </div>
            <h3 class="ceiling-title text-lg">ARTEO</h3>
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
              class="slide slide-top slide-ceiling"
              @click="goTo({ id: product.id })"
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
              src="/image/SoleAgent/木地板ICON.png"
              alt="wall-icon"
              class="icon"
            >
            <h3 class="wall-title text-lg">ARTFlOOR</h3>
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
              class="slide slide-top slide-wall"
              @click="goTo({ id: product.id })"
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
              src="/image/壁布ICON.webp"
              alt="ceiling-icon"
              class="icon"
            >
            <h3 class="floor-title text-lg">壁布</h3>
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
              class="slide slide-top slide-floor"
              @click="goTo({ id: product.id })"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
        <div class="cook">
          <div class="prod-type prod-mobile">
            <img src="/image/icon-cook.webp" alt="ceiling-icon" class="icon" >
            <h3 class="floor-title text-lg">廚具</h3>
          </div>
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
              class="slide slide-down slide-cook"
              @click="goTo({ id: product.id })"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="prod-type prod-pc">
            <img src="/image/icon-cook.webp" alt="ceiling-icon" class="icon" >
            <h3 class="floor-title text-lg">廚具</h3>
          </div>
        </div>
        <div class="system">
          <div class="prod-type prod-mobile">
            <img
              src="/image/icon-system.webp"
              alt="ceiling-icon"
              class="icon"
            >
            <h3 class="floor-title text-lg">系統板材</h3>
          </div>
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
              class="slide slide-down slide-system"
              @click="goTo({ id: product.id })"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="prod-type prod-pc">
            <img
              src="/image/icon-system.webp"
              alt="ceiling-icon"
              class="icon"
            >
            <h3 class="floor-title text-lg">系統板材</h3>
          </div>
        </div>
        <div class="wood-floor">
          <div class="prod-type prod-mobile">
              <img
                src="/image/壁畫icon.webp"
                alt="ceiling-icon"
                class="icon"
              >
              <h3 class="floor-title text-lg">壁畫</h3>
            </div>
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
              class="slide slide-down slide-wood"
              @click="goTo({ id: product.id })"
            >
              <img :src="product.image" alt="product" >
              <div class="title">
                {{ product.name }}
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="prod-type prod-pc">
            <img src="/image/壁畫icon.webp" alt="ceiling-icon" class="icon" >
            <h3 class="floor-title text-lg">壁畫</h3>
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

async function goTo({id} = {}) {
  await navigateTo({
    path: `/products/${id}`,
  });
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
}

.slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  position: absolute;
  left: 0;
  right: 0;
  background-color: rgba(66, 66, 66, 0.5);
  color: white;
  padding: 0.5rem;
  bottom: 0;
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

.prod-mobile {
  display: flex;
}

.prod-pc {
  display: none;
}

@media (min-width: 640px) {
  .slide-top {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  .slide-top img {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  .slide-down {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .slide-down img {
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

  .slide-down .title {
    top: 0;
    bottom: auto;
  }

  .prod-mobile {
    display: none;
  }

  .prod-pc {
    display: flex;
  }
}
</style>
