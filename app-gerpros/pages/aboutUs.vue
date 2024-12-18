<template>
  <div class="introduction-wrapper">
    <div class="cover-wrapper w-full h-96"></div>
    <div class="content-wrapper w-full p-3" :class="{ story: isStory }">
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
      <div class="title font-bold gap-2" :class="{ 'text-xl': !isStory }">
        <h2
          v-for="(title, index) in contentData[selectedOption].title"
          :key="index"
        >
          {{ title }}
        </h2>
      </div>
      <div class="line"></div>
      <div v-if="isStory" class="content gap-1">
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
      '歐盟集團 - Cersanit S.A. 和土耳其進口超慨磨地板 Art Floor',
      '在台灣的總代理公司。',
    ],
    content: [
      '我們提供多樣建材選擇，以滿足各種居家裝潢裝修等需求。通過了多項國際專業檢測，以確保到理想的居家標準。我們提供專業的工程輔導、多元地材推薦和完善的售後服務，致力於與您共同打造完美的居家環境。',
      '',
      '我們秉持創新精神，擁有多項專利技術，並推動可持續發展。',
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
</style>
