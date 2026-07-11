<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  
  <main class="main-content">
    <RouterView />
  </main>
  
  <Footer />
</template>

<style>
.main-content {
  flex-grow: 1;
  width: 100%;
}
</style>
