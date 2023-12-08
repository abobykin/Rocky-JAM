<script setup></script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header class="row q-px-xl bg-grey-1 header">
      <q-toolbar class="q-px-none">
        <q-avatar size="32px"
          ><img src="../assets/logo-black.svg" alt="rocky jam logo" />
        </q-avatar>
        <q-toolbar-title class="museo text-grey-10 text-weight-medium text-h5">
          Rocky Jam
        </q-toolbar-title>
        <q-btn flat color="primary" @click="logout">{{ t('buttons.logout') }}</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer"> </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import signout from 'src/firebase/firebase-signout'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const logout = async () => {
  try {
    await signout()
    await router.push('/login')
  } catch (error) {
    console.error('Logout Error', error)
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  border-bottom: 1px solid #f5f5f5;
}
.editor-title {
  line-height: 24px; /* 100% */
}

.footer {
  border-top: 1px solid $grey-4;
  background-color: transparent;
  color: black;
  height: 80px;
}
</style>
