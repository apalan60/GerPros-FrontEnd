<template>
  <div class="form-wrapper">
    <h2 class="text-2xl font-bold mb-8">
      聯絡我們
    </h2>
    <div class="form">
      <form
        class="mb-10"
        @submit.prevent="submitForm"
      >
        <div class="grid grid-cols-2 gap-4 mb-4 container">
          <label>
            <div class="label">
              <span class="label-text">姓</span>
            </div>
            <input
              v-model="lastName"
              type="text"
              placeholder="請輸入姓氏"
              class="input input-bordered w-full"
            >
          </label>

          <label>
            <div class="label">
              <span class="label-text">名</span>
            </div>
            <div class="flex gap-4">
              <input
                v-model="firstName"
                type="text"
                placeholder="請輸入名字"
                class="input input-bordered w-full sm:w-7/12"
              >
              <div class="hidden sm:flex gap-1 items-center">
                <input
                  id="mr"
                  v-model="customerTitle"
                  type="radio"
                  value="先生"
                  class="radio"
                >
                <label for="mr">先生</label>
                <input
                  id="mrs"
                  v-model="customerTitle"
                  type="radio"
                  value="小姐"
                  class="radio"
                >
                <label for="mrs">小姐</label>
              </div>
            </div>
          </label>

          <label class="flex sm:hidden">
            <div class="label">
              <span class="label-text">稱謂</span>
            </div>
            <div class="flex gap-1 items-center">
              <input
                id="mr"
                v-model="customerTitle"
                type="radio"
                value="先生"
                class="radio"
              >
              <label for="mr">先生</label>
              <input
                id="mrs"
                v-model="customerTitle"
                type="radio"
                value="小姐"
                class="radio"
              >
              <label for="mrs">小姐</label>
            </div>
          </label>

          <label class="block">
            <div class="label">
              <span class="label-text">公司名稱</span>
            </div>
            <input
              v-model="companyName"
              type="text"
              placeholder="請輸入公司名稱"
              class="input input-bordered w-full"
            >
          </label>

          <label class="block">
            <div class="label">
              <span class="label-text">聯絡電話</span>
            </div>
            <input
              v-model="phone"
              type="text"
              placeholder="請輸入聯絡電話"
              class="input input-bordered w-full"
            >
          </label>

          <label class="block">
            <div class="label">
              <span class="label-text">身份</span>
            </div>
            <select
              v-model="customerType"
              class="select select-bordered w-full"
            >
              <option
                disabled
                selected
              >請選擇</option>
              <option
                v-for="option in customerTypeOption"
                :key="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <div class="label">
              <span class="label-text">E-MAIL</span>
            </div>
            <input
              v-model="email"
              type="email"
              placeholder="請輸入E-MAIL"
              class="input input-bordered w-full"
            >
          </label>

          <label>
            <div class="label">
              <span class="label-text">可聯絡時間</span>
            </div>
            <select
              v-model="contactTime"
              class="select select-bordered w-full"
            >
              <option
                disabled
                selected
              >請選擇</option>
              <option
                v-for="option in contactTimeOption"
                :key="option"
              >
                {{ option }}
              </option>
            </select>
          </label>
        </div>

        <div class="flex flex-col gap-4">
          <label>
            <div class="label">
              <span class="label-text">通訊地址</span>
            </div>
            <div class="flex gap-2">
              <input
                v-model="zipCode"
                type="text"
                class="input input-bordered w-1/5 bg-gray-200"
                readonly
              >
              <select
                v-model="country"
                class="select select-bordered"
              >
                <option
                  disabled
                  selected
                >選擇縣市</option>
                <option
                  v-for="option in countryOption"
                  :key="option"
                >
                  {{ option }}
                </option>
              </select>
              <select
                v-model="area"
                class="select select-bordered"
              >
                <option
                  disabled
                  selected
                >選擇區域</option>
                <option
                  v-for="option in areaOption"
                  :key="option"
                >
                  {{ option }}
                </option>
              </select>
              <input
                v-model="address"
                type="text"
                class="input input-bordered w-full"
              >
            </div>
          </label>

          <label>
            <div class="label">
              <span class="label-text">能為您提供什麼服務</span>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <select
                v-model="serviceType"
                class="select select-bordered"
              >
                <option
                  disabled
                  selected
                >請選擇</option>
                <option
                  v-for="option in serviceTypeOption"
                  :key="option"
                >
                  {{ option }}
                </option>
              </select>
              <input
                v-model="otherServiceType"
                type="text"
                class="input input-bordered w-full"
                placeholder="其他"
              >
            </div>
          </label>

          <label>
            <div class="label">
              <span class="label-text">如何得知</span>
            </div>
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center mb-2">
              <template
                v-for="(option, index) in knowMethodOption"
                :key="index"
              >
                <div>
                  <input
                    :id="index"
                    v-model="knowMethod"
                    type="radio"
                    :value="option"
                    class="radio"
                  >
                  <label :for="index">{{ option }}</label>
                </div>
              </template>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <input
                  id="other"
                  v-model="knowMethod"
                  type="radio"
                  value="其他"
                  class="radio"
                >
                <label for="other"> 其他 </label>
              </div>
              <input
                v-model="otherKnowMethod"
                type="text"
                class="input input-bordered w-3/5"
                placeholder="其他"
              >
            </div>
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">留言</span>
            </div>
            <textarea
              v-model="comment"
              class="textarea textarea-bordered h-24"
              placeholder="請輸入留言"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">圖片或檔案上傳</span>
              <span class="label-text text-gray-500">檔案格式限制：JPEG、PDF</span>
            </div>
            <input
              type="file"
              class="file-input file-input-bordered w-full"
            >
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">附件上傳</span>
              <span class="label-text text-red-500">【可放名片或詢問的地板照片等，限制 2 MB】</span>
            </div>
            <input
              type="file"
              class="file-input file-input-sm file-input-bordered w-full"
            >
            <input
              type="file"
              class="file-input file-input-sm file-input-bordered w-full"
            >
          </label>
          <div class="mb-4">
            <span class="text-gray-500 block">
              - 聯絡資料僅作方便聯繫您之用途。
            </span>
            <span class="text-gray-500 block">
              - 若以無需詢問，屆時請在告知聯繫您的服務人員，避免重複撥打。
            </span>
          </div>
        </div>
        <button class="btn btn-outline w-full">
          送出
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ZIP_CODE } from '@/constants';

