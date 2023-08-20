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
        <h2 class="icb--titulo">Reuniones</h2>
        <h3 class="icb-visitanos__content-info-dia">Domingos</h3>
        <h4 class="icb-visitanos__content-info-reunion">Escuela Dominical</h4>
        <p class="icb-visitanos__content-info-hora">9:30 - 10:15 hrs</p>
        <h4 class="icb-visitanos__content-info-reunion">Culto de Adoración</h4>
        <p class="icb-visitanos__content-info-hora">10:30 - 12:00 hrs</p>
      </div>
      <div class="icb-visitanos__content-info">
        <h3 class="icb-visitanos__content-info-dia">Miércoles</h3>
        <h4 class="icb-visitanos__content-info-reunion">Reunión de Oración</h4>
        <p class="icb-visitanos__content-info-hora">19:00 - 20:30 hrs</p>
        <h3 class="icb-visitanos__content-info-dia" style="margin-top: 8px">Sabados</h3>
        <h4 class="icb-visitanos__content-info-reunion">Reunión de Jóvenes</h4>
        <p class="icb-visitanos__content-info-hora">18:00 - 20:30 hrs</p>
      </div>
    </div>
  </div>
  <div class="icb-direccion">
    <div class="icb-direccion__content">
      <div class="icb-direcction__content-info">
        <h2 class="icb--titulo" style="color: white">Dirección</h2>
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
  <div id="nosotros" class="icb-que-creemos">
    <h2 class="icb--titulo">Que Creemos</h2>
    <accordion class="icb-que-creemos__declaracion-mobile" :multi="true">
      <accordion-item v-for="seccion in declaracionDeFe" :key="seccion.titulo" :label="seccion.titulo" :defaultIsOpen="false">
        <p  v-for="(explicacion, i) in seccion.explicacion" :key="explicacion.id+'-'+i" :class="['icb-que-creemos__explicacion', `child-${explicacion.child || 1}`]"><span v-if="explicacion.id">{{ explicacion.id }}</span> {{ explicacion.text }}</p>
      </accordion-item>
    </accordion>
    <div class="icb-que-creemos__declaracion-desktop">
      <div class="icb-que-creemos__puntos">
        <div class="icb-que-creemos__puntos-progreso">
          <div class="icb-que-creemos__puntos-progreso-circle"></div>
        </div>
        <div class="icb-que-creemos__puntos-content">
          <h3 v-for="(tema, index) in temas" :key="tema+index" @click="elijeDeclaracion(index)">{{ tema }}</h3>
        </div>
      </div>
      <div>
        <p  v-for="(explicacion, i) in declaracionDeFe[selectedIndex].explicacion" :key="explicacion.id+'-'+i" :class="['icb-que-creemos__explicacion', `child-${explicacion.child || 1}`]">
          <span v-if="explicacion.id">{{ explicacion.id }}</span> {{ explicacion.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import Accordion from '@/components/accordion/Accordion.vue';
  import AccordionItem from '@/components/accordion/AccordionItem.vue';
  import declaracionDeFe from '@/common/declaracion';

  const redirect = (page: string) => {
    const el = document.getElementById(page);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  let selectedIndex: Ref<number> = ref(0);
  
  const temas: any= declaracionDeFe.map(({ titulo }) => titulo);

  const elijeDeclaracion = (index: number) => {
    selectedIndex.value = index;
  };
</script>

<style scoped lang="scss">
.icb-inicio {
  min-height: 100vh;
  width: 100%;
  background-image: url('../assets/images/icb-mobile-bible-bg.webp');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  @include q-medium {
    background-image: url('../assets/images/icb-bible-bg.webp');
    background-attachment: fixed;
  }
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
      padding: 10px 20px;
      border-radius: 4px;
      font-family: 'Montserrat';
      font-size: 18px;
      font-weight: 600;
      margin-top: 16px;
      border-radius: 50px;
      @include q-medium {
        padding: 16px 38px !important;
        font-size: 36px !important;
      }
    }
  }
}
.icb-visitanos {
  scroll-margin-top: 50px;
  padding: 28px 28px 36px;
  @include q-medium { 
    padding: 66px 42px 66px;
  }
  &__content {
    display: grid;
    &-info {
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
    &-info {
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
        &-p {
          font-size: 32px;
          line-height: 36px;
          width: 80%;
        }
      }
    }
  }
}
.icb-que-creemos {
  $creemos: &;
  padding: 36px 24px 42px;
  scroll-margin-top: 70px;
  &__declaracion-mobile {
    #{ $creemos }__explicacion {
      font-size: 16px;
      font-weight: 400;
      color: $secondary;
      span {
        font-weight: 700;
        color: $primary;
        margin-right: 4px;
      }
      &:last-child {
        margin-bottom: 16px;
      }
      &.child-2 {
        margin-left: 24px;
      }
    }
    @include q-medium {
      display: none;
    }
  }
  &__declaracion-desktop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    #{ $creemos }__puntos {
      display: flex;
      background-color: green;
      padding: 18px 24px;
      &-progreso {
        position: relative;
        width: 4px;
        height: 100%;
        background-color: $secondary;
        margin-right: 24px;
        &-circle {
          position: absolute;
          left: -15px;
          content: '';
          background-color: $primary;
          width: 33px;
          height: 33px;
          border-radius: 50%;
        }
      }
      &-content {
        h3 {
          margin-bottom: 12px;
        }
      }
    }
  }
  @include q-medium {
    padding: 66px 42px 66px;
  }
  @include q-large {
    width: 80%;
  }
}
.icb--titulo {
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
    margin-bottom: 25px;
  }
}
</style>