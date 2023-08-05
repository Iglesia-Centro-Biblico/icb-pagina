<script setup lang="ts">
import Navigation from '@/components/navigation/Navigation.vue';
</script>

<template>
  <header>
    <div class="grid">
      <Navigation class="col-md-12"/>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
