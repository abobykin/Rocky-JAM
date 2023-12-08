<template>
  <ModalWithActions
    :is-open="props.isOpen"
    header="Add section"
    description="Remember, you can tweak these settings later in the section menu."
    @close="emit('close')"
  >
    <SectionForm @close="emit('close')" />
  </ModalWithActions>
</template>

<script setup lang="ts">
import SectionForm from '../SectionForm.vue'
import ModalWithActions from './ModalWithActions.vue'

const props = defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(['close'])
</script>
