<template>
  <div class="contact-wrapper">
    <div class="cover-wrapper w-full h-96 ">
      <div class="contact-us">
        <h2 class="zh">常見問題</h2>
        <h3 class="eng">FAQ</h3>
      </div>
    </div>
    <div class="flex w-[70vw] my-8">
      <div
        class="card bg-zinc-100 rounded-box grid h-20 flex-grow place-items-center hover:bg-zinc-200 cursor-pointer"
        :class="{
          'border-b border-solid border-gray-200 font-bold':
            selected === '地板常見問題',
        }"
        @click="onSelect('地板常見問題')"
      >
        地板常見問題
      </div>
      <div class="divider divider-horizontal"></div>
      <div
        class="card bg-zinc-100 rounded-box grid h-20 flex-grow place-items-center hover:bg-zinc-200 cursor-pointer"
        :class="{
          'border-b border-solid border-gray-200 font-bold':
            selected === '室內設計常見問題',
        }"
        @click="onSelect('室內設計常見問題')"
      >
        室內設計常見問題
      </div>
    </div>
    <div class="flex flex-col gap-3 my-4">
      <div
        v-for="qa in selectedFaqList"
        :key="qa.question"
        class="bg-base-200 collapse collapse-arrow w-[70vw]"
      >
        <input type="checkbox" class="peer" />
        <div
          class="collapse-title bg-base-200 peer-checked:bg-base-200 peer-checked:text-secondary-content border-b border-solid border-gray-200 font-bold"
        >
          {{ qa.question }}
        </div>
        <div
          class="collapse-content bg-base-100 text-primary-content peer-checked:bg-base-100 peer-checked:text-secondary-content peer-checked:py-[30px]"
        >
          <p>{{ qa.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FAQ } from '@/constants';

const selected = ref('室內設計常見問題');
const selectedFaqList = computed(() => {
  const option = selected.value;
  return FAQ[option];
});
function onSelect(option) {
  console.log('🚀 ~ onSelect ~ option:', option);
  selected.value = option;
}
</script>

<style scoped>
.contact-wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cover-wrapper {
  display: flex;
  justify-content: right;
  align-items: flex-end;
  background-image: url('/image/contact_us_cover.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.contact-us {
  width: 90dvw;
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;
}
.contact-us .eng {
  font-size: 1.5rem;
}
</style>
