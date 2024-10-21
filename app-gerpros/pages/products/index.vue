<script setup>
import { TEST_PRODUCTIONS } from '@/constants';

const productionsData = ref(Object.values(TEST_PRODUCTIONS));
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <div
        class="productions-wrapper grid grid-cols-1 md:grid-cols-3 gap-10 p-10 mx-16"
      >
        <div
          v-for="prod in productionsData"
          :key="prod.id"
          class="card w-100 h-100 shadow-xl"
        >
          <figure class="cursor-pointer">
            <img :src="prod.image" :alt="prod.title" />
          </figure>
          <div class="card-body">
            <h2 class="card-title cursor-pointer">
              {{ prod.title }}
              <div v-if="prod.isNew" class="badge badge-secondary">NEW</div>
            </h2>
            <p>{{ prod.description }}</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline cursor-pointer">
                {{ prod.tags[0] }}
              </div>
              <div class="badge badge-outline cursor-pointer">
                {{ prod.tags[1] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <label for="drawer" class="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div class="drawer-side">
      <label
        for="drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li><a>熱門商品</a></li>
        <li>
          <h2 class="menu-title">精選項目</h2>
          <ul>
            <li><a>磁磚</a></li>
            <li><a>壁布</a></li>
            <li><a>地板</a></li>
          </ul>
          <h2 class="menu-title">精選品牌</h2>
          <ul>
            <li><a>Cersanit</a></li>
            <li><a>Art Floor</a></li>
            <li><a>Arteo</a></li>
            <li><a>Philipp Plein</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
