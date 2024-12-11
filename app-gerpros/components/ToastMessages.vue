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
