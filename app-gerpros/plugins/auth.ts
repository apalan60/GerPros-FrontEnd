import { defineNuxtPlugin, useRequestEvent } from '#app';
import { useAuthStore } from '~/stores/auth';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:rendered', () => {
    // 此處只是示意，實務上可能需要更細緻的處理
  });

  // 在每次 useFetch 前都可透過 onRequest 進行攔截
  nuxtApp.hook('fetch:before', async (ctx) => {
    const auth = useAuthStore();
    if (auth.isLoggedIn.value && auth.shouldRefresh.value) {
      // refresh token
      try {
        const { data, error } = await useApiFetch('/Users/Refresh', {
          method: 'POST',
          headers: {
            Authorization: `${auth.tokenType.value} ${auth.accessToken.value}`,
            'Content-Type': 'application/json',
          },
        });
        if (error) {
          console.error(error);
          auth.clearTokens();
        } else if (data) {
          auth.setTokens(data as any);
        }
      } catch (e) {
        console.error('Refresh token error:', e);
        auth.clearTokens();
      }
    }
  });
});
