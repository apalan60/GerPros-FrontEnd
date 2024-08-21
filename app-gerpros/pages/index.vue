<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6" />
    </template>
    <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800 justify-center"
    />
    <UCommandPalette :empty-state="null" />
    <ColorScheme
      ><USelect
        v-model="$colorMode.preference"
        :options="['system', 'light', 'dark']"
    /></ColorScheme>
  </UHeader>
</template>

<script setup>
const links = [
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
