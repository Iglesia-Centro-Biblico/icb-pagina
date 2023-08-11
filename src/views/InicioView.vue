<template>
  <div id="inicio" class="icb-inicio grid">
    <div class="icb-inicio__bienvenida">
      <h2 class="icb-inicio__bienvenida-title">Bienvenidos a la</h2>
      <h1 class="icb-inicio__bienvenida-title">Iglesia Centro Bíblico</h1>
      <button class="icb-inicio__bienvenida-cta" @click="redirect('visitanos')">Visítanos</button>
    </div>
  </div>
  <div id="visitanos" class="icb-visitanos grid">
    <h2 class="icb-visitanos__titulo col-md-12">Reuniones</h2>
    <div class="icb-visitanos__content col-md-6">
      <h3 class="icb-visitanos__content-dia">Domingos</h3>
      <h4 class="icb-visitanos__content-reunion">Escuela Dominical</h4>
      <p class="icb-visitanos__content-hora">9:30 - 10:15 hrs</p>
      <h4 class="icb-visitanos__content-reunion">Culto de Adoración</h4>
      <p class="icb-visitanos__content-hora">9:30 - 10:15 hrs</p>
    </div>
    <div class="icb-visitanos__content col-md-6">
      <h3 class="icb-visitanos__content-dia">Miercoles</h3>
      <h4 class="icb-visitanos__content-reunion">Reunión de Oración</h4>
      <p class="icb-visitanos__content-hora">19:00 - 20:30 hrs</p>
    </div>
  </div>
  <div class="icb-direccion grid">
    <h2 class="icb-direccion__titulo col-md-12">Dirección</h2>
    <p class="icb-direccion__p col-md-5">La Iglesia Centro Bíblico se encuentra en <span>Charruas 726 entre Libertad y Silvan Fernandez</span></p>
  </div>
</template>
<script setup lang="ts">
  const redirect = (page: string) => {
    const el = document.getElementById(page);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
</script>

<style scoped lang="scss">
.icb-inicio {
  min-height: 100vh;
  background-image: url('../assets/images/bible-bg.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  @include q-large {
    background-position: 100% 20%;
  }

  &__bienvenida {
    position: absolute;
    top: 125px;
    left: 30px;
    z-index: 0;
    &-title {
      font-size: 24px;
      line-height: 26px;
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

    &-cta {
      background-color: $primary;
      color: $white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      font-family: 'Montserrat';
      font-size: 18px;
      font-weight: 600;
      margin-top: 16px;
      @include q-medium {
        padding: 16px 38px !important;
        font-size: 36px !important;
      }
    }
  }
}

.icb-visitanos {
  padding: 28px 28px 36px;
  &__titulo {
    font-size: 30px;
    font-weight: 700;
    line-height: 37px;
    text-decoration: underline;
    text-decoration-color: $primary;
    text-decoration-thickness: 4px;
    margin-bottom: 15px;
  }
  &__content {
    margin-bottom: 8px;
    &-dia {
      font-size: 26px;
      font-weight: 700;
      line-height: 32px;
      margin-bottom: 4px;
    }
    &-reunion {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
    }
    &-hora {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }
  }
}

.icb-direccion {
  padding: 28px 28px 36px;
  background-color: $secondary;
  &__titulo {
    color: $white;
    font-size: 30px;
    font-weight: 700;
    line-height: 37px;
    text-decoration: underline;
    text-decoration-color: $primary;
    text-decoration-thickness: 4px;
    margin-bottom: 15px;
  }
  &__p {
    color: $white;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    span {
      color: $primary;
      font-weight: 500;
    }
  }
}
</style>