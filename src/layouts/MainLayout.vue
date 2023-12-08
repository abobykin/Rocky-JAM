<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-btn flat @click="logout">Logout</q-btn>
      <router-link
        class="text-primary"
        style="text-decoration: none"
        to="app/edit/1"
      >
        To editor
      </router-link>

      <q-page class="flex flex-center">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import signout from "src/firebase/firebase-signout";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = async () => {
  try {
    await signout();
    await router.push("/login");
  } catch (error) {
    console.error("Произошла ошибка при выходе из системы:", error);
  }
};
</script>
