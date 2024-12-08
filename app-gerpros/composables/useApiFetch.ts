import { useAuthStore } from '~/stores/auth';

export async function useApiFetch<T>(url: string, options: any = {}) {
  const auth = useAuthStore();
  const config = useRuntimeConfig();

  // 檢查 token 是否需要刷新
  if (auth.isLoggedIn.value && auth.shouldRefresh.value) {
    try {
      console.log()
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

  // 加入 Authorization Header
  if (auth.isLoggedIn.value) {
    options.headers = {
      ...(options.headers || {}),
      Authorization: `${auth.tokenType.value} ${auth.accessToken.value}`,
    };
  }

  return useFetch<T>(url, {
    baseURL: config.public.apiBase,
    ...options,
  });
}
