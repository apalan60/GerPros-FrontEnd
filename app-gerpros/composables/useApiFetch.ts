import { useAuthStore } from '~/stores/auth';

async function refreshTokens() {
  const auth = useAuthStore();
  const config = useRuntimeConfig();

  try {
    const { data, error } = await $fetch('/Users/Refresh', {
      baseURL: config.public.apiBase,
      method: 'POST',
      headers: {
        Authorization: `${auth.tokenType.value} ${auth.accessToken.value}`,
        'Content-Type': 'application/json'
      },
      body: { refreshToken: auth.refreshToken.value }
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

export async function useApiFetch<T>(url: string, options: any = {}) {
  const auth = useAuthStore();
  const config = useRuntimeConfig();

  if (auth.isLoggedIn.value && auth.shouldRefresh.value) {
    await refreshTokens();
  }

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
