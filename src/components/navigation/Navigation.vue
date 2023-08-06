<script setup lang="ts">
</script>

<template>
  <nav class="icb-nav">
    <img src="@/assets/logo.svg" height="50" alt="">
    <div class="icb-nav__menu" @click="">
      <div class="icb-nav__menu-line"></div>
      <div class="icb-nav__menu-line"></div>
      <div class="icb-nav__menu-line"></div>
    </div>
    <ul class="icb-nav__list">
      <li>Inicio</li>
      <li>Visítanos</li>
      <li>Nosotros</li>
      <li>Contacto</li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.icb-nav {
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  &__menu {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 5;
    &-line {
      width: 40px;
      height: 3px;
      margin-bottom: 7px;
      background-color: #2C3135;
    }
    @media screen and (min-width: 500px) {
      display: none;
    }
  }
  &__list {
    display: none;
    justify-content: flex-end;
    align-items: center;
    gap: 56px;
    list-style: none;
    li {
      font-size: 24px;
      line-height: 26.4px;
      font-weight: 600;
    }
  }
}
</style>


