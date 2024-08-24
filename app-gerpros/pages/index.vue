<template>
  <div>
    <div class="todo portfolio w-screen= min-h-5 ">
      <UContainer>
      <UCarousel 
      ref="carouselRef"
      v-slot="{ item }" 
      :items="items" 
      :ui="{ item: 'basis-full' }" 
      class=" rounded-lg overflow-hidden">
    <img :src="item" class="w-full h-full" draggable="false">
  </UCarousel>
</UContainer>
    </div>
    <div class="todo service w-screen min-h-5 bg-slate-200">
      服務的內容幫助過多少客戶
    </div>
    <div class="todo production w-screen min-h-5 bg-slate-400">主打的商品</div>
    <div class="todo comment w-screen min-h-5 bg-slate-200">
      客戶正面回饋的評論
    </div>
    <div class="todo contact w-screen min-h-5 bg-slate-400">
      強調是總代理，聯繫方式，經銷地方
    </div>
  </div>
</template>

<script setup>
const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 4000)
})

</script>

<style scoped></style>
