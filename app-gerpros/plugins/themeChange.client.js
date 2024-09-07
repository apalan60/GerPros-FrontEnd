import { themeChange } from 'theme-change';

export default defineNuxtPlugin(() => {
  onMounted(() => {
    themeChange(false)
  })
});
