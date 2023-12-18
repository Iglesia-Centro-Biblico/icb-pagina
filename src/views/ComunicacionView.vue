<template>
  <div class="comunicacion">
    <div class="comunicacion__colores">
      <h2 class="icb--titulo">Colores</h2>
      <div v-for="color in colors" :key="color.title" class="comunicacion__colores-item">
        <div class="comunicacion__colores-item-sample" :style="{ backgroundColor: color.sample }"></div>
        <div class="comunicacion__colores-item-info">
          <h3>{{ color.title }}</h3>
          <p v-for="item in color.info" :key="item.format+'-'+item.color"><span>{{ item.format }}:</span> {{ item.color }}</p>
        </div>
      </div>
    </div>
    <div class="comunicacion__logos">
      <h2 class="icb--titulo">Logos</h2>
      <div v-for="logo in logos" :key="logo.title" class="comunicacion__logos-item">
        <div class="comunicacion__logos-item-sample">
          <img :src="logo.sample.src" :alt="logo.title" :width="logo.sample.width">
        </div>
        <div class="comunicacion__logos-item-info">
          <h3>{{ logo.title }}</h3>
          <a 
            v-for="item in logo.options" 
            :key="logo.title+'-'+item.type" 
            :href="item.href"
            :download="logo.title"
            >
              {{ item.type }}
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colors: any = [
  {
    title: 'Azul (Primario)',
    sample: '#458BD0',
    info: [
      { format: 'HEX', color: '#458BD0' },
      { format: 'RGB', color: 'R69 G139 B208' },
      { format: 'HSL', color: '210 60 54' },
    ],
  },
  {
    title: 'Negro (Secundario)',
    sample: '#2C3135',
    info: [
      { format: 'HEX', color: '#2C3135' },
      { format: 'RGB', color: 'R44 G49 B53' },
      { format: 'HSL', color: '207 9 19' },
    ],
  }, {
    title: 'Gris (Fondo)',
    sample: '#F8F8F8',
    info: [
      { format: 'HEX', color: '#F8F8F8' },
      { format: 'RGB', color: 'R248 G248 B248' },
      { format: 'HSL', color: '0 0 97' },
    ],
  }
];
const logos: any = [
  {
    title: 'Logo Primario',
    sample: { src: '/logo.svg', width: '90' },
    options: [
      { type: 'SVG', href: '/logo.svg' },
      { type: 'PNG', href: '/logo.png' },
      { type: 'PDF', href: '/logo.pdf' },
    ],
  },
  {
    title: 'Logo Negro',
    sample: { src: '/logo.svg', width: '90' },
    options: [
      { type: 'SVG', href: '/logo.svg' },
      { type: 'PNG', href: '/logo.png' },
      { type: 'PDF', href: '/logo.pdf' },
    ],
  },
  {
    title: 'Logo Blanco',
    sample: { src: '/logo.svg', width: '90' },
    options: [
      { type: 'SVG', href: '/logo.svg' },
      { type: 'PNG', href: '/logo.png' },
      { type: 'PDF', href: '/logo.pdf' },
    ],
  },
];
</script>

<style lang="scss">
.comunicacion {
  padding: 60px 5px 80px;
  &__colores {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      &-sample {
        content: '';
        height: 90px;
        width: 90px;
        -webkit-box-shadow: 0px 14px 47px 0px rgba(0,0,0,0.35);
        -moz-box-shadow: 0px 14px 47px 0px rgba(0,0,0,0.35);
        box-shadow: 0px 14px 47px 0px rgba(0,0,0,0.35);
      }
      &-info {
        h3 {
          font-weight: 700;
        }
        p {
          font-size: 14px;
          margin: 0;
          padding: 0;
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
  &__logos {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      &-sample {
        content: '';
        height: 90px;
        width: 90px;
      }
      &-info {
        h3 {
          font-weight: 700;
        }
        a {
          font-size: 14px;
          margin: 0;
          padding: 0;
          text-decoration: none;
          margin-right: 8px;
          color: $primary;
          font-weight: 700;
        }
      }
    }
  }
}
</style>