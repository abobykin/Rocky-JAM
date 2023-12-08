<template>
  <div class="row auth-page heebo">
    <div class="col-12 col-sm-5 first-col column flex items-center justify-center">
      <q-card flat class="first-col" style="min-width: 75%; max-width: 340px">
        <q-card-section>
          <img src="../assets/logo-black.svg" alt="Logo" width="60" />

          <div class="">
            <h3 class="q-mb-none">{{ t('plain.welcomeBack') }}</h3>
          </div>
        </q-card-section>

        <q-card-section>
          <q-form ref="form" class="q-gutter-md" @submit="submit">
            <q-input
              dense
              v-model="user.email"
              :label="t('inputs.email')"
              name="Email"
              hide-bottom-space
              required
              :rules="[(val: string, rules) => rules.email(val) || t('inputs.errors.invalid') ]"
            />

            <q-input
              dense
              v-model="user.password"
              :label="t('inputs.password')"
              name="password"
              hide-bottom-space
              type="password"
              required
              :rules="[(val: string) => val.length >= 5 || t('inputs.errors.longerThan') ]"
            />

            <div class="q-mt-lg">
              <q-btn
                flat
                class="q-mt-sm full-width pink-filled-btn heebo text-weight-regular bordered"
                :label="t('buttons.logIn')"
                no-caps
                size="md"
                style="height: 40px"
                type="submit"
              />
            </div>
          </q-form>
          <div class="q-mt-sm text-center text-body3 text-grey-7 text-weight-light">
            {{ t('plain.noAccount') }}
            <router-link class="text-grey-10 text-weight-medium decoration-none" to="/register">
              {{ t('buttons.signIn') }}
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
        </q-card-section>
      </q-card>
    </div>

    <div class="col-0 col-sm-7 rounded-left-borders xs-hide second-col">
      <div class="row full-width q-px-xl q-pb-xl full-height flex flex-center">
        <div class="ball">
          <img src="../assets/diving-ball.png" alt="ball" width="370px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import login from 'src/firebase/firebase-login'
import { useRouter } from 'vue-router'
import { UserData } from 'src/types/userData'
import { QForm, useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
const router = useRouter()

const user: UserData = reactive({
  email: '',
  password: '',
})
const $q = useQuasar()
const { locale, t } = useI18n({ useScope: 'global' })

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'ru', label: 'Русский' },
  { value: 'kz', label: 'Қазақ' },
]

watch(locale, async () => {})

const form = ref<InstanceType<typeof QForm> | null>(null)

// to ADD VALIDATION
const submit = async () => {
  const validation = await form.value?.validate()
  if (validation) {
    try {
      await login(user)
      await router.push('/app')
    } catch (err) {
      console.log(err)
      $q.notify({
        message: 'Something went wrong. Please try again',
        type: 'negative',
      })
    }
  }
}
</script>
