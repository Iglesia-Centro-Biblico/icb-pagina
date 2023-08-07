<script setup lang="ts">
import Navigation from '@/components/navigation/Navigation.vue';
</script>

<template>
  <header>
    <Navigation/>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
main {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
