<script setup lang="ts">
</script>

<template>
  <main class="icb-inicio">
    <img class="icb-inicio__biblia-fondo" src="@/assets/images/bible-bg.jpg" alt="Biblia de fondo">
    <div class="icb-inicio__bienvenida">
      <h2>Bienvenidos a la</h2>
      <h1>Iglesia Centro Bíblico</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
.icb-inicio {
  &__biblia-fondo {
    width: 100%;
  }
  &__bienvenida {
    position: absolute;
    top: 40%;
    left: 60px;
    transform: translateY(-50%);
    h2, h1 {
      font-size: 70px;
      line-height: 85px;
      color: #2C3135;
      font-weight: 700;
      font-family: 'Montserrat';
    }
  }
}
</style>