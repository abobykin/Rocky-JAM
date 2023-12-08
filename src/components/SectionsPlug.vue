<template>
  <div class="plug-container">
    <div class="column q-gutter-y-lg items-center justify-center">
      <div class="q-py-lg">
        <img src="../assets/group.svg" />
      </div>

      <div
        class="column text-caption text-grey-7 items-center justify-center plug-text"
      >
        <span class="text-weight-regular text-h8 q-mb-sm">NO SECTIONS YET</span>
        <span class="text-weight-light">
          Time to create a section and fill it with chords to kick off your
          musical journey!
        </span>
      </div>
      <q-btn
        unelevated
        no-caps
        class="btn-large pink-bg text-grey-1 flat"
        label="Add Section"
        @click="emit('openDialog', 'section', false)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["openDialog"]);
</script>

<style scoped>
.plug-container {
  width: 230px;
  height: 311px;
}
.plug-text {
  line-height: 100%;
}
</style>
