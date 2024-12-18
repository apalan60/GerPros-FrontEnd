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
    <div class="flex flex-col items-center mt-16 w-3/4 mx-auto gap-4">
      <h2 class="text-xl font-bold">創新無限．超越卓越</h2>
      <hr class="w-1/2 border-t-2 border-gray-300" />
      <p>
        在德藝緻，我們深知每個小細節都蘊含巨大的力量，以無限創新和對卓越的不懈追求，為您和您的家人帶來最純粹的關愛。我們的願景是超越一切期望，無論是品質、設計還是服務，我們始終秉持「創新無限．超越卓越」的信念。
      </p>
      <p>
        每年，我們的團隊都潛心挖掘更多更好的服務，來提供更安全、更舒適的居家體驗。真正的美好源於對細節的關注，這正是我們的核心價值所在。
      </p>
    </div>
    <div class="flex w-4/5 gap-8 items-center justify-center mx-auto my-4">
      <a
        href="\files\建築新技術材料認可通知書-IXPE.pdf"
        target="_blank"
        class="flex flex-col items-center gap-4"
      >
        <img
          src="/image/about-us-value-material-pdf.jpg"
          alt="臺灣建築協會認可"
          class="h-[350px] object-cover"
        />
        <p>臺灣建築協會認可</p>
      </a>
      <a
        href="\files\kastamonu屏科大測報-15倍鋁箔.pdf"
        target="_blank"
        class="flex flex-col items-center gap-4"
      >
        <img
          src="/image/about-us-value-npust-pdf.jpg"
          alt="國立屏東科技大學試驗報告"
          class="h-[350px] object-cover"
        />
        <p>國立屏東科技大學試驗報告</p>
      </a>
      <a
        href="\files\SGS kastamonu+有毒物質.pdf"
        target="_blank"
        class="flex flex-col items-center gap-4"
      >
        <img
          src="/image/about-us-value-sgs-pdf.jpg"
          alt="SGS 試驗報告"
          class="h-[350px] object-cover"
        />
        <p>SGS 試驗報告</p>
      </a>
    </div>
    <div class="flex flex-col items-center my-16 w-3/4 mx-auto gap-4">
      <h2 class="text-xl font-bold">其他測試認證</h2>
      <img src="/image/about-us-value-tests.jpg" alt="通過多項測試認證" />
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
