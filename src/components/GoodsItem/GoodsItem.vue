<template>
  <div class="col-4 booking-app-goods-item">
    <img class="img-fluid img-thumbnail" :src="imgsrc" alt="" />
    <p class="d-flex justify-content-center"><slot></slot></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: Number,
      default: 0
    },
    imgsrc: {
      type: String,
      default: ''
    }
  }
});
</script>

<style>
.booking-app-goods-item {
  cursor: pointer;
}
</style>
