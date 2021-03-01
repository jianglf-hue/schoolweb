<template>
  <Header />
  <router-view />
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: blue;
}
</style>