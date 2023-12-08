<script setup lang="ts">
import { ref } from "vue";

const sectionName = ref("");
const isSectionEmpty = ref(false);

const emit = defineEmits(["openDialog"]);
</script>

<template>
  <q-card flat class="q-pa-md column card">
    <div>
      <q-input v-model="sectionName" label="Section Name" dense />
      <q-btn-dropdown
        class="absolute-top-right q-mt-md q-mr-sm"
        flat
        round
        dense
        menu-self="center left"
        dropdown-icon="more_vert"
        style="color: #b7b7b7"
      >
        <q-list dense class="text-grey-7">
          <q-item
            clickable
            v-close-popup
            @click="emit('openDialog', 'section', true)"
          >
            Settings
          </q-item>

          <q-item clickable v-close-popup> Copy </q-item>

          <q-item clickable v-close-popup> Paste </q-item>
          <q-item clickable v-close-popup> Delete </q-item>
        </q-list>
      </q-btn-dropdown>

      <div class="q-pt-sm row q-gutter-lg">
        <!-- to add refs -->
        <span class="row text-grey-7">
          Key:&nbsp;&nbsp;
          <span class="text-primary">C</span>
        </span>
        <span class="row text-grey-7">
          Signature:&nbsp;&nbsp;
          <span class="text-primary">4/4</span>
        </span>
        <span class="row text-grey-7">
          Repeat:&nbsp;&nbsp;
          <span class="text-primary">1</span>
        </span>
      </div>
    </div>

    <div class="q-mt-md">
      <div
        class="primary-lighten-bg q-pa-sm column"
        style="border-radius: 12px"
      >
        <div
          v-if="isSectionEmpty"
          class="column items-center text-caption text-grey-7"
        >
          <div class="text-weight-regular q-mt-sm">LETS GET STARTED</div>
          <div>It's time to add some chords and begin the journey!</div>
          <q-btn
            @click="emit('openDialog', 'chord', true)"
            round
            unelevated
            class="q-mt-sm pink-bg"
          >
            <img src="../assets/plus.svg" />
          </q-btn>
        </div>
        <div v-else class="row wrap q-gutter-md q-py-sm">
          <div
            class="chord bg-grey-1 text-weight-medium"
            v-for="(chord, index) in 10"
            :key="index"
          >
            Em 6/4
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<style lang="scss" scoped>
.card {
  width: 372px;
  height: auto;
  border: 2px solid $primary-lighten;
  border-radius: 16px;
}

.chord {
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 18px;
}
</style>
