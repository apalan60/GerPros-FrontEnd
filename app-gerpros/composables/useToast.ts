import { ref } from 'vue';

const toastMessage = ref('');
const toastType = ref<'success' | 'error'>('success');

let timer: ReturnType<typeof setTimeout> | null = null;

export function useToast() {
  const showToast = (type: 'success' | 'error', message: string, duration = 2000) => {
    toastType.value = type;
    toastMessage.value = message;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      toastMessage.value = '';
    }, duration);
  };

  return {
    toastMessage,
    toastType,
    showToast,
  };
}
