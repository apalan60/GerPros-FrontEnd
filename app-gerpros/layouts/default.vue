<template>
  <div>
    <UHeader :links="links" class="justify-between items-center border-b border-gray-200 dark:border-gray-800 grid">
      <ULink 
      to="/"
      active-class="text-sky-700"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      class="col-start-3">
      GerPros
      </ULink>
  <UHorizontalNavigation :links="links" class="col-start-4 col-end-4" />
  <UCommandPalette :empty-state="null" :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }" class="col-end-7 col-span-2" />
</UHeader >
  <div class="container h-4/5">
    <slot />
  </div>
    
  </div>

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
