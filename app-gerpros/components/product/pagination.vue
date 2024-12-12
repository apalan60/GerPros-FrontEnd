<template>
  <div>
    <div class="join">
      <button
        v-for="i in props.totalPages"
        :key="i"
        class="join-item btn-sm"
        :class="{ 'btn-active': i === pageNumber }"
        @click="onClickNumber(i)"
      >
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const emit = defineEmits(['go-to-page']);
const props = defineProps({
  totalPages: {
    type: Number,
    default: 1,
  },
});

const pageNumber = computed(() => Number(route.query.PageNumber) || 1);

function onClickNumber(number) {
  emit('go-to-page', number);
}
</script>

<style scoped></style>
