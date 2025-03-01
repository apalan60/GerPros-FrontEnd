import { useAuthStore } from '~/stores/auth';

export async function refreshTokens() {
  const auth = useAuthStore();
  const config = useRuntimeConfig();

  try {
    console.log('refreshing tokens');
    const data = await $fetch('/Users/Refresh', {
      baseURL: config.public.apiBase,
      method: 'POST',
      headers: {
        'Authorization': `${auth.tokenType.value} ${auth.accessToken.value}`,
        'Content-Type': 'application/json',
      },
      body: { refreshToken: auth.refreshToken.value },
    });
    auth.setTokens(data as any);
  }
  catch (e) {
    console.error('Refresh token error:', e);
    auth.clearTokens();
  }
}

export async function useApiFetch<T>(url: string, options: any = {}) {
  const auth = useAuthStore();
  const config = useRuntimeConfig();

  const attemptFetch = async () => {
    if (auth.isLoggedIn.value) {
      options.headers = {
        ...(options.headers || {}),
        Authorization: `${auth.tokenType.value} ${auth.accessToken.value}`,
      };
    }
    return $fetch<T>(url, {
      baseURL: config.public.apiBase,
      ...options,
    });
  };

  try {
    if (auth.isLoggedIn.value && auth.shouldRefresh.value) {
      await refreshTokens();
    }
    return await attemptFetch();
  }
  catch (e: any) {
    if (e.response?.status === 401) {
      try {
        await refreshTokens();
        return await attemptFetch();
      }
      catch (e2: any) {
        if (e2.response?.status === 401) {
          alert('您的登入狀態已過期，請重新登入。');
        }
        auth.clearTokens();
        navigateTo('/manager');
        throw e2;
      }
    }
    throw e;
  }
  
}
