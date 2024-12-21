// todo 改成從cookie取
import { defineNuxtPlugin } from '#app';
import { useAuthStore } from '~/stores/auth';

export default defineNuxtPlugin((nuxtApp) => {
  const auth = useAuthStore();

  // 只在瀏覽器端可使用 localStorage，因此使用 process.client 判斷
  if (import.meta.client) {
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');
    const storedExpiresIn = localStorage.getItem('expiresIn');
    const storedTokenType = localStorage.getItem('tokenType');
    const storedLastRefreshTime = localStorage.getItem('lastRefreshTime');

    if (
      storedAccessToken
      && storedRefreshToken
      && storedExpiresIn
      && storedTokenType
      && storedLastRefreshTime
    ) {
      auth.accessToken.value = storedAccessToken;
      auth.refreshToken.value = storedRefreshToken;
      auth.expiresIn.value = parseInt(storedExpiresIn);
      auth.tokenType.value = storedTokenType;
      auth.lastRefreshTime.value = parseInt(storedLastRefreshTime);
    }
  }
});
