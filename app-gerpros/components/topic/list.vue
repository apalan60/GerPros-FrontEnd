<template>
  <div class="container mx-auto p-4 flex flex-col items-center gap-4 mb-8">
    <div class="flex gap-4 w-full">
      <div class="grow">
        <TopicCard
          v-for="topic in topicList"
          :key="topic.id"
          :topic="topic"
          :is-manager="isManager"
          @click-tag="goToTag($event)"
          @click-delete="onClickedDelete($event)"
        />
      </div>
      <div class="flex-none w-[20%] h-100 p-4 border-l-2 border-gray-200">
        <h2 class="text-lg font-bold pb-2 mb-4 border-b-2 border-base-200">
          主題標籤
        </h2>
        <div class="tags flex flex-wrap gap-2 cursor-pointer">
          <div
            v-for="tag in tagList"
            :key="tag"
            class="badge badge-outline badge-primary"
            :class="{ 'badge-primary': tag === searchedTag }"
            @click="goToTag(tag)"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
    <Pagination class="mt-8" :total-pages="totalPages" @go-to-page="goToPage" />
  </div>
  <dialog
    id="delete_modal"
    ref="dialogue"
    class="modal modal-bottom sm:modal-middle"
  >
    <div class="modal-box">
      <h3 class="text-lg font-bold">確定刪除文章?</h3>
      <p class="py-4">請再次確定</p>
      <div class="modal-action flex justify-end items-center gap-2">
        <p v-if="isError" class="text-red-500">
          發生錯誤，請檢察網路或洽詢系統人員
        </p>
        <button class="btn btn-outline" @click="onConfirmDelete">確定</button>
        <form method="dialog">
          <button class="btn" @click="isError = false">關閉</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { TEST_TOPIC_LIST } from '~/constants';

const route = useRoute();

const topicRawData = ref({});
const topicList = computed(() => {
  return topicRawData.value.items;
});
const tagList = ref([]);
const searchedTag = computed(() => route.query.Tags);
const totalPages = computed(() => topicRawData.value.totalPages);
const isManager = computed(() => route.path.includes('/manager/'));


async function fetchData() {
  const params = {
    PageSize: 12, // 固定參數
  };
  params.PageNumber = route.query.PageNumber ?? 1;
  if (searchedTag.value) {
    params.Tags = searchedTag.value;
  }
  try {
    const data = await useApiFetch('/Posts', {
      params,
    });
    if (data) {
      topicRawData.value = data;
    }
  } catch (error) {
    topicRawData.value = TEST_TOPIC_LIST;
    console.error('無法獲取產品資料', error);
  }

  try {
    const tagListData = await useApiFetch('/Tags');
    if (tagListData) {
      tagList.value = tagListData;
    }
  } catch (error) {
    tagList.value = [];
    console.error('無法獲取標籤資料', error);
  }
}

async function goToTag(targetTag) {
  if (targetTag === route.query.tags) {
    await goTo({ tag: undefined });
  } else {
    await goTo({ tag: targetTag });
  }
}

async function goToPage(pageNumber) {
  const params = {
    ...(pageNumber?.value && { PageNumber: pageNumber.value }),
    pageNumber,
  };
  await goTo(params);
}

async function goTo({ pageNumber = 1, tag } = {}) {
  await navigateTo({
    path: isManager.value ? '/manager/topic' : '/topic',
    query: {
      PageNumber: pageNumber,
      Tags: tag,
    },
  });
}
const deleteTargetId = ref('');
function onClickedDelete(id) {
  deleteTargetId.value = id;
  delete_modal.showModal();
}

const isError = ref(false);
async function onConfirmDelete() {
  try {
    await useApiFetch(`/Posts/${deleteTargetId.value}`, {
      method: 'DELETE',
    });
    deleteTargetId.value = '';
    delete_modal.close();
  } catch (error) {
    console.error(error);
    isError.value = true;
  }
}

watch(
  () => route.query,
  () => {
    fetchData();
  },
  { immediate: true },
);
</script>

<style scoped></style>
