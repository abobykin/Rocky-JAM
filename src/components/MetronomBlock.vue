<template>
  <div class="column">
    <!-- this looks like a mixture of two vue apis -->
    <q-btn class="btn-small" @click="emit('metronom-started')">START</q-btn>
    <q-btn class="btn-small" @click="emit('metronom-stopped')">STOP</q-btn>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["metronom-started", "metronom-stopped"]);
</script>
