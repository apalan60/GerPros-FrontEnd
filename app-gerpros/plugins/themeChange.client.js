import { themeChange } from 'theme-change';

export default defineNuxtPlugin(() => {
  document.documentElement.setAttribute('data-theme', 'autumn');
  themeChange(false);
});
