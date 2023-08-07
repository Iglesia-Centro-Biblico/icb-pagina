<script setup lang="ts">
</script>

<template>
  <main class="icb-inicio">
    <div class="icb-inicio__bienvenida">
      <h2 class="icb-inicio__bienvenida-title">Bienvenidos a la</h2>
      <h1 class="icb-inicio__bienvenida-title">Iglesia Centro Bíblico</h1>
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
    background-position: 100% 20%;
  }

  &__bienvenida {
    position: absolute;
    top: 125px;
    left: 30px;
    &-title {
      font-size: 22px;
      line-height: 24px;
      color: #2C3135;
      font-weight: 700;
      font-family: 'Montserrat';
      
    }
    @include q-medium {
      top: 150px;
      &-title {
        font-size: 36px;
        line-height: 1;
      }
    }
    @include q-large {
      top: 170px;
      left: 130px;
      &-title {
        font-size: 70px;
        line-height: 1.2;
      }
    }
  }
}
</style>