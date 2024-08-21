<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <header>
      <nav>
        <ul>
          <li v-for="(page, index) in pages" :key="index">
            <nuxt-link :key="page.label" :to="page.to">
              {{ page.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
const pages = [
  { label: '產品項目', to: '/products' },
  {
    label: '產品細項 1(test)',
    to: '/products/1',
  },
  { label: '主題專欄', to: '/topic' },
  { label: '聯絡方式', to: '/contact' },
  { label: '常見問題', to: '/FAQ' },
  { label: '關於我們', to: '/aboutUs' },
  { label: '服務項目', to: '/services' },
];
</script>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
