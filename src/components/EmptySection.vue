<template>
  <div class="flex column items-center justify-center">
    <q-img src="/no-section.svg" width="112px" />
    <p class="text-body3 text-grey-7 q-mt-xl q-mb-xs text-uppercase">
      {{ t('plain.noSection') }}
    </p>
    <p class="text-body3 text-grey-7 q-mb-sm text-center">
      {{ t('plain.noSectionDescr') }}
    </p>
    <q-btn
      flat
      class="q-mt-md pink-filled-btn heebo text-weight-regular bordered"
      :label="t('buttons.addSection')"
      no-caps
      size="md"
      style="height: 40px; min-width: 160px"
      @click="emit('addSection')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const emit = defineEmits(['addSection'])
</script>
