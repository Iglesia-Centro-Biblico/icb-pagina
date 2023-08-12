<template>
  <div id="inicio" class="icb-inicio grid">
    <div class="icb-inicio__bienvenida">
      <h2 class="icb-inicio__bienvenida-title">Bienvenidos a la</h2>
      <h1 class="icb-inicio__bienvenida-title">Iglesia Centro Bíblico</h1>
      <button class="icb-inicio__bienvenida-cta" @click="redirect('visitanos')">Visítanos</button>
    </div>
  </div>
  <div id="visitanos" class="icb-visitanos">
    <div class="icb-visitanos__content">
      <div class="icb-visitanos__content-info">
        <h2 class="icb-visitanos__content-info-titulo">Reuniones</h2>
        <h3 class="icb-visitanos__content-info-dia">Domingos</h3>
        <h4 class="icb-visitanos__content-info-reunion">Escuela Dominical</h4>
        <p class="icb-visitanos__content-info-hora">9:30 - 10:15 hrs</p>
        <h4 class="icb-visitanos__content-info-reunion">Culto de Adoración</h4>
        <p class="icb-visitanos__content-info-hora">9:30 - 10:15 hrs</p>
      </div>
      <div class="icb-visitanos__content-info">
        <h3 class="icb-visitanos__content-info-dia">Miercoles</h3>
        <h4 class="icb-visitanos__content-info-reunion">Reunión de Oración</h4>
        <p class="icb-visitanos__content-info-hora">19:00 - 20:30 hrs</p>
      </div>
    </div>
  </div>
  <div class="icb-direccion">
    <div class="icb-direccion__content">
      <div class="icb-direcction__content-info">
        <h2 class="icb-direccion__content-info-titulo">Dirección</h2>
        <p class="icb-direccion__content-info-p">La Iglesia Centro Bíblico se encuentra en <span>Charruas 726 entre Libertad y Silvan Fernandez</span></p>
      </div>
      <div class="icb-direccion__content-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012.1161327963868!2d-58.091899490268574!3d-32.313040798415656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afcb32b7421717%3A0x8240c8cd0d1ba138!2sIglesia%20Centro%20B%C3%ADblico%20Paysand%C3%BA!5e0!3m2!1sen!2suy!4v1691864732778!5m2!1sen!2suy"
          width="320"
          height="200"
          style="border:0;"
          loading="lazy"
          >
        </iframe>
      </div>
    </div>
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
  background-position-x: 50%;
  background-position-y: 50%;
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
  @include q-medium { 
    padding: 66px 42px 66px;
  }
  &__content {
    display: grid;
    grid-template-columns: 1fr;
    
    &-info {
      &-titulo {
        font-size: 30px;
        font-weight: 700;
        line-height: 37px;
        text-decoration: underline;
        text-decoration-color: $primary;
        text-decoration-thickness: 4px;
        margin-bottom: 15px;
        @include q-medium {
          font-size: 60px;
          line-height: 64px;
          text-decoration-thickness: 6px;
          margin-bottom: 55px;
        }
      }
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
    @include q-medium {
      grid-template-columns: 1fr 1fr;
      &-info {
        &-dia {
          font-size: 40px;
          line-height: 44px;
          margin-bottom: 16px;
        }
        &-reunion {
          font-size: 24px;
          line-height: 28px;
          margin-bottom: 4px;
        }
        &-hora {
          font-size: 26px;
          line-height: 30px;
          margin-bottom: 4px;
        }
      }
    }
  }
}

.icb-direccion {
  padding: 28px 28px 36px;
  background-color: $secondary;
  &__content {
    display: grid;
    grid-template-columns: 1fr;
    &-info {
      &-titulo {
        color: $white;
        font-size: 30px;
        font-weight: 700;
        line-height: 37px;
        text-decoration: underline;
        text-decoration-color: $primary;
        text-decoration-thickness: 4px;
        margin-bottom: 15px;
      }
      &-p {
      color: $white;
      font-size: 18px;
      font-weight: 400;
      line-height: 18px;
      margin-bottom: 18px;
      span {
        color: $primary;
        font-weight: 500;
      }
    }
    }
    &-map {
      position: relative;
      padding-bottom: 70%;
      iframe {
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
      }
    }
  }
  @include q-medium {
    padding: 66px 42px 66px;
    &__content {
      grid-template-columns: 1fr 1fr;
      &-info {
        &-titulo {
          font-size: 60px;
          line-height: 64px;
          text-decoration-thickness: 6px;
          margin-bottom: 55px;
        }
        &-p {
          font-size: 32px;
          line-height: 36px;
          width: 80%;
        }
      }
    }
  }
}
</style>