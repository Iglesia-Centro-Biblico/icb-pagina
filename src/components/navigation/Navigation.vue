<template>
  <div :class="['icb-navbar', { 'has-scrolled': hasScrolled, 'is-open': isOpen }]">
    <div class="icb-navbar__progress-bar" :style="{ width: `${scrollPercentage}%` }"></div>
    <img class="icb-navbar__logo icb-logo" src="/logo.svg" height="32" width="32" alt="Logo" @click.prevent.stop="redirect('inicio')">
    <img v-if="hasScrolled" class="icb-navbar__logo-completo-blanco icb-logo" src="/logo-completo-blanco.svg" height="50" alt="Logo Completo blanco"  @click.prevent.stop="redirect('inicio')">
    <img v-else class="icb-navbar__logo-completo icb-logo" src="/logo-completo.svg" height="50" alt="Logo Completo"  @click.prevent.stop="redirect('inicio')">
    <div :class="['icb-navbar__menu', { 'is-open': isOpen }]" @click="toggle">
      <div class="icb-navbar__menu-line"></div>
      <div class="icb-navbar__menu-line"></div>
      <div class="icb-navbar__menu-line"></div>
    </div>
    <nav class="icb-navbar__nav">
      <ul class="icb-navbar__nav-list">
        <li v-for="page in pages" :key="page.name" @click="redirect(page.hash)">{{ page.name }}</li>
        <li v-if="installApp" class="install-button" @click="install">
          <img src="@/assets/icons/install-icon.svg" alt="install icon"> Instalar
        </li>
      </ul>
    </nav>
  </div>
  <div :class="['icb-mobile-menu', { 'is-open': isOpen }]">
    <ul class="icb-mobile-menu__list">
      <li v-for="page in pages" :key="`mobile-${page.name}`">
        <a @click="redirect(page.hash, 'toggle')">{{  page.name  }}</a>
      </li>
      <li v-if="installApp" class="install-button" @click="install">
        <img src="@/assets/icons/install-icon.svg" alt="install icon"> Instalar
      </li>
    </ul>
    <img class="icb-mobile-mone__logo" src="/logo-completo-blanco.svg" height="70" alt="Logo Completo">
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import type { Ref } from 'vue';
  const emit = defineEmits(['expanded']);
  
  let isOpen: Ref<boolean> = ref(false);
  let hasScrolled: Ref<boolean> = ref(false);
  let scrollPercentage: Ref<number> = ref(0);
  let installApp: Ref<any> = ref();

  const pages: Ref<{ name: string, hash: string }[]> = ref([
    { name: 'Inicio', hash: 'inicio' },
    { name: 'Visítanos', hash: 'visitanos' },
    { name: 'Nosotros', hash: 'nosotros' },
    { name: 'Contacto', hash: 'footer' },
  ]);

  const toggle = () => {
    isOpen.value = !isOpen.value;
    emit('expanded', isOpen.value);
  };
  const redirect = (page: string, option?: string) : void  => {
    const el = document.getElementById(page);
    if (el) {
      let dt = 0;
      if (option === 'toggle') {
        dt = 300;
        toggle();
      };
      
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), dt);
    }
  };
  const install = async () => {
    if (!installApp?.value) return null;

    installApp.value.prompt();
    const { outcome } = await installApp.value.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    installApp.value = null;
  };

  const scrollHandler = (e: any) => {
    e.preventDefault();
    hasScrolled.value = window.scrollY > 0;
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    scrollPercentage.value = (scrollTop * 100) / (scrollHeight - clientHeight);
  };

  const installHandler = (e: any) => {
    e.preventDefault();
    installApp.value = e;
  };  

  defineExpose({ toggle }); 
  onMounted(() => {
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('beforeinstallprompt', installHandler);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('beforeinstallprompt', installHandler);
  });
</script>

<style scoped lang="scss">
// START: GENERAL COMPONENTS
// Install button
.install-button {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: $primary;
  color: $white !important;
  font-size: 14px !important;
  font-weight: 600;
  border-radius: 20px;
  padding: 8px 16px !important;
  margin-left: -4px;
  img {
    margin-top: 3px;
  }
}
// END: GENERAL COMPONENTS
.icb-navbar {
  $self: &;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 100;
  height: 48px;
  padding: 0 16px;
  transition: all 0.3s ease-in-out;
  &.is-open {
    transform: translateX(-285px) !important;
    @include q-large {
      transform: translateX(0) !important;
    }
  }
  @include q-medium {
    height: 80px;
    padding: 0 24px;
  }
  &.has-scrolled {
    background-color: $secondary;
    #{ $self }__nav {
      li {
        color: $white;
      }
    }
    #{ $self }__menu {
      &-line {
        background-color: $white !important;
      }
    }
  }
  &__progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 3px;
    background-color: $primary;
  }
  .icb-logo {
    cursor: pointer;
  }
  &__logo {
    @include q-medium {
      display: none;
    }
  }
  &__logo-completo, &__logo-completo-blanco {
    @include q-small {
      display: none;
    }
  }
  &__menu {
    position: absolute;
    top: 16px;
    right: 20px;
    z-index: 5;
    cursor: pointer;
    &-line {
      margin: 0;
      padding: 0;
      width: 30px;
      height: 2px;
      margin-bottom: 6px;
      background-color: $secondary;
    }
    @include q-medium {
      top: 30px;
      right: 30px;
      &-line {
        margin: 0;
        padding: 0;
        width: 40px;
        height: 3px;
        margin-bottom: 7px;
        background-color: $secondary;
      }
    }
    @include q-large {
      display: none;
    }
  
    &.is-open {
      div:nth-child(1) {
        transform: translateX(0px) translateY(8px) rotate(45deg);
      }
      div:nth-child(3) {
        transform: translateX(0px) translateY(0px) rotate(-45deg);
      }
      div:nth-child(2) {
        display: none;
      }
      @include q-medium {
        div:nth-child(1) {
          transform: translateX(0px) translateY(9px) rotate(45deg);
        }
        div:nth-child(3) {
          transform: translateX(0px) translateY(-1px) rotate(-45deg);
        }
      }
    }
  }
  &__nav ul {
    display: none;
    justify-content: flex-end;
    align-items: center;
    gap: 56px;
    list-style: none;
    @include q-large {
      display: flex;
    }

    li {
      font-size: 24px;
      line-height: 26.4px;
      font-weight: 600;
      color: $secondary;
      cursor: pointer;
    }
  }
}
.icb-mobile-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -285px;
  height: 100vh;
  width: 285px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-color: $secondary;
  padding: 50px 28px 32px;
  transition: all 0.3s ease-in-out;
  &.is-open {
    transform: translateX(-285px);
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
        cursor: pointer;
      }
    }
  }
  @include q-large {
    display: none;
    transform: translateX(0) !important;
  }
}
</style>


