<template>
  <div class="p-4">
    <!-- 新增 icon -->
    <button class="btn btn-circle btn-primary" @click="showModal = true">
      <!-- heroicons plus -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 4v16m8-8H4" />
      </svg>
    </button>

    <!-- Modal -->
    <dialog v-if="showModal" class="modal modal-open" @click.self="showModal = false">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg mb-4">新增產品</h3>

        <!-- 輸入系列ID -->
        <div class="form-control mb-2">
          <label class="label">
            <span class="label-text">Series ID</span>
          </label>
          <input class="input input-bordered" v-model="seriesId" placeholder="請輸入 seriesId" />
        </div>

        <!-- 輸入產品名稱 -->
        <div class="form-control mb-2">
          <label class="label">
            <span class="label-text">產品名稱</span>
          </label>
          <input class="input input-bordered" v-model="name" placeholder="請輸入產品名稱" />
        </div>

        <!-- 輸入價格 -->
        <div class="form-control mb-2">
          <label class="label">
            <span class="label-text">價格</span>
          </label>
          <input class="input input-bordered" v-model.number="price" type="number" placeholder="請輸入價格" />
        </div>

        <!-- 輸入圖片連結 -->
        <div class="form-control mb-2">
          <label class="label">
            <span class="label-text">圖片 URL</span>
          </label>
          <input class="input input-bordered" v-model="image" placeholder="請輸入圖片 URL" />
        </div>

        <!-- 輸入詳細描述 -->
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">詳細描述</span>
          </label>
          <textarea class="textarea textarea-bordered" v-model="detail" placeholder="請輸入詳細描述"></textarea>
        </div>

        <!-- AddProductButton -->
        <div class="modal-action">
          <!-- 取消按鈕 -->
          <button class="btn btn-ghost" @click="showModal = false">取消</button>
          <!-- 新增產品按鈕 -->
          <AddProductButton
              :seriesId="seriesId"
              :name="name"
              :price="price"
              :image="image"
              :detail="detail"
              @success="handleSuccess"
              @error="handleError"
          />
        </div>
      </form>
    </dialog>

    <!-- Toast 區域 -->
    <div class="toast toast-top toast-end">
      <div v-if="successMessage" class="alert alert-success">
        <span>{{ successMessage }}</span>
      </div>
      <div v-if="errorMessage" class="alert alert-error">
        <span>{{ errorMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AddProductButton from "~/components/product/AddProductButton.vue";

const showModal = ref(false);

// 表單輸入的資料
const seriesId = ref('');
const name = ref('');
const price = ref<number>(0);
const image = ref('');
const detail = ref('');

// Toast 訊息
const successMessage = ref('');
const errorMessage = ref('');

// 成功回調
const handleSuccess = (result: any) => {
  successMessage.value = '產品新增成功！';
  errorMessage.value = '';
  showModal.value = false;
  // 幾秒後自動清除提示，可自行調整
  setTimeout(() => {
    successMessage.value = '';
  }, 3000);
};

// 失敗回調
const handleError = (error: any) => {
  successMessage.value = '';
  errorMessage.value = '產品新增失敗，請稍後再試';
  // 幾秒後自動清除提示，可自行調整
  setTimeout(() => {
    errorMessage.value = '';
  }, 3000);
};
</script>
