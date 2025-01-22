<template>
  <Teleport to="body">
    <div
      v-if="props.visible"
      class="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]"
      @click.prevent="emit('close')"
    >
      <figure class="bg-white p-4 rounded-lg shadow-lg max-w-[85%]">
        <img
          :src="props.image"
          alt="image"
          class="w-auto h-auto object-contain"
        >
      </figure>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close']);
</script>

<style scoped></style>
