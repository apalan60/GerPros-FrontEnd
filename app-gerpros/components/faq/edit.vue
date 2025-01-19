<template>
  <div class="w-full">
    <div class="flex my-8">
      <div
        class="card bg-zinc-100 rounded-box grid h-20 flex-grow place-items-center hover:bg-zinc-200 cursor-pointer"
        :class="{
          'border-b border-solid border-blue-500 bg-blue-200 font-bold':
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
          'border-b border-solid border-blue-500 bg-blue-200 font-bold':
            selected === '室內設計常見問題',
        }"
        @click="onSelect('室內設計常見問題')"
      >
        室內設計常見問題
      </div>
    </div>
    <div class="flex flex-col gap-3 my-4">
      <div
        v-for="(qa, index) in selectedFaqList"
        :key="qa.question"
        class="flex flex-col gap-0"
      >
        <div class="my-2 flex items-center">
          <span class="font-bold text-gray-500 mr-3">{{ index + 1 }}</span>
          <button
            class="btn btn-outline btn-error btn-sm w-16"
            @click="removeQAFromList(index)"
          >
            delete
          </button>
        </div>
        <div class="question w-full flex item-center gap-2 ms-2">
          <input
            class="input w-full bg-base-200 font-bold border-b border-solid border-gray-200"
            :value="qa.question"
            @change="qa.question = $event.target.value"
          >
        </div>
        <div class="answer w-full flex item-center gap-2 ms-2">
          <textarea
            class="textarea bg-base-100 border-b border-solid border-gray-200 w-full"
            :value="qa.answer"
            @change="qa.answer = $event.target.value"
          />
        </div>
      </div>
      <button class="btn btn-outline btn-info" @click="onAdd">新增QA</button>
      <button class="btn btn-success" @click="onUpdate">確認</button>
    </div>
  </div>
  <dialog
    id="check_modal"
    ref="dialogue"
    class="modal modal-bottom sm:modal-middle"
  >
    <div class="modal-box">
      <h3 class="text-lg font-bold">請再次確認</h3>
      <p class="py-4">{{ dialogueText }}</p>
      <div class="modal-action flex justify-end items-center gap-2">
        <p v-if="isError" class="text-red-500">
          發生錯誤，請檢察網路或洽詢系統人員
        </p>
        <button class="btn btn-outline" @click="onConfirm">確定</button>
        <form method="dialog">
          <button class="btn" @click="isError = false">關閉</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { FAQ } from '~/constants';

const FAQList = ref([]);
const dialogueText = ref('');
const dialogueConfirmFunc = ref(() => {});
const isError = ref(false);

onMounted(async () => {
  await fetchFAQ();
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

function removeQAFromList(index) {
  const category = FAQList.value.find(
    (item) => item.categoryName === selected.value,
  );
  if (category && category.faqItems.length > index) {
    category.faqItems.splice(index, 1); // 移除指定索引的項目
    return true; // 返回成功標記
  }
  return false; // 若未找到對應項目則返回失敗標記
}

async function fetchFAQ() {
  try {
    const data = await useApiFetch('/FAQ');
    if (data) {
      FAQList.value = data;
    }
  } catch (error) {
    console.error(error);
    FAQList.value = FAQ;
  }
}
function onAdd() {
  const category = FAQList.value.find(
    (item) => item.categoryName === selected.value,
  );
  if (category) {
    category.faqItems.push({ question: '', answer: '' });
  }
}

function onUpdate() {
  dialogueText.value = '確認更新QA?';
  dialogueConfirmFunc.value = updateQA;
  check_modal.showModal();
}

async function updateQA() {
  //改為所有QA一次更新
  try {
    for (const category of FAQList.value) {
      await useApiFetch(`/FAQ/${category.id}`, {
        method: 'PUT',
        body: JSON.stringify(category),
      });
    }
  } catch (error) {
    throw new Error('更新QA失敗', error);
  }
}

async function onConfirm() {
  try {
    await dialogueConfirmFunc.value();
    check_modal.close();
  } catch (error) {
    console.error(error);
    isError.value = true;
  }
}
</script>

<style scoped>
.question::before {
  content: 'Q';
  font-weight: bold;
  font-size: 1.5rem;
  color: grey;
}
.answer::before {
  content: 'A';
  font-weight: bold;
  font-size: 1.5rem;
  color: grey;
}
</style>
