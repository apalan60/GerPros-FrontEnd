<template class="relative">
  <div class="navbar bg-base-100 fixed">
    <div class="navbar-start">
      <div class="dropdown lg:hidden">
        <label
          tabindex="0"
          role="button"
          class="btn btn-circle swap swap-rotate"
        >
          <input v-model="isOpen" type="checkbox" />
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
          <li v-for="link in links" :key="link.name">
            <nuxt-link :to="link.to">{{ link.label }}</nuxt-link>
          </li>
        </ul>
      </div>
      <logoIcon />
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="link in links" :key="link.name">
          <nuxt-link :to="link.to" class="hover:text-accent">{{
            link.label
          }}</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <ThemeToggle />
      </button>
      <button class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const links = [
  { label: '產品項目', to: '/products' },
  // {
  //   label: '產品細項 1(test)',
  //   to: '/products/1',
  // },
  { label: '主題專欄', to: '/topic' },
  { label: '聯絡方式', to: '/contact' },
  { label: '常見問題', to: '/FAQ' },
  { label: '關於我們', to: '/aboutUs' },
  { label: '服務項目', to: '/services' },
];
</script>

<style scoped>
.navbar {
  z-index: 1000;
}
</style>
