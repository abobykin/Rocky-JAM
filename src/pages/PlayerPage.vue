<template>
  <q-page class="q-px-xl heebo q-pt-md flex column full-height">
    <div class="col-auto">
      <h1 class="text-h4 text-weight-medium text-grey-10">{{ t('heading.createJam') }}</h1>
      <div class="q-mt-md q-pt-sm">
        <q-input
          dense
          v-model="name"
          :label="t('inputs.jamName')"
          name="Name"
          hide-bottom-space
          style="max-width: 372px"
        />
      </div>
    </div>
    <div class="col-grow flex items-center justify-center">
      <EmptySection v-if="sections.length === 0" @add-section="sectionModal = true" />
      <SectionsEditable :section="sections" v-else />
    </div>
    <AddSectionModal :is-open="sectionModal" @close="sectionModal = false" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import EmptySection from 'src/components/EmptySection.vue'
import SectionsEditable from 'src/components/SectionsEditable.vue'
import AddSectionModal from 'src/components/modals/AddSectionModal.vue'
const name = ref('')
const { t } = useI18n()
const sections = ref([])
const sectionModal = ref(false)
</script>
