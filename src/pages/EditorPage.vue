<script setup lang="ts">
import SectionCard from 'src/components/SectionCard.vue'
import SectionsPlug from 'src/components/SectionsPlug.vue'
import ChordForm from 'src/components/ChordForm.vue'
import SectionForm from 'src/components/SectionForm.vue'
import { ref, onMounted } from 'vue'
import { getCompositionById } from 'src/api/requestsApi'
import { Composition } from 'src/types/shemas'
// import { useRouter } from "vue-router";

onMounted(async () => {
  composition.value = (await getCompositionById('vEmBLwFJ6ejcgpn0y2AO')) as Composition
  console.log(composition.value)
})

// const route = useRouter();
// const compositionId = ref<string>(route.params.id);

const composition = ref<Composition>()
const compositionName = ref('')

const isChordFormShow = ref(false)
const isSectionFormShow = ref(false)

const isEditingMode = ref(false)

const isSectionsCreated = ref(true)

function handleClick(form: string, isEditing: boolean) {
  isEditingMode.value = isEditing
  if (form === 'chord') {
    isChordFormShow.value = true
  }
  if (form === 'section') {
    isSectionFormShow.value = true
  }
}
</script>

<template>
  <div>
    <div class="editor-wrapper">
      <div class="editor-input-container">
        <q-input v-model.trim="compositionName" label="Jam Name" />
      </div>
      <div v-if="!isSectionsCreated" class="column items-center">
        <sections-plug @open-dialog="handleClick"></sections-plug>
      </div>

      <div v-else class="q-pt-lg">
        <span class="q-mb-md row text-grey-10"> SECTIONS </span>
        <div class="row q-gutter-md">
          <div class="row">
            <section-card @openDialog="handleClick"></section-card>
          </div>
        </div>
      </div>

      <q-dialog v-model="isChordFormShow">
        <chord-form :isEditingMode="isEditingMode"></chord-form>
      </q-dialog>

      <q-dialog v-model="isSectionFormShow">
        <section-form :isEditingMode="isEditingMode"></section-form>
      </q-dialog>
    </div>

    <div class="editor-bottom-bar row justify-end fixed-bottom bg-grey-1">
      <q-btn
        v-if="isSectionsCreated"
        outline
        no-caps
        @click="handleClick('section', false)"
        class="btn-large q-mr-md pink-color"
        label="Add Section"
      />
      <q-btn
        :disable="!isSectionsCreated"
        no-caps
        flat
        class="btn-large pink-bg text-grey-1"
        label="Save & Play"
      />
    </div>
  </div>
</template>

<style scoped>
.editor-wrapper {
  padding: 24px 32px 0px 32px;
}
.editor-input-container {
  max-width: 372px;
  margin-bottom: 40px;
}
.editor-bottom-bar {
  padding: 22px 32px 22px 32px;
  height: 80px;
  border-top: 1px solid #e0e0e0;
}
</style>
