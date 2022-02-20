<template>
  <div class="col-12 my-2 d-flex list-group-item booking-app-cart-item">
    <div class="col-3">
      <img class="img-fluid img-thumbnail" :src="imgsrc" alt="item-image" />
    </div>
    <div class="col-8 px-2">
      <p>
        <strong> <slot name="title"></slot></strong>
      </p>
      <p>
        <small><slot name="description"></slot></small>
      </p>
    </div>
    <div class="col-1 d-flex align-items-center justify-content-end">
      <slot name="button"></slot>
    </div>
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

<style></style>
