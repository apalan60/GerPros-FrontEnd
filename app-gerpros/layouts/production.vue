<template>
  <div class="drawer lg:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center">
      <slot name="content"></slot>
    </div>
    <div class="drawer-side">
      <label
        for="drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li>
          <h2 class="menu-title">精選品牌</h2>
          <ul v-for="brand in brandsList" :key="brand.name">
            <li>
              <a>{{ brand.name }}</a>
            </li>
            <ul>
              <li v-for="s in brand.series" :key="s">
                <a>{{ s }}</a>
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { TEST_BRANDS_LIST } from '@/constants';

const brandsList = ref(TEST_BRANDS_LIST.brands);
</script>

<style scoped></style>
