<template>
  <div class="row auth-page heebo">
    <div class="col-12 col-sm-5 first-col column flex items-center justify-center">
      <q-card flat class="first-col" style="min-width: 75%; max-width: 340px">
        <q-card-section>
          <img src="../assets/logo-black.svg" alt="Logo" />

          <h3 class="q-mt-sm">{{ t('plain.welcome') }}</h3>
        </q-card-section>
        <q-card-section>
          <q-form ref="form" class="q-gutter-md" @submit="submit">
            <q-input
              v-model="user.email"
              :label="t('inputs.email')"
              hide-bottom-space
              name="Email"
              required
              lazy-rules
              dense
              :rules="[(val: string, rules) => rules.email(val) || t('inputs.errors.invalid') ]"
            />
            <q-input
              v-model="user.password"
              :label="t('inputs.password')"
              name="password"
              type="password"
              hide-bottom-space
              required
              dense
              lazy-rules
              :rules="[(val: string) => val.length >= 5 || t('inputs.errors.longerThan') ]"
            />

            <q-input
              v-model="user.passwordRepeat"
              :label="t('inputs.repeatPassword')"
              name="password"
              type="password"
              hide-bottom-space
              required
              dense
              lazy-rules
              :rules="[
              (val: string) => val.length >= 5 || t('inputs.errors.longerThan'), 
              (val: string) => val === user.password || t('inputs.errors.samePassword')]"
            />

            <div class="q-mt-lg">
              <q-btn
                flat
                class="q-mt-sm full-width pink-filled-btn heebo text-weight-regular bordered"
                :label="t('buttons.signIn')"
                no-caps
                size="md"
                style="height: 40px"
                type="submit"
              />

              <div class="q-mt-sm text-center text-body3 text-grey-7 text-weight-light">
                {{ t('plain.haveAccount') }}
                <router-link class="text-grey-10 text-weight-medium decoration-none" to="/login">
                  {{ t('buttons.logIn') }}
                </router-link>
              </div>
              <div
                class="q-mt-xl text-center text-body3 text-grey-7 text-weight-light flex items-center justify-center"
              >
                <span class="q-mr-sm">{{ t('plain.offeredLang') }}:</span>
                <q-select
                  v-model="locale"
                  :options="localeOptions"
                  dense
                  borderless
                  emit-value
                  map-options
                  options-dense
                  class="text-grey-10 text-weight-medium text-body3-field"
                />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-0 col-sm-7 xs-hide second-col">
      <div class="row full-width q-px-xl q-pb-xl full-height flex flex-center bg-light-gray">
        <div class="ball">
          <img src="../assets/diving-ball.png" alt="ball" width="370px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import register from 'src/firebase/firebase-register'
import { useRouter } from 'vue-router'
import { QForm, useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
const router = useRouter()

const $q = useQuasar()

const user = reactive({
  email: '',
  password: '',
  passwordRepeat: '',
})

const { locale, t } = useI18n({ useScope: 'global' })

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'ru', label: 'Русский' },
  { value: 'kz', label: 'Қазақ' },
]

const form = ref<InstanceType<typeof QForm> | null>(null)

// check validation first then register
const submit = async () => {
  if (form.value) {
    const res = await form.value?.validate()
    if (res) {
      try {
        await register(user)
        await router.push('/app')
      } catch (error) {
        $q.notify({
          message: 'Something went wrong. Please try again',
          type: 'negative',
        })
      }
    }
  }
}
</script>
