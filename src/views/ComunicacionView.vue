<template>
  <div class="comunicacion">
    <div class="comunicacion__titulo">
      <h1>Comunicación</h1>
    </div>
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
      <div v-for="logo in logos" :key="logo.title" class="comunicacion__logos-item" :style="{ background: logo.background }">
        <div class="comunicacion__logos-item-sample">
          <img :src="getLogo(logo.sample.src).href" :alt="logo.title" :width="logo.sample.width">
        </div>
        <div class="comunicacion__logos-item-info">
          <h3 :style="{ color: logo.fontColor || '#2C3135' }">{{ logo.title }}</h3>
          <a 
            v-for="item in logo.options" 
            :key="logo.title+'-'+item.type" 
            href="#"
            @click="download(item.href, logo.title)"
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
    sample: { src: 'logo.svg', width: '90' },
    options: [
      { type: 'SVG', href: 'logo.svg' },
      { type: 'PNG', href: 'logo.png' },
      { type: 'JPG', href: 'logo.jpg' },
    ],
  },
  {
    title: 'Logo Negro',
    sample: { src: 'logo-negro.svg', width: '90' },
    options: [
      { type: 'SVG', href: 'logo-negro.svg' },
      { type: 'PNG', href: 'logo-negro.png' },
      { type: 'JPG', href: 'logo-negro.jpg' },
    ],
  },
  {
    title: 'Logo Blanco',
    sample: { src: 'logo-blanco.svg', width: '90' },
    fontColor: '#fff',
    background: '#2C3135',
    options: [
      { type: 'SVG', href: 'logo-blanco.svg' },
      { type: 'PNG', href: 'logo-blanco.png' },
      { type: 'JPG', href: 'logo-blanco.jpg' },
    ],
  },
];

const getLogo = (href:string) => new URL(`../assets/logos/${href}`, import.meta.url);
const download = (href:string, title:string) => {
  // Create a link element
  const link = document.createElement('a');

  // Set the download attribute and href for the link
  link.download = title;
  link.href = getLogo(href).href;

  // Append the link to the document
  document.body.appendChild(link);

  // Trigger a click on the link to start the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
};
</script>

<style lang="scss">
.comunicacion {
  padding: 48px 0 80px;
  &__titulo {
    padding: 0 12px;
    margin: 0 0 12px;
    background-color: $primary;
    height: 200px;
    display: flex;
    align-items: center;
    h1 {
      color: white;
      font-weight: bold;
    }
  }
  &__colores {
    padding: 0 12px 24px;
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
    padding: 0 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &-item {
      padding: 18px 12px;
      border-radius: 8px;
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
        margin-left: 12px;
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