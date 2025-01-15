import { ref } from 'vue';

//使用說明
//1. 在需要使用的地方引入 useToast
//2. 使用 useToast() 取得 toastMessage, toastType, showToast
//3. 使用 showToast(type, message, duration) 來顯示 Toast
//4. template要新增 <ToastMessage /> 
// import ToastMessage from '~/components/ToastMessages.vue';


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
