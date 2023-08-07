<script setup lang="ts">
</script>

<template>
  <main class="icb-inicio">
    <div class="icb-inicio__bienvenida">
      <h2>Bienvenidos a la</h2>
      <h1>Iglesia Centro Bíblico</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
.icb-inicio {
  min-height: 100vh;
  background-image: url('../assets/images/bible-bg.jpg');
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: cover;
  background-attachment: fixed;
  // Use mixin to set breakpoints
  @include q-large {
    background-position: 100% 30%;
  }

  &__bienvenida {
    position: absolute;
    top: 125px;
    left: 30px;
    h2, h1 {
      font-size: 22px;
      line-height: 24px;
      color: #2C3135;
      font-weight: 700;
      font-family: 'Montserrat';
    }
  }
}
</style>