// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['@/plugins/themeChange.client.js'],
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-08-22',
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
});
