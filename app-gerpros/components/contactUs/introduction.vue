<template>
  <div
    class="container introduction flex flex-col items-center md:flex-row md:items-start mt-10 w-full"
  >
    <div
      class="title flex flex-wrap ms-2 items-center gap-4 md:gap-2 md:items-start md:flex-col md:ms-12 md:basis-1/5 mb-5"
    >
      <h2 class="service-title text-2xl font-bold md:mb-4">服務說明</h2>
      <div class="options flex md:flex-col gap-4 h-full">
        <option
          v-for="option in contactOptions"
          :key="option.id"
          class="option contact-option h-full flex items-center mt-1"
          :class="{ active: selectedOption === option.id }"
          @click="handleOptionClick(option.id)"
        >
          {{ option.title }}
        </option>
      </div>
    </div>
    <div
      class="content md:basis-2/5 m-2 mb-10 flex flex-col text-wrap items-center md:text-left md:mt-2"
    >
      <h3 class="text-xl mb-5 font-semibold">
        {{ contactOption.title }}
      </h3>
      <p class="mb-5">
        {{ contactOption.detail }}
      </p>
      <p class="mb-5">
        {{ contactOption.time }}
      </p>
      <div
        v-if="contactOption.others"
        class=" p-2 rounded-md text-sm tracking-wide mb-5 mt-5"
      >
        <span>{{ contactOption.others }}</span>
      </div>
      <button class="btn btn-wide btn-error" @click="clickReserve">
        👉 立即預約
      </button>
    </div>
    <div
      class="relative items-center content-center hidden md:flex md:basis-2/5 md:h-full"
    >
      <img
        class="image-object"
        loading="lazy"
        :src="contactOption.image"
        :alt="contactOption.title"
        :class="[`image-${contactOption.id}`, `image-contact`]"
      >
      <div class="image-title">
        <h3 class="text-xl mb-2">
          {{ contactOption.title }}
        </h3>
        <p class="tracking-widest">
          {{ contactOption.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['click-reserve']);

const contactOptionData = reactive({
  staff: {
    id: 'staff',
    title: '線上專人諮詢',
    subtitle: '屋主專屬 貼心服務',
    detail:
      '您可以填寫預約表單來安排這些服務。每次諮詢預計約30分鐘(可根據您的需求進行調整),並通過LINE進行視訊會議。預約完成後,我們會以簡訊形式發送會議連結給您。',
    time: '|| 開放時間:遇一至週五 09:30到17:00',
    others:
      '若您有室內設計需求,請在填寫表單前準備好設計師提供的平面圖或立面圖。我們將根據您的需求安排專業人員聯緊您,並提供報價、合約、丈量及施工的詳細資訊。',
    image: '/image/contact_us_staff.webp',
  },
  store: {
    id: 'store',
    title: '展示館預約',
    subtitle: '專人解說 免費看樣',
    detail:
      '我們在庫存中擁有多種類型的大板和樣板,且有專業的團隊為您進行詳盡的介紹。您可以到我們的展示空間親自感受和檢查樣板,並體驗木質的紋理及高擬真的印刷質感。若有需求,請填寫預約表單,我們將快速安排並與您保持聯繫。',
    image: '/image/contact_us_store.webp',
  },
});
const contactOptions = Object.values(contactOptionData);

const selectedOption = ref('staff');
function handleOptionClick(optionId) {
  selectedOption.value = optionId;
}

const contactOption = computed(() => contactOptionData[selectedOption.value]);

function clickReserve() {
  emit('click-reserve');
}
</script>

<style scoped>
.introduction {
  display: flex;
}
.image-staff {
  transform: scaleX(-1);
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
.image-store {
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
.image-contact {
  object-fit: contain;
  width: 100%;
}
.image-title {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -30%);
  color: black;
}

.service-title::before {
  content: '';
  display: inline-block;
  width: 0.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  background-color: IndianRed;
  transform: translateY(0.25rem);
}

.contact-option {
  cursor: pointer;
  opacity: 0.5;
}
.contact-option.active {
  opacity: 1;
}

.contact-option::before {
  content: '';
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  background-color: black;
  opacity: 0.5;
}
.contact-option.active::before {
  background-color: IndianRed;
  opacity: 1;
}
</style>
