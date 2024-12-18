<template>
  <div>
    <div class="flex justify-between max-w-screen-xl mx-auto">
      <div class="flex-1 h-100 bg-blue-500 bg-side-1"></div>
      <div
        class="flex-1 space-y-6 h-[350px] flex-col content-center bg-gray-200"
      >
        <div class="space-y-4 p-8">
          <div class="flex items-center">
            <h3 class="text-xl font-medium">超耐磨更實用</h3>
          </div>
          <p>
            具備超高商用耐磨等級的堅實材質、耐熱性佳，阻燃性高。且使用壽命長,堅固耐用、抵抗高壓,不易變形或出現裂隙。
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-between max-w-screen-xl mx-auto">
      <div
        class="flex-1 space-y-6 h-[350px] flex-col content-center bg-gray-200"
      >
        <div class="space-y-4 p-8">
          <div class="flex items-center">
            <h3 class="text-xl font-medium">防水特性更勝一籌</h3>
          </div>
          <p>
            防水強化木地板採用特殊卡扣結構讓液體不易穿透交接縫，有效阻擋潮濕、膨脹等問題，低甲醛安心使用,健康環境的地板選擇。
          </p>
        </div>
      </div>
      <div class="flex-1 h-100 bg-blue-500 bg-side-2"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg-side-1 {
  background-image: url('/image/about-us-value-pet.jpg');
  background-size: cover;
  background-position: center;
}
.bg-side-2 {
  background-image: url('/image/about-us-value-water.jpg');
  background-size: cover;
  background-position: center;
}
</style>
