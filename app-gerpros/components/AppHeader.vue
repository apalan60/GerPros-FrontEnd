<template>
  <div class="relative h-24">
    <div class="navbar bg-base-100 h-24 fixed">
      <div class="navbar-start">
        <div class="dropdown lg:hidden">
          <label
              tabindex="0"
              role="button"
              class="btn btn-circle swap swap-rotate"
          >
            <input
                v-model="isOpen"
                type="checkbox"
            >
            <svg
                class="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
            >
              <path
                  d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
              />
            </svg>
            <svg
                class="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
            >
              <polygon
                  points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
              />
            </svg>
          </label>
          <ul
              v-if="isOpen"
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
          >
            <li
                v-for="link in links"
                :key="link.name"
            >
              <nuxt-link :to="link.to">
                {{ link.label }}
              </nuxt-link>
              <ul v-if="link.to === '/products'">
                <li>
                  <nuxt-link to="/products">
                    所有產品
                  </nuxt-link>
                </li>
                <li
                  v-for="brand in brandsList"
                  :key="brand.name"
                >
                  <a @click.prevent="toggleBrand(brand.name)">
                    {{ brand.name }}
                  </a>
                  <ul v-if="expandedBrands[brand.name]">
                    <li
                      v-for="s in brand.series"
                      :key="s.name"
                    >
                      <a @click="goTo({ brand: brand.name, series: s.name })">
                        {{ s.name }}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <IconLogo/>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 brand-series-container">
          <li
              v-for="link in links"
              :key="link.name"
              class="dropdown dropdown-hover"
          >
            <nuxt-link
                :to="link.to"
                class="hover:text-accent hover:bg-transparent active:text-accent active:bg-transparent focus:text-accent focus:bg-transparent relative"
                :tabindex="link.to === '/products' ? 0 : -1"
            >{{ link.label }}
            </nuxt-link>
            <ul
                v-if="link.to === '/products'"
                tabindex="0"
                class="dropdown-content bg-base-100 rounded-box shadow w-52"
            >
              <li>
                <nuxt-link to="/products"
                           class="hover:bg-transparent hover:text-accent focus:text-accent focus:bg-transparent">
                  所有產品 
                </nuxt-link>
              </li>
              <li
                  v-for="brand in brandsList"
                  :key="brand.name"
              >
                <a class="hover:bg-transparent hover:text-accent focus:text-accent focus:bg-transparent"
                   @click="goTo({ brand: brand.name })">{{ brand.name }}</a>
                <ul>
                  <li
                      v-for="s in brand.series"
                      :key="s.name"
                  >
                    <a class="hover:bg-transparent hover:text-accent focus:text-accent focus:bg-transparent"
                       @click="goTo({ brand: brand.name, series: s.name })">
                      {{ s.name }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <ThemeToggle/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {TEST_BRANDS_LIST} from '@/constants';

const isOpen = ref(false);

const links = [
  {label: '產品項目', to: '/products'},
  {label: '主題專欄', to: '/topic'},
  {label: '聯絡方式', to: '/contact'},
  {label: '常見問題', to: '/FAQ'},
  {label: '關於我們', to: '/aboutUs'},
  {label: '管理頁面', to: '/manager'},
];

// brand
const brandsList = ref([]);

const expandedBrands = ref({});

// 手機版 展開/收合品牌系列
function toggleBrand(brand) {
  expandedBrands.value[brand] = !expandedBrands.value[brand];
}

async function fetchData() {
  try {
    const data = await useApiFetch('/Brands');
    if (data) {
      brandsList.value = data;
    }
  } catch (error) {
    brandsList.value = TEST_BRANDS_LIST.brands;
    console.error('無法獲取品牌資料', error);
  }
}

onMounted(() => {
  fetchData(); // Ensure the hook is registered synchronously
});

async function goTo({pageNumber = 1, brand, series} = {}) {
  await navigateTo({
    path: '/products',
    query: {
      PageNumber: pageNumber,
      Brand: brand,
      Series: series,
    },
  });
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
}

.brand-series-container li > ul {
  display: none;
}

.brand-series-container li:hover > ul {
  display: block;
}
</style>
