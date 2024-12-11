<template>
  <div>PRODUCT-NEW/EDIT</div>
<DeleteProductButton  product-item-id="123"/>
  <!--  <DeleteProductButton :productItemId="product.id" />-->
</template>

<script setup>
import DeleteProductButton from "~/components/product/DeleteProductButton.vue";

definePageMeta({
  layout: 'manager',
});
</script>

<style scoped></style>
