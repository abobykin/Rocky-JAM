<template>
  <q-form @submit.prevent="onSubmit">
    <q-select
      popup-content-class="popup-content q-pt-xs heebo text-grey-7"
      class="text-grey-10"
      dense
      v-model="key"
      :options="keysList"
      :rules="[(val) => val.length > 0 || 'Please make sure to select a key before proceeding.']"
      label="Select key"
    />
    <div class="column q-mb-sm">
      <span class="text-grey-7">Signature</span>
      <div class="row q-gutter-x-md">
        <q-select
          popup-content-class="popup-content q-pt-xs heebo text-grey-7"
          class="col text-grey-10"
          dense
          :options="numerator"
          v-model="timeSignature.n"
          :rules="[(val) => val || 'Please make sure to select a signature before proceeding.']"
        />
        <div class="line"></div>
        <q-select
          popup-content-class="popup-content q-pt-xs heebo text-grey-7"
          class="col text-grey-10"
          dense
          :options="denominator"
          v-model="timeSignature.d"
          :rules="[(val) => val || 'Please make sure to select a signature before proceeding.']"
        />
      </div>
    </div>
    <div class="column">
      <span class="text-grey-7">Repeat</span>
      <q-select
        popup-content-class="popup-content q-pt-xs heebo text-grey-7"
        class="col text-grey-10"
        dense
        :options="repeatsList"
        v-model="repeats"
        label="No repeat"
      />
    </div>
    <div class="q-mt-md">
      <q-btn
        unelevated
        no-caps
        class="btn-extra-large pink-bg text-grey-1 flat q-mb-sm"
        :label="props.isEditingMode ? 'Apply' : 'Add section'"
        @click="isConfrimationShow = true"
      />
      <q-btn
        @click="emit('close')"
        unelevated
        no-caps
        class="btn-extra-large text-grey-10 flat"
        label="Cancel"
      />
    </div>
    <q-dialog v-model="isConfrimationShow">
      <key-change-dialog @confirmChange="onSubmit"></key-change-dialog>
    </q-dialog>
  </q-form>
</template>

<script setup lang="ts">
import KeyChangeDialog from 'src/components/KeyChangeDialog.vue'
import { keysList, numerator, denominator, repeatsList } from '../constants'
import { ref, reactive } from 'vue'

const props = defineProps({
  isEditingMode: Boolean,
})
const emit = defineEmits(['close'])
const isConfrimationShow = ref(false)
const key = ref('')
const timeSignature = reactive({
  n: null,
  d: null,
})

const repeats = ref(null)

function onSubmit() {
  isConfrimationShow.value = true
}
</script>

<style lang="scss">
.add-chord-card {
  width: 372px;
  padding: 18px 16px 8px 16px;
  border-radius: 16px;
}

.line {
  width: 1px;
  height: 37px;
  background-color: $grey-7;
  transform: translateY(12px) rotate(6deg);
}
.popup-content {
  max-height: 250px !important;
}
</style>
