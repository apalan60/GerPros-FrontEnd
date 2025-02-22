<template>
  <div class="introduction-wrapper">
    <div class="cover-wrapper w-full h-96" />
    <div
      class="content-wrapper w-full p-3"
      :class="{ story: isStory }"
    >
      <div class="options-wrapper">
        <div
          v-for="option in options"
          :key="option.value"
          class="h-16 option font-semibold"
          :class="{ selected: selectedOption === option.value }"
          @click="onClickedOption(option.value)"
        >
          {{ option.label }}
        </div>
      </div>
      <div
        class="title font-bold gap-2"
        :class="{ 'text-xl': !isStory }"
      >
        <h2
          v-for="(title, index) in contentData[selectedOption].title"
          :key="index"
        >
          {{ title }}
        </h2>
      </div>
      <div class="line" />
      <div
        v-if="isStory"
        class="content gap-1"
      >
        <p
          v-for="content in contentData[selectedOption].content"
          :key="content"
        >
          {{ content }}
        </p>
      </div>
    </div>
    <div v-if="isStory">
      <AboutUsCulture />
      <div class="pt-8 pb-8">
        <MainPageSoleAgent />
      </div>
      <AboutUsMap />
      <AboutUsPhotos />
    </div>
    <div v-if="isService">
      <AboutUsService />
    </div>
    <div v-if="isValue">
      <AboutUsValue />
    </div>
  </div>
</template>

<script setup>
const selectedOption = ref('story');
const isStory = computed(() => selectedOption.value === 'story');
const isService = computed(() => selectedOption.value === 'service');
const isValue = computed(() => selectedOption.value === 'value');
const options = [
  { value: 'story', label: '品牌故事' },
  { value: 'service', label: '服務流程' },
  { value: 'value', label: '品質認證' },
];
const contentData = {
  story: {
    title: [
      '德藝緻股份有限公司是',
      '歐盟集團 - Cersanit S.A. 和土耳其進口超耐磨地板 Art Floor',
      '在台灣的總代理公司。',
    ],
    content: [
      '德藝緻股份有限公司專注於引進國際高端建材品牌，致力於將世界頂級的設計與工藝引入台灣市場。我們代理多個歐系知名品牌，產品涵蓋ArtFloor、Arteo、Kronospan超耐磨木地板，ELIE SAAB、Philipp Plein、Trussardi義大利進口壁布及壁畫，Cersanit歐洲進口衛浴瓷器與磁磚以及Pino歐系廚具，為顧客提供兼具美感與實用性的空間設計解決方案。',
      '',
      '',
      '',
      '我們始終堅持品質至上的原則，所代理的產品皆通過嚴格的品質控管，確保每一件商品無論是材質、功能還是環保性，都符合國際標準與消費者的高期待。不論是展現藝術品味的壁布、耐用且質感卓越的木地板，或是結合創新與實用的歐系廚具，德藝緻全方位滿足現代空間的多元需求。',
    ],
  },
  service: {
    title: ['服務介紹說明'],
  },
  value: {
    title: ['歐洲進口專業建材'],
  },
};
function onClickedOption(option) {
  selectedOption.value = option;
}
</script>

<style scoped>
.cover-wrapper {
  background-image: url('/image/about-us-header.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.options-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.option {
  padding: 0 3rem;
  cursor: pointer;
  background: rgba(188, 140, 77, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
}
.option.selected {
  background: white;
  color: rgba(188, 140, 77, 0.7);
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  text-align: center;
  min-width: 24rem;
  padding: 3rem 0;
}
.content-wrapper.story {
  background-image: url('/image/about-us-bg.webp');
  background-size: cover;
  background-position: center;
}
.title {
  display: flex;
  flex-direction: column;
  max-width: 30rem;
}
.content {
  display: flex;
  flex-direction: column;
  max-width: 30rem;
}
.line {
  width: 10rem;
  height: 1.5px;
  background: rgba(188, 140, 77, 1);
}

@media (max-width: 550px) {
  .options-wrapper{
    flex-direction: column;
  }
}
</style>
