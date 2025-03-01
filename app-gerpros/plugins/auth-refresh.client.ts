// ~/plugins/auth-refresh.client.ts
import { useAuthStore } from '~/stores/auth';
import { refreshTokens } from '~/composables/useApiFetch'; // 或者放在 store actions

/**
 * Nuxt plugin to periodically check and refresh authentication tokens.
 */
export default defineNuxtPlugin(() => {
  const auth = useAuthStore();

  const intervalTime = 180 * 1000; // 180 秒
  setInterval(async () => {
    console.log('----checking tokens----');
    console.log("login status:" +  auth.isLoggedIn.value, "/" +  "should refresh: " + auth.shouldRefresh.value);
    if (auth.isLoggedIn.value && auth.shouldRefresh.value) {
      console.log('refreshing tokens in progress');
      await refreshTokens();
      console.log('----tokens refreshed----');
    }
  }, intervalTime);
});
