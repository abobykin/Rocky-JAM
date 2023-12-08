<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
import { chordsList, numerator, denominator } from "../constants";
import { Fraction } from "../types/shemas";

const name = ref("");

const fraction: Fraction = reactive({
  n: 0,
  d: 0,
});

const props = defineProps({
  isEditingMode: Boolean,
});

function onSubmit() {}
</script>

<template>
  <q-card class="bg-grey-1 chord-card" flat>
    <q-form @submit.prevent="onSubmit">
      <q-card-section class="column q-gutter-y-md">
        <div>
          <div class="text-h5 text-weight-medium text-grey-10">
            {{ props.isEditingMode ? "Edit chord" : "Add chord" }}
          </div>
          <!-- to add variables (chord, size) -->
          <span v-if="props.isEditingMode">
            Your current chord is G7, size is 3/8
          </span>
        </div>
        <q-select
          popup-content-class="popup-content"
          class="text-grey-10"
          dense
          v-model="name"
          :options="chordsList"
          label="Select chord"
        />
        <div class="column q-mb-sm">
          <span class="text-grey-7">Duration</span>
          <div class="row q-gutter-x-md">
            <q-select
              menu-anchor="bottom start"
              popup-content-class="popup-content"
              class="col text-grey-10"
              dense
              :options="numerator"
              v-model="fraction.n"
            />
            <img src="../assets/line.svg" />
            <q-select
              popup-content-class="popup-content"
              class="col text-grey-10"
              dense
              :options="denominator"
              v-model="fraction.d"
            />
          </div>
        </div>
      </q-card-section>
      <div>
        <q-btn
          unelevated
          no-caps
          class="btn-extra-large pink-bg text-grey-1 flat q-mb-sm"
          :label="props.isEditingMode ? 'Apply' : 'Add chord'"
          type="submit"
        />
        <q-btn
          v-close-popup
          unelevated
          no-caps
          class="btn-extra-large text-grey-10 flat"
          label="Cancel"
        />
      </div>
    </q-form>
  </q-card>
</template>

<style lang="scss" scoped>
.chord-card {
  width: 372px;
  padding: 18px 16px 8px 16px;
  border-radius: 16px;
}
</style>
