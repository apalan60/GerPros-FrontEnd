<template>
  <div>
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
      <div class="divider divider-horizontal" />
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
        <input type="checkbox" class="peer" >
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
import { FAQ } from '~/constants';

const FAQList = ref([]);
onMounted(async () => {
  try {
    const data = await useApiFetch('/FAQ');
    if (data) {
      FAQList.value = data;
    }
  } catch (error) {
    console.error(error);
    FAQList.value = FAQ;
  }
});

const selected = ref('室內設計常見問題');

const selectedFaqList = computed(() => {
  const option = selected.value;
  const category = FAQList.value.find(
    (category) => category.categoryName === option,
  );
  return category ? category.faqItems : [];
});

function onSelect(option) {
  selected.value = option;
}
</script>