const lastName = ref('');
const firstName = ref('');
const customerTitle = ref('');

const companyName = ref('');
const phone = ref('');

const customerType = ref('請選擇');
const customerTypeOption = ['一般消費者', '設計師／建築師／建設公司'];

const email = ref('');

const contactTime = ref('請選擇');
const contactTimeOption = ['9-12', '12-15', '15-18', '不限'];

const country = ref('選擇縣市');
const countryOption = reactive(Object.keys(ZIP_CODE));
const area = ref('選擇區域');
const areaOption = computed(() => Object.keys(ZIP_CODE[country.value] || []));
const zipCode = computed(() => ZIP_CODE[country.value]?.[area.value]);
const address = ref('');

const serviceType = ref('請選擇');
const serviceTypeOption = [
  '室內設計',
  '歐系地板',
  '系統廚具',
  '請業務人員與您聯繫',
  '其他',
];
const otherServiceType = ref('');

const knowMethod = ref('請選擇');
const knowMethodOption = [
  '社群媒體',
  'Google搜尋',
  '設計師或親友介紹',
  '部落格推薦',
  '雜誌與EMAIL廣告',
  '展覽',
];
const otherKnowMethod = ref('');

const comment = ref('');
</script>

<style>
.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
}
.form {
  flex-direction: row;
}
</style>
