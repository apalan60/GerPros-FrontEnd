<template>
  <div class="flex justify-between max-w-screen-xl mx-auto mb-16">
    <div class="flex-1 h-100 bg-side" />
    <div class="flex-1 pl-16 space-y-6">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <img
            src="/image/icons8-award-100.png"
            alt="Icon"
            class="w-10 h-10"
          >
          <h3 class="text-xl font-medium">
            門市諮詢
          </h3>
        </div>
        <p>
          我們的門市諮詢提供您一對一專屬服務與專業建議，解決疑問與提供最新資訊和建材支持。協助您精準選擇合適的產品，打造理想空間。
        </p>
      </div>
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <img
            src="/image/icons8-award-100.png"
            alt="Icon"
            class="w-10 h-10"
          >
          <h3 class="text-xl font-medium">
            訂立合約
          </h3>
        </div>
        <p>
          客戶簽約後，我們提供正是報價單，預付訂金後，合作正式開始，並安排後續工程時間，確保項目順利進行。
        </p>
      </div>
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <img
            src="/image/icons8-award-100.png"
            alt="Icon"
            class="w-10 h-10"
          >
          <h3 class="text-xl font-medium">
            實地丈量
          </h3>
        </div>
        <p>
          我們將派遣專業人員到場精準測量，確保所有數據準確無誤，以滿足您的需求並確保施工順利。
        </p>
      </div>
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <img
            src="/image/icons8-award-100.png"
            alt="Icon"
            class="w-10 h-10"
          >
          <h3 class="text-xl font-medium">
            專業團隊
          </h3>
        </div>
        <p>
          我們提供高品質、專業的施工服務，確保每個項目達到最高標準，滿足您的需求和期望，並打造優質的成品效果。
        </p>
      </div>
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <img
            src="/image/icons8-award-100.png"
            alt="Icon"
            class="w-10 h-10"
          >
          <h3 class="text-xl font-medium">
            完工展示
          </h3>
        </div>
        <p>
          我們在完成工程後進行驗收工程，並期待您在確認後完成款項支付，以利後續提供售後服務內容。
        </p>
      </div>
      <button
        class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md"
      >
        <NuxtLink :to="'/contact'">
          我有需求，馬上預約!!
        </NuxtLink>
      </button>
    </div>
  </div>
</template>

<style scoped>
.bg-side {
  background-image: url('/image/about-us-service-side.jpg');
  background-size: cover;
  background-position: center;
}
</style>
