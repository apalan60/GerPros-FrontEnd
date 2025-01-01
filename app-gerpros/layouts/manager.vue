<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" >
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-300 w-full">
        <div class="flex-none lg:hidden">
          <label
            for="my-drawer-3"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>

        <div class="mx-2 flex-1 px-2">
          <NuxtLink to="/manager/dashboard">
            <a>Manager Site</a>
          </NuxtLink>
        </div>
        <div class="hidden flex-none lg:block">
          <ul class="menu menu-horizontal">
            <li>
              <NuxtLink to="/manager/register"> 註冊 </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/manager/products"> 產品/品牌系列 </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/manager/topic"> 主題專欄 </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/manager/faq"> 常見問題 </NuxtLink>
          </li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <div class="container mx-auto">
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-3"
        aria-label="close sidebar"
        class="drawer-overlay"
      />
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li>
          <NuxtLink to="/manager/products"> Production </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/manager/topic"> Topic </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/manager/faq"> FAQ </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
