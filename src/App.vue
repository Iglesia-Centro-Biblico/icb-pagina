<template>
  <header id="app-header">
    <Navigation />
  </header>
  <main id="app-content">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import Navigation from './components/navigation/Navigation.vue';
</script>

<style scoped lang="scss">
#app-content {
  transition: all 0.3s ease-in-out;
  &.menu-open {
    transform: translateX(-285px) !important;
    @include q-large {
      transform: translateX(0) !important;
    }
  }
}
</style>
