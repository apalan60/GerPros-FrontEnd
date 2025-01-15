// ~/plugins/auth-refresh.client.ts
import { useAuthStore } from '~/stores/auth';
import { refreshTokens } from '~/composables/useApiFetch'; // 或者放在 store actions

export default defineNuxtPlugin(() => {
  const auth = useAuthStore();

  // 例如每 30 秒檢查一次是否需要刷新
  const intervalTime = 180 * 1000; // 180 秒
  setInterval(async () => {
    if (auth.isLoggedIn && auth.shouldRefresh) {
      await refreshTokens();
    }
  }, intervalTime);
});
