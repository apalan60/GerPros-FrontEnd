import { useState } from '#app';

export const useAuthStore = () => {
  const accessToken = useState<string>('accessToken', () => '');
  const refreshToken = useState<string>('refreshToken', () => '');
  const expiresIn = useState<number>('expiresIn', () => 0);
  const tokenType = useState<string>('tokenType', () => 'Bearer');
  const lastRefreshTime = useState<number>('lastRefreshTime', () => 0);

  const setTokens = (payload: {
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }) => {
    accessToken.value = payload.accessToken;
    refreshToken.value = payload.refreshToken;
    expiresIn.value = payload.expiresIn;
    tokenType.value = payload.tokenType;
    lastRefreshTime.value = Date.now(); // 紀錄最後刷新時間
  };

  const clearTokens = () => {
    accessToken.value = '';
    refreshToken.value = '';
    expiresIn.value = 0;
    tokenType.value = 'Bearer';
    lastRefreshTime.value = 0;
  };

  const isLoggedIn = computed(() => !!accessToken.value);

  // 判斷是否需要 refresh token (例如在 token 有效期剩餘 30 秒內)
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
