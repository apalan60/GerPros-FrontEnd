<template>
  <section>
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">注目產品</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div class="ceiling">
          <div class="prod-type">
            <div class="icon">
              <img
                src="https://img.icons8.com/?size=100&id=gmNNZ8Tvt2bT&format=png&color=666666"
                alt="floor-icon"
                class="floor-icon"
              />
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
              <img :src="product.image" alt="product" />
              <div class="title">{{ product.name }}</div>
            </swiper-slide>
          </swiper-container>
        </div>

        <div class="wall">
          <div class="prod-type">
            <img
              src="https://img.icons8.com/?size=100&id=aJW9bYLdUlk9&format=png&color=666666"
              alt="wall-icon"
              class="icon"
            />
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
              <img :src="product.image" alt="product" />
              <div class="title">{{ product.name }}</div>
            </swiper-slide>
          </swiper-container>
        </div>

        <div class="floor">
          <div class="prod-type">
            <img
              src="https://img.icons8.com/?size=100&id=h7tOIyNxrvf2&format=png&color=666666"
              alt="ceiling-icon"
              class="icon"
            />
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
              <img :src="product.image" alt="product" />
              <div class="title">{{ product.name }}</div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
    <div class="text-center mt-8">
      <NuxtLink :to="'/products'">
        <button
          class="bg-neutral text-neutral-content font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          See More
        </button>
      </NuxtLink>
    </div>
  </section>
</template>

<!-- eslint-disable @stylistic/arrow-parens -->
<script setup>
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';

register();

const productions = reactive([
  {
    name: '壁布1',
    category: 'prodWall',
    image: 'https://picsum.photos/600/800?random=1',
  },
  {
    name: '壁布2',
    category: 'prodWall',
    image: 'https://picsum.photos/600/800?random=2',
  },
  {
    name: '壁布3',
    category: 'prodWall',
    image: 'https://picsum.photos/600/800?random=3',
  },
  {
    name: '壁布4',
    category: 'prodWall',
    image: 'https://picsum.photos/600/800?random=4',
  },
  {
    name: '壁布5',
    category: 'prodWall',
    image: 'https://picsum.photos/600/800?random=5',
  },
  {
    name: '壁布6',
    category: 'prodWall',
    image: 'https://picsum.photos/600/800?random=6',
  },
  {
    name: '磁磚7',
    category: 'prodTile',
    image: 'https://picsum.photos/600/800?random=7',
  },
  {
    name: '磁磚8',
    category: 'prodTile',
    image: 'https://picsum.photos/600/800?random=8',
  },
  {
    name: '磁磚9',
    category: 'prodTile',
    image: 'https://picsum.photos/600/800?random=9',
  },
  {
    name: '磁磚10',
    category: 'prodTile',
    image: 'https://picsum.photos/600/800?random=10',
  },
  {
    name: '地板11',
    category: 'prodFloor',
    image: 'https://picsum.photos/600/800?random=11',
  },
  {
    name: '地板12',
    category: 'prodFloor',
    image: 'https://picsum.photos/600/800?random=12',
  },
  {
    name: '地板13',
    category: 'prodFloor',
    image: 'https://picsum.photos/600/800?random=13',
  },
]);

const prodWall = productions.filter((prod) => prod.category === 'prodWall');
const prodTile = productions.filter((prod) => prod.category === 'prodTile');
const prodFloor = productions.filter((prod) => prod.category === 'prodFloor');
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 300px;
  display: block;
  margin-top: 1rem;
}

swiper-slide {
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

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
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
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(66, 66, 66, 0.5);
  color: white;
  padding: 0.5rem;
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
