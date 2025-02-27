<template>
  <section>
    <div class="text-center mt-44">
      <h2 class="text-xl font-bold tracking-widest">
        代理品牌
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
        <div
            v-for="brand in agencyBrands"
            :key="brand.name"
            class="brand"
        >
          <img
              :src="brand.image"
              :alt="brand.name"
          >
          <h2 class="text-lg m-3">
            {{ brand.name }}
          </h2>
          <p>
            {{ brand.intro }}
          </p>
        </div>
      </div>
    </div>

    <div class="text-center mt-14">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto justify-center">
        <div
            v-for="brand in partnerBrands"
            :key="brand.name"
            class="brand"
        >
          <img
              :src="brand.image"
              :alt="brand.name"
          >
          <h2 class="text-lg m-3">
            {{ brand.name }}
          </h2>
          <p>
            {{ brand.intro }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const agencyBrands = reactive([
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
    name: 'Kronospan',
    image:
        'image/SoleAgent/Kronospan-Logo.png',
    intro: '奧地利進口超耐磨木地板',
  },
  {
    name: 'Pino',
    image:
        'image/SoleAgent/Pino-logo.png',
    intro: '德國進口歐系廚具',
  },
  {
    name: 'Cersanit',
    image:
        'https://img1.wsimg.com/isteam/ip/e901cef4-3288-4b61-82d3-73973b1db24d/logo-og.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,cg:true',
    intro: '歐洲進口衛浴瓷器與磁磚',
  }
]);

const partnerBrands = reactive([
  {
    name: 'ELIE SAAB',
    image:
        'image/SoleAgent/eliee_saab.png',
    intro: '義大利進口壁布 華麗極致',
  },
  {
    name: 'Philipp Plein',
    image:
        'image/SoleAgent/philipp_plein.png',
    intro: '義大利進口壁布 個性奢華',
  },
  {
    name: 'Trussardi',
    image:
        'image/SoleAgent/trussardi.png',
    intro: '義大利進口壁布 現代格調',
  }
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

<style scoped>

img {
  width: 200px;
  height: 200px; 
  object-fit: contain;
}

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
