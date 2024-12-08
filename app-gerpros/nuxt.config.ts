// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['@/plugins/themeChange.client.js'],
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss'],
  build: {
    transpile: ['vue-countup-v3'],
  },
  compatibilityDate: '2024-08-22',
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api',
    },
  },
});
