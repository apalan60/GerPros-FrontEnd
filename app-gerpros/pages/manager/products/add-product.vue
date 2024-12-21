<template>
  <div class="p-4">
    <!-- 新增 icon -->
    <button
      class="btn btn-circle btn-primary"
      @click="showModal = true"
    >
      <!-- heroicons plus -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>

    <!-- Modal -->
    <dialog
      v-if="showModal"
      class="modal modal-open"
      @click.self="showModal = false"
    >
      <form
        method="dialog"
        class="modal-box"
        @submit.prevent
      >
        <h3 class="font-bold text-lg mb-4">
          新增產品
        </h3>

        <!-- 選擇 Series ID (下拉選單) -->
        <div class="form-control mb-2">
          <label class="label">
            <span class="label-text">系列</span>
          </label>
          <select v-model="selectedSeriesId">
            <option
              disabled
              value=""
            >
              請選擇系列
            </option>
            <template
              v-for="brand in brandSeries"
              :key="brand.id"
            >
              <optgroup :label="brand.name">
                <option
                  v-for="seriesItem in brand.series"
                  :key="seriesItem.id"
                  :value="seriesItem.id"
                >
                  {{ brand.name }} / {{ seriesItem.name }}
                </option>
              </optgroup>
            </template>
          </select>
        </div>

        <!-- 輸入產品名稱 -->
        <div class="form-control mb-2">
          <label class="label">
            <span class="label-text">產品名稱</span>
          </label>
          <input
            v-model="name"
            class="input input-bordered"
            placeholder="請輸入產品名稱"
          >
        </div>

        <!-- 輸入價格 -->
        <div class="form-control mb-2">
          <label class="label">
            <span class="label-text">價格</span>
          </label>
          <input
            v-model.number="price"
            class="input input-bordered"
            type="number"
            placeholder="請輸入價格"
          >
        </div>

        <!-- 圖片上傳 -->
        <div class="form-control mb-2">
          <label class="label">
            <span class="label-text">圖片上傳</span>
          </label>
          <input
            type="file"
            class="file-input file-input-bordered w-full max-w-xs"
            @change="handleFileUpload"
          >
        </div>

        <!-- 輸入詳細描述 -->
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">詳細描述</span>
          </label>
          <textarea
            v-model="detail"
            class="textarea textarea-bordered"
            placeholder="請輸入詳細描述"
          />
        </div>

        <!-- AddProductButton -->
        <div class="modal-action">
          <!-- 取消按鈕 -->
          <button
            class="btn btn-ghost"
            @click="showModal = false"
          >
            取消
          </button>
          <!-- 新增產品按鈕 -->
          <AddProductButton
            :series-id="selectedSeriesId"
            :name="name"
            :price="price"
            :image="selectedFile"
            :detail="detail"
            @success="handleSuccess"
            @error="handleError"
          />
        </div>
      </form>
    </dialog>
    <ToastMessage />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AddProductButton from '~/components/product/AddProductButton.vue';
import ToastMessage from '~/components/ToastMessages.vue';
import { useBrandSeriesStore } from '~/stores/brandSeries';

const showModal = ref(false);
const { brandSeries } = useBrandSeriesStore();

// 表單輸入的資料
const seriesId = ref('');
const name = ref('');
const price = ref<number>(0);
const detail = ref('');
const selectedFile = ref<File | null>(null);

// 上傳檔案事件
function handleFileUpload(e: Event) {
  const files = (e.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    selectedFile.value = files[0];
  }
  else {
    selectedFile.value = null;
  }
}

// Toast 訊息
const { showToast } = useToast();
const handleSuccess = () => {
  showToast('success', '產品新增成功！');
  showModal.value = false;
  // 清空欄位
  seriesId.value = '';
  name.value = '';
  price.value = 0;
  detail.value = '';
  selectedFile.value = null;
};

const handleError = () => {
  showToast('error', '產品新增失敗');
};
</script>
