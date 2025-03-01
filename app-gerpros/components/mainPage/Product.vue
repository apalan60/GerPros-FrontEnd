<template>
  <section>
    <div class="container mx-auto text-center mt-44">
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
                v-for="product in prodARTEO"
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
                v-for="product in prodARTFLOOR"
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
              v-for="product in prodWallpaper"
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
              v-for="product in prodKitchen"
              :key="product.name"
              class="slide slide-down slide-cook"
              @click="goTo({ id: product.id })"
          >
            <img :src="product.image" alt="product">
            <div class="title">
              {{ product.name }}
            </div>
          </swiper-slide>
        </swiper-container>
        <div class="prod-type prod-pc">
          <img src="/image/icon-cook.webp" alt="ceiling-icon" class="icon">
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
              v-for="product in prodPainting"
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
import {register} from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import {onBeforeMount, ref} from 'vue';

register();

/**
 * Get value from GetProductItems
 */
const prodARTEO = ref([]);
const prodARTFLOOR = ref([]);
const prodWallpaper = ref([]);
const prodKitchen = ref([]);
const prodSystem = ref([]);
const prodPainting = ref([]);

async function GetProductItems({Brand, Series, PageSize = 3} = {}) {
  const params = {
    PageNumber: 1,
    PageSize
  };

  if (Brand) {
    params.Brand = Brand;
  }

  if (Series) {
    params.Series = Series;
  }

  params.PageNumber = 1;
  try {
    console.log('GetProductItems', params);
    return await useApiFetch('/ProductItems', {
      params,
    });
  } catch (error) {
    console.error('無法獲取產品資料', error);
    return {items: []}
  }
}

async function fetchProducts() {
  prodARTEO.value    = (await GetProductItems({ Brand: 'ARTEO' })).items || [];
  prodARTFLOOR.value = (await GetProductItems({ Brand: 'Artfloor' })).items || [];
  prodWallpaper.value     = (await GetProductItems({ Series: '壁布' })).items || [];
  prodKitchen.value     = (await GetProductItems({ Series: '廚具' })).items || [];
  prodSystem.value = (await GetProductItems({ Series: '廚具' })).items || []; // 系統板材暫時沒資料，先以廚具取代
  prodPainting.value     = (await GetProductItems({ Series: '壁畫' })).items || [];
  
  console.log('prodARTEO', prodARTEO);
  console.log('prodARTFLOOR', prodARTFLOOR.value);
  console.log('prodWallpaper', prodWallpaper.value);
  console.log('prodKitchen', prodKitchen.value);
  console.log('prodSystem', prodSystem.value);
  console.log('prodPainting', prodPainting.value);
}

async function goTo({id} = {}) {
  await navigateTo({
    path: `/products/${id}`,
  });
}


onBeforeMount(async () => {
  await fetchProducts();
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
