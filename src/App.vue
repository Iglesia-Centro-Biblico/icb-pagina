<template>
  <header id="app-header">
    <ICBNavigation ref="nav" @expanded="(isOpen) => navExpanded = isOpen"/>
  </header>
  <main 
    id="app-content" 
    :class="{ 'menu-expended': navExpanded }"
    @click.prevent="closeNav"
  >
    <RouterView />
  </main>
  <ICBFooter />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import ICBNavigation from './components/navigation/Navigation.vue';
import ICBFooter from './components/footer/Footer.vue';

const navExpanded: Ref<boolean> = ref(false);
const nav = ref<InstanceType<typeof ICBNavigation>>();

const closeNav = () => {
  if (navExpanded.value) nav.value?.toggle();
};
</script>

<style scoped lang="scss">
#app-content {
  transition: all 0.3s ease-in-out;
  &.menu-expended {
    transform: translateX(-285px) !important;
    overflow-y: hidden;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,0.2);
      z-index: 5;
    }
    @include q-large {
      transform: translateX(0) !important;
      &:after {
        display: none;
      }
    }
  }
}
</style>
