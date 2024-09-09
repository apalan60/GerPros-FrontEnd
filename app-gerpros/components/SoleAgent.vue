<script setup>
const brands = reactive([
  {
    name: 'Cersanit',
    image:
      'https://img1.wsimg.com/isteam/ip/e901cef4-3288-4b61-82d3-73973b1db24d/logo-og.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,cg:true',
    intro: '歐洲進口衛浴瓷器與磁磚',
  },
  {
    name: 'Art Floor',
    image:
      'https://img1.wsimg.com/isteam/ip/e901cef4-3288-4b61-82d3-73973b1db24d/%E6%9C%AA%E5%91%BD%E5%90%8D-1_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%201-345f70f.png/:/cr=t:13.24%25,l:23.99%25,w:52.02%25,h:73.53%25/rs=w:730,h:730,cg:true,m',
    intro: '土耳其進口超耐磨木地板',
  },
  {
    name: 'Arteo',
    image:
      'https://img1.wsimg.com/isteam/ip/e901cef4-3288-4b61-82d3-73973b1db24d/arteo_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%201.png/:/cr=t:0%25,l:14.63%25,w:70.74%25,h:100%25/rs=w:730,h:730,cg:true',
    intro: '德國進口超耐磨木地板',
  },
  {
    name: 'Philipp Plein',
    image:
      'https://img1.wsimg.com/isteam/ip/e901cef4-3288-4b61-82d3-73973b1db24d/phillip-plein-logo-01.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,h:730,cg:true',
    intro: '義大利進口壁布',
  },
]);

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollMagic = (await import('scrollmagic')).default;

    const controller = new ScrollMagic.Controller();

    const revealElements = document.querySelectorAll('.brand');

    revealElements.forEach((element, index) => {
      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9,
        reverse: true,
      })
        .on('enter', () => {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 200);
        })
        .on('leave', () => {
          element.classList.remove('visible');
        })
        .addTo(controller);
    });
  }
});
</script>

<template>
  <section>
    <div class="text-center">
      <h2 class="text-2xl font-bold">優質國際品牌的總代理</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto">
        <div v-for="brand in brands" :key="brand.name" class="brand">
          <img :src="brand.image" :alt="brand.name" />
          {{ brand.intro }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s;
}
.visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.5s;
}
</style>
