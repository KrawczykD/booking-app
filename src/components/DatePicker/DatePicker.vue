<template>
  <div class="col-6 booking-app-date-picker">
    <label for="startDate"><slot></slot></label>
    <input id="startDate" class="form-control" type="date" :value="date" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    let date = ref('');

    onMounted(() => {
      date.value = new Date().toISOString().substr(0, 10);
      console.log(date.value);
    });

    return { date };
  }
});
</script>

<style></style>
