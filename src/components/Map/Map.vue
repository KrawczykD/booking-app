<template>
  <div style="height: 50vh" id="map"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/runtime-core';
import L from 'leaflet';

export default defineComponent({
  setup() {
    onMounted(() => {
      var map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker([51.5, -0.09], { draggable: true }).addTo(map).bindPopup('Drag and Drop.').openPopup();
    });
  }
});
</script>
