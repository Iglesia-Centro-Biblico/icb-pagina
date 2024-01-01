<template>
  <div class="comunicacion">
    <div class="comunicacion__titulo">
      <h1>Comunicación</h1>
    </div>
    <div class="comunicacion__colores">
      <h2 class="icb--titulo">Colores</h2>
      <div class="comunicacion__colores-container">
        <div v-for="color in colors" :key="color.title" class="comunicacion__colores-item">
          <div class="comunicacion__colores-item-sample" :style="{ backgroundColor: color.sample }"></div>
          <div class="comunicacion__colores-item-info">
            <h3>{{ color.title }}</h3>
            <p v-for="item in color.info" :key="item.format+'-'+item.color"><span>{{ item.format }}:</span> {{ item.color }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comunicacion__logos">
      <h2 class="icb--titulo">Logos</h2>
      <div class="comunicacion__logos-container">
        <div v-for="logo in logos" :key="logo.title" class="comunicacion__logos-item" :class="['comunicacion__logos-item', { 'is-column': logo.column }]" :style="{ background: logo.background }">
          <div class="comunicacion__logos-item-sample">
            <img :src="getFile(logo.sample.src).href" :alt="logo.title" :width="logo.sample.width">
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
    <div class="comunicacion__qrs">
      <h2 class="icb--titulo">Codigos QR</h2>
      <div class="comunicacion__qrs-container">
        <div v-for="qr in qrs" :key="qr.title" class="comunicacion__qrs-item" :class="['comunicacion__qrs-item', { 'is-column': qr.column }]" :style="{ background: qr.background }">
          <div class="comunicacion__qrs-item-sample">
            <img :src="getFile(qr.sample.src).href" :alt="qr.title" :width="qr.sample.width">
          </div>
          <div class="comunicacion__qrs-item-info">
            <h3 :style="{ color: qr.fontColor || '#2C3135' }">{{ qr.title }}</h3>
            <a 
              v-for="item in qr.options" 
              :key="qr.title+'-'+item.type" 
              href="#"
              @click="download(item.href, qr.title)"
              >
                {{ item.type }}
              </a>
          </div>
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
    sample: { src: 'logos/logo.svg', width: '90' },
    options: [
      { type: 'SVG', href: 'logos/logo.svg' },
      { type: 'PNG', href: 'logos/logo.png' },
      { type: 'JPG', href: 'logos/logo.jpg' },
    ],
  },
  {
    title: 'Logo Negro',
    sample: { src: 'logos/logo-negro.svg', width: '90' },
    options: [
      { type: 'SVG', href: 'logos/logo-negro.svg' },
      { type: 'PNG', href: 'logos/logo-negro.png' },
      { type: 'JPG', href: 'logos/logo-negro.jpg' },
    ],
  },
  {
    title: 'Logo Blanco',
    sample: { src: 'logos/logo-blanco.svg', width: '90' },
    fontColor: '#fff',
    background: '#2C3135',
    options: [
      { type: 'SVG', href: 'logos/logo-blanco.svg' },
      { type: 'PNG', href: 'logos/logo-blanco.png' },
      { type: 'JPG', href: 'logos/logo-blanco.jpg' },
    ],
  }, {
    title: 'Logo Completo',
    sample: { src: 'logos/logo-completo.svg', width: '200' },
    column: true,
    options: [
      { type: 'SVG', href: 'logos/logo-completo.svg' },
      { type: 'PNG', href: 'logos/logo-completo.png' },
      { type: 'JPG', href: 'logos/logo-completo.jpg' },
    ],
  }, {
    title: 'Logo Completo Negro',
    sample: { src: 'logos/logo-completo-negro.svg', width: '200' },
    column: true,
    options: [
      { type: 'SVG', href: 'logos/logo-completo-negro.svg' },
      { type: 'PNG', href: 'logos/logo-completo-negro.png' },
      { type: 'JPG', href: 'logos/logo-completo-negro.jpg' },
    ],
  }, {
    title: 'Logo Completo Blanco',
    sample: { src: 'logos/logo-completo-blanco.svg', width: '200' },
    column: true,
    fontColor: '#fff',
    background: '#2C3135',
    options: [
      { type: 'SVG', href: 'logos/logo-completo-blanco.svg' },
      { type: 'PNG', href: 'logos/logo-completo-blanco.png' },
      { type: 'JPG', href: 'logos/logo-completo-blanco.jpg' },
    ],
  }, {
    title: 'Logo Completo Secundario',
    sample: { src: 'logos/logo-completo-secundario.svg', width: '200' },
    column: true,
    fontColor: '#fff',
    background: '#2C3135',
    options: [
      { type: 'SVG', href: 'logos/logo-completo-secundario.svg' },
      { type: 'PNG', href: 'logos/logo-completo-secundario.png' },
      { type: 'JPG', href: 'logos/logo-completo-secundario.jpg' },
    ],
  }
];

const qrs: any = [
  {
    title: 'QR Página Web Primario',
    sample: { src: 'qr-codes/qr-pagina.svg', width: '90' },
    options: [
      { type: 'SVG', href: 'qr-codes/qr-pagina.svg' },
    ],
  },
  {
    title: 'QR Página Web Negro',
    sample: { src: 'qr-codes/qr-pagina-negro.svg', width: '90' },
    options: [
      { type: 'SVG', href: 'qr-codes/qr-pagina-negro.svg' },
    ],
  },
  {
    title: 'QR Página Web Azul',
    sample: { src: 'qr-codes/qr-pagina-azul.svg', width: '90' },
    options: [
      { type: 'SVG', href: 'qr-codes/qr-pagina-azul.svg' },
    ],
  },
  {
    title: 'QR Página Web Blanco',
    sample: { src: 'qr-codes/qr-pagina-blanco.svg', width: '90' },
    fontColor: '#fff',
    background: '#2C3135',
    options: [
      { type: 'SVG', href: 'qr-codes/qr-pagina-blanco.svg' },
    ],
  },
];

const getFile = (href:string) => new URL(`../assets/${href}`, import.meta.url);
const download = (href:string, title:string) => {
  // Create a link element
  const link = document.createElement('a');

  // Set the download attribute and href for the link
  link.download = title;
  link.href = getFile(href).href;

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
    padding: 0 12px 36px;
    
    &-container {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
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
  &__logos, &__qrs {
    padding: 0 12px 36px;
    &-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    &-item {
        padding: 18px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        &.is-column {
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 0px;
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