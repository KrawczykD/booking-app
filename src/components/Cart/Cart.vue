<template>
  <div class="col-12 my-2 list-group list-group-flush booking-app-cart">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style>
.booking-app-cart {
  max-height: 45vh;
  overflow-y: auto;
}

.booking-app-cart::-webkit-scrollbar {
  display: none;
}
</style>
