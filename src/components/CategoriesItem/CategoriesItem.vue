<template>
  <div class="badge rounded-pill m-1 fs-6 booking-app-categories-items">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style>
.booking-app-categories-items {
  cursor: pointer;
}
</style>
