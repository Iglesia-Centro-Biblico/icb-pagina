<script setup lang="ts">
</script>

<template>
  <main class="icb-inicio">
    <img class="icb-inicio__biblia-fondo" src="@/assets/images/sm-bible-bg.png" alt="Biblia de fondo">
    <div class="icb-inicio__bienvenida">
      <h2>Bienvenidos a la</h2>
      <h1>Iglesia Centro Bíblico</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
.icb-inicio {
  &__biblia-fondo {
    width: 100vw;
  }
  &__bienvenida {
    position: absolute;
    top: 20%;
    left: 30px;
    transform: translateY(-50%);
    h2, h1 {
      font-size: 22px;
      line-height: 24px;
      color: #2C3135;
      font-weight: 800;
      font-family: 'Montserrat';
    }
  }
}
</style>