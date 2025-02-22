<template>
  <footer class="footer bg-base-200 text-base-content p-10">
    <div/>
    <div/>
    <aside class="flex flex-col items-center mx-auto">
      <IconLogo/>
      <p>"溫度，從你的每一步開始"</p>
      <div class="grid grid-flow-col gap-4 pt-2">
        <IconInstagram/>
        <IconLine/>
        <IconFacebook/>
      </div>
    </aside>

    <nav class="">
      <h5 class="footer-title">
        頁面導覽
      </h5>
      <NuxtLink
          class="link link-hover"
          to="/products"
      >
        產品項目
      </NuxtLink>
      <NuxtLink
          class="link link-hover"
          to="/topic"
      >
        主題專欄
      </NuxtLink>
      <NuxtLink
          class="link link-hover"
          to="/FAQ"
      >
        常見問題
      </NuxtLink>
      <NuxtLink
          class="link link-hover"
          to="/contact"
      >
        關於我們
      </NuxtLink>
      <NuxtLink
          class="link link-hover"
          to="/services"
      >
        服務項目
      </NuxtLink>
    </nav>
    <aside class="">
      <h6 class="footer-title">
        聯絡方式
      </h6>
      <div class="flex pt-2 base-content">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 384 512"
            class="fill-current"
        >
          <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>
        <p class="pl-2">
          700 臺南市中西區中華西路二段596-2號
        </p>
      </div>
      <div class="flex base-content">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            class="fill-current"
        >
          <path
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          />
        </svg>
        <p class="pl-2">
          062953300
        </p>
      </div>
      <h6 class="footer-title pt-2">
        營業時間
      </h6>
      <div class="flex base-content">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="20"
            height="20"
            class="fill-current"
        >
          <path
              d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
          />
        </svg>
        <p class="pl-2">
          平日 08:30 – 17:00
        </p>
      </div>
    </aside>
    <aside class="">
      <h6 class="footer-title klee-one">
        作品集
      </h6>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
            v-for="(product, index) in randomProducts"
            :key="index"
            class="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            @click="goToProduct(product.id)"
        >
          <img
              :src="product.image"
              loading="lazy"
              alt="Pet image"
              class="w-full h-16 object-cover"
          >
        </div>
      </div>
    </aside>
    <div/>
    <div/>
  </footer>
</template>

<script setup>

const randomProducts = ref([]);

async function fetchRandomProducts() {
  try {
    const data = await useApiFetch('/ProductItems?PageNumber=1&PageSize=12');
    if (data) {
      randomProducts.value = data.items.sort(() => 0.5 - Math.random()).slice(0, 6);
    }
  } catch (error) {
    console.error('Unable to fetch product data', error);
  }
}

function goToProduct(id) {
  navigateTo(`/products/${id}`);
}

onMounted(() => {
  fetchRandomProducts();
});
</script>
