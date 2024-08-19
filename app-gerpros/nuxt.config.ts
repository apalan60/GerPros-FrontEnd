// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error for vuetify import
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxt/eslint',
  ],
  eslint: {
    checker: true,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
