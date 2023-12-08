<script setup lang="ts">
const emit = defineEmits(['confirmChange'])
</script>

<template>
  <q-card class="bg-grey-1 add-chord-card" flat>
    <q-card-section class="column">
      <div class="text-h5 text-weight-medium text-grey-10">
        Key Change Confirmation
      </div>
      <span class="text-grey-7">
        Changing the key will replace the entire chord progression. Are you sure
        you want to proceed?</span
      >
    </q-card-section>
    <div>
      <q-btn
        unelevated
        no-caps
        class="btn-extra-large pink-bg text-grey-1 flat q-mb-sm"
        label="Apply Changes"
        type="submit"
        @click="emit('confirmChange')"
      />
      <q-btn
        v-close-popup
        unelevated
        no-caps
        class="btn-extra-large text-grey-10 flat"
        label="Cancel"
      />
    </div>
  </q-card>
</template>

<style lang="scss" scoped>
.add-chord-card {
  width: 372px;
  padding: 18px 16px 8px 16px;
  border-radius: 16px;
}
</style>
