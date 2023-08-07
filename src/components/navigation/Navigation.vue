<script setup lang="ts">
  import { ref } from 'vue';
  
  let isOpen: boolean = ref(false);
  const pages: string[] = ref([
    { name: 'Inicio', query: { path: '/' } },
    { name: 'Visítanos', query: { hash: 'visitanos' } },
    { name: 'Nosotros', query: { hash: 'nosotros' } },
    { name: 'Contacto', query: { hash: 'Contacto' } },
  ]);

  function toggle() {
    isOpen.value = !isOpen.value;
    
    document.body.classList[isOpen.value ? 'add' : 'remove']("menu-open");
  }
</script>

<template>
  <div class="icb-navbar">
    <img class="icb-navbar__logo" src="@/assets/logos/logo.svg" height="50" alt="Logo">
    <img class="icb-navbar__logo-completo" src="@/assets/logos/logo-complete.svg" height="50" alt="Logo Completo">
    <div :class="['icb-navbar__menu', { 'is-open': isOpen }]" @click="toggle">
      <div class="icb-navbar__menu-line"></div>
      <div class="icb-navbar__menu-line"></div>
      <div class="icb-navbar__menu-line"></div>
    </div>
    <nav class="icb-navbar__nav">
      <ul class="icb-navbar__nav-list">
        <li v-for="page in pages">{{ page.name }}</li>
      </ul>
    </nav>
  </div>
  <nav :class="['icb-mobile-menu', { 'is-open': isOpen }]">
    <ul class="icb-mobile-menu__list">
      <li v-for="page in pages">
        <a href="">{{  page.name  }}</a>
      </li>
    </ul>
    <img class="icb-mobile-mone__logo" src="@/assets/logos/logo-completo-blanco.svg" height="70" alt="Logo Completo">
  </nav>
</template>

<style scoped lang="scss">
.icb-navbar {
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  &__logo {
    @include q-medium {
      display: none;
    }
  }
  &__logo-completo {
    @include q-small {
      display: none;
    }
  }
  &__menu {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 5;
    @include q-medium {
      display: none;
    }
    &-line {
      margin: 0;
      padding: 0;
      width: 40px;
      height: 3px;
      margin-bottom: 7px;
      background-color: $secondary;
    }
    &.is-open {
      div:nth-child(1) {
        transform: translateX(0px) translateY(9px) rotate(45deg);
      }
      div:nth-child(2) {
        display: none;
      }
      div:nth-child(3) {
        transform: translateX(0px) translateY(-1px) rotate(-45deg);
      }
    }
  }
  &__nav ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 56px;
    list-style: none;
    @include q-small {
      display: none;
    }

    li {
      font-size: 24px;
      line-height: 26.4px;
      font-weight: 600;
      color: $secondary;
    }
  }
}
.icb-mobile-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -280px;
  height: 100vh;
  width: 285px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-color: $secondary;
  padding: 50px 28px 32px;

  @include q-small {
    transition: all 0.3s ease-in-out;
    &.is-open {
      transform: translateX(0);
    }
  }
  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    li {
      display: inline-block;
      text-align: right;
      margin: 0 0 20px 0;
      padding: 0;
      a {
        font-size: 28px;
        line-height: 32px;
        font-weight: 600;
        color: $white;
        text-decoration: none;
      }
    }
  }
}
</style>


