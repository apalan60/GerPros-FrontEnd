// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  compatibilityDate: '2024-08-22',
  eslint: {
    checker: true,
  },
});
