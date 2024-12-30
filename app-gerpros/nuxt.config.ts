// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['@/plugins/themeChange.client.js'],
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss'],
  build: {
    transpile: ['vue-countup-v3'],
  },
  compatibilityDate: '2024-08-22',
  runtimeConfig: {
    public: {
      apiBase: 'http://gerpros-alb-1638240279.ap-northeast-1.elb.amazonaws.com:8080/api',
    },
  },
});
