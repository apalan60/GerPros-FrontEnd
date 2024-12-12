<template>
  <div class="toast toast-top toast-end" v-if="toastMessage">
    <div
        :class="[
        'alert',
        toastType === 'success' ? 'alert-success' : 'alert-error'
      ]"
    >
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast';

const { toastMessage, toastType } = useToast();
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 9999;
  top: 1rem;
  right: 1rem;
}
</style>