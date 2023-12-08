<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="pt-0-important bg-auth">
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.q-page {
  height: 100vh;

  & > div {
    height: 100%;
  }
}

.bg-auth {
  background-color: #f0f4f3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
