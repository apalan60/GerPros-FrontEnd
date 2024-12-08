import { useState } from '#app';

export const useAuthStore = () => {
  const accessToken = useState<string>('accessToken', () => '');
  const refreshToken = useState<string>('refreshToken', () => '');
  const expiresIn = useState<number>('expiresIn', () => 0);
  const tokenType = useState<string>('tokenType', () => 'Bearer');
  const lastRefreshTime = useState<number>('lastRefreshTime', () => 0);

  const setTokens = (payload: {
    tokenType: string
    accessToken: string
    refreshToken: string
    expiresIn: number
  }) => {
    accessToken.value = payload.accessToken;
    refreshToken.value = payload.refreshToken;
    expiresIn.value = payload.expiresIn;
    tokenType.value = payload.tokenType;
    lastRefreshTime.value = Date.now();

    // 寫入 localStorage
    if (import.meta.client) {
      localStorage.setItem('accessToken', payload.accessToken);
      localStorage.setItem('refreshToken', payload.refreshToken);
      localStorage.setItem('expiresIn', payload.expiresIn.toString());
      localStorage.setItem('tokenType', payload.tokenType);
      localStorage.setItem('lastRefreshTime', Date.now().toString());
    }
  };

  const clearTokens = () => {
    accessToken.value = '';
    refreshToken.value = '';
    expiresIn.value = 0;
    tokenType.value = 'Bearer';
    lastRefreshTime.value = 0;

    // 清除 localStorage
    if (import.meta.client) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('tokenType');
      localStorage.removeItem('lastRefreshTime');
    }
  };

  const isLoggedIn = computed(() => !!accessToken.value);
  const shouldRefresh = computed(() => {
    const currentTime = Date.now();
    const passedSeconds = (currentTime - lastRefreshTime.value) / 1000;
    return passedSeconds > expiresIn.value - 30;
  });

  return {
    accessToken,
    refreshToken,
    expiresIn,
    tokenType,
    lastRefreshTime,
    setTokens,
    clearTokens,
    isLoggedIn,
    shouldRefresh,
  };
};
