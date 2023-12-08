<template>
  <q-dialog persistent :model-value="props.isOpen">
    <q-card class="bordered2 visible q-pa-md heebo" style="max-width: 372px">
      <q-btn
        flat
        round
        icon="img:/cross.svg"
        class="absolute close-btn"
        size="sm"
        @click="emit('close')"
      />
      <q-card-section class="column q-gutter-y-md q-pa-none">
        <div>
          <div class="text-h5 text-weight-medium text-grey-10">
            {{ props.header }}
          </div>
          <span class="text-grey-7"> {{ props.description }}</span>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-none q-mt-md">
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  header: String,
  description: String,
})
const emit = defineEmits(['close'])
</script>

<style lang="scss">
.close-btn {
  top: 0;
  right: 0;
  z-index: 99;
  transform: translate(50%, -50%);
  background-color: white;
}
</style>
