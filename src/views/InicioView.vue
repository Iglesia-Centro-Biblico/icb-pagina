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
        <p class="icb-visitanos__content-info-hora">9:30 - 10:15 hrs</p>
      </div>
      <div class="icb-visitanos__content-info">
        <h3 class="icb-visitanos__content-info-dia">Miercoles</h3>
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
    <accordion :multi="true">
      <accordion-item v-for="seccion in declaracionDeFe" :key="seccion.titulo" :label="seccion.titulo" :defaultIsOpen="false">
        <p  v-for="(explicacion, i) in seccion.explicacion" :key="explicacion.id+'-'+i" :class="['icb-que-creemos__explicacion', `child-${explicacion.child || 1}`]"><span>{{ explicacion.id }}</span> {{ explicacion.text }}</p>
      </accordion-item>
    </accordion>
  </div>
</template>
<script setup lang="ts">
  import Accordion from '@/components/accordion/Accordion.vue';
  import AccordionItem from '@/components/accordion/AccordionItem.vue';

  const redirect = (page: string) => {
    const el = document.getElementById(page);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const declaracionDeFe: any[] = [{
    titulo: 'Dios',
    explicacion: [
        { id: 'A.', text: 'Hay un solo Dios— santo, eterno, omnipotente, omnisciente y omnipresente. (Deut. 6:4; 1 Tim. 2:5)' },
        { id: 'B.', text: 'El existe eternamente en tres personas—El Padre, El Hijo y el Espíritu Santo— pero es uno en naturaleza, atributos, poder y gloria. (Gén. 1:26; Mt. 3:16-17; 28:19; 2 Cor. 13:13; 1 Ped. 1:2)' },
    ],
  }, {
    titulo: 'El Hombre',
    explicacion: [
        { id: 'A.', text: 'El hombre fue creado perfecto, a imagen de Dios. (Gén. 1:26-27; 5:1; 9:6)' },
        { id: 'B.', text: 'Pecó, trayendo sobre sí y su descendencia la muerte física y a la vez la muerte espiritual, la separación de Dios. (Ef. 2:1-3; 11-12; Rom. 6:23)' },
        { id: 'C.', text: 'Por esta causa todo ser humano nace con una naturaleza pecaminosa, corrompida. (Rom. 3:9-18, 23; Mar. 7:21-23; Col. 1:21)' },
        { id: 'D.', text: 'El hombre por sí solo no puede volver a su estado primitivo de perfección y comunión con Dios. (Is. 59:1-2; 64:6; Rom. 8:6-8).' },
        { text: 'El hombre por sí solo no puede volver a su estado primitivo de perfección y comunión con Dios. (Is. 59:1-2; 64:6; Rom. 8:6-8).'},
    ],
  }, {
    titulo: 'Jesucristo',
    explicacion: [
        { id: 'A.', text: 'Es Dios verdadero, eterno y uno con el Padre. (Jn. 1:1-3; 5:23; 10:30)' },
        { id: 'B.', text: 'Hombre verdadero, concebido por el Espíritu Santo en el cuerpo de la virgen María. (Jn. 1:14; Mt. 1:18-25; Lc. 1:26-38)' },
        { id: 'C.', text: 'En su Gracia vino a obrar por nosotros una eterna, perfecta y suficiente redención. Por ser perfecta nadie puede añadir nada ni para ayudar ni para    completar la obra. (Jn. 19:30; Heb. 9:12)' },
        { id: 'D.', text: 'Fue crucificado y muerto por nuestros pecados. (Is. 53:5-6; 1 Cor. 15:3)' },
        { id: 'E.', text: 'Como único y suficiente sacrificio representativo y en sustitución nuestra. (Jn. 1:29; Rom. 5:17-21;1 Ped. 2:24)' },
        { id: 'F.', text: 'Todos aquellos que creen en El arrepintiéndose de su condición pecaminosa y le reciben, son justificados ante Dios solo a base de la fe en  su sangre derramada. (Jn 1:11-13; Jn. 3:16; Rom. 3:24-25; Ef. 2:13; 1 Ped. 2:24)' },
        { id: 'G.', text: 'Fuera de Cristo y su obra completada una vez para siempre, no hay  salvación. (Jn. 14:6; Hch. 4:12; 10:43; Jn. 3:36 y Apoc. 5:9)' },
        { id: 'H.', text: 'Cristo en su muerte llevó lejos nuestros pecados. (Lev. 16:21-22; Sal.103:12; Miq. 7:18-19; Is. 38:17)' },
        { id: 'I.', text: 'Resucitó para nuestra justificación. (Rom. 4:25; 1 Cor. 15:17-20)' },
        { id: 'J.', text: 'Dio muchas pruebas indubitables de su resurrección. (Hch. 1:3; 1 Cor. 15:3-9 ;Lc. 24:26-43)' },
        { id: 'K.', text: 'Ascendió al cielo corporalmente. (Lc. 24:51; Hch. 1:9-11)' },
        { id: 'L.', text: 'Vive ahora para interceder por nosotros como nuestro Sumo Sacerdote y abogado. (Rom. 8:34; Heb. 6:20; Ef. 4:14-16; 1 Tim. 2:5; 1 Jn. 2:1)' },
        { id: 'M.', text: 'Vendrá otra vez. (Hch. 1:11; Jn. 14:1-3; 1 Tes. 4:13-17)' },
        { id: '1.', child: 2, text: 'Para unir espíritus y cuerpos transformados de santos ya muertos. (1 Cor. 15:50-53; 1 Tes. 4:13-16)' },
        { id: '2.', child: 2, text: 'Para transformar cuerpos de santos vivos y juntar a todos los suyos. (1 Cor. 15:51-53; 1 Jn. 3: 2-3; Fil. 3:20-21)' },
        { id: '3.', child: 2, text: 'Para enviar la gran tribulación sobre el mundo.  (Mt. 24:15-22 ; Apoc.7:14)' },
        { id: '4.', child: 2, text: 'Vendrá después para reinar mil años en la tierra. (Is. 11:1-16;  Apoc.20:4-6)' },
    ],
  }, {
    titulo: 'El Espiritu Santo',
    explicacion: [
        { id: 'A.', text: 'Es una persona. La tercera persona de la Trinidad. (Hch. 5:3-4; 9:32; 13:2-4; 16:6-7)' },
        { id: 'B.', text: 'Vino el día de Pentecostés para morar en todo creyente para siempre. (Hch.1:4-5; 8; 2:1-4; Jn. 14:16-17; 1 Cor. 3:16; 6:19-20; Rom. 8:9-17)' },
        { id: 'C.', text: 'Entra en el creyente cuando confía en Dios para Salvación.(2 Cor. 1:21-22; Ef. 1:13-14; Tito 3:5).' },
        { id: 'D.', text: 'Entrando en el creyente obra varias cosas' },
        { id: '1.', child: 2, text: 'Le hace nacer de nuevo. (Tito 3:5; Juan 3:3-6)' },
        { id: '2.', child: 2, text: 'Le guía. (Rom. 8:14; Sal. 143:10; Gál. 5:18.)' },
        { id: '3.', child: 2, text: 'Le bautiza. (Mat. 3:11; 1 Cor. 12:13.)' },
        { id: '4.', child: 2, text: 'Le unge. (1 Juan 2:20; 27).' },
        { id: '5.', child: 2, text: 'Le sella. (2 Cor. 1:22; Ef. 4:30).' },
        { id: 'E.', text: 'Una vez recibido, no se pierde. (Juan 14:16;  Ef. 4:30)' },
        { id: '1.', child: 2, text: 'Su deseo es que vivamos llenos de Él. (Ef. 5:18)' },
        { id: '2.', child: 2, text: 'A veces le contristamos y le apagamos. (Ef. 4:30; 1 Tes. 5:19)' },
        { id: '3.', child: 2, text: 'Por eso necesitamos ser llenos de El muchas veces. Compare (Hch.2:24; 4:29; 9:17; 13:19; Ef. 1:13-14; 5:18)' },
        { id: 'F.', text: 'El reparte Sus Dones como Él quiere, no a gusto nuestro. (1 Cor. 12:4-11)' },
        { id: 'G.', text: 'Sus dones son habilidades sobrenaturales dadas por Él para Su servicio y Gloria, para provecho y edificación del cuerpo de Cristo, su Iglesia (1 Cor.12:4-11; 15-25; 28-30; Ef. 4:11-12). Hay dones, como el don de lenguas, milagros, sanidad y otros, que cesaron debido a que eran temporales dentro del propósito de Dios para la expansión del evangelio en los primeros años de la Iglesia.' },
    ],
  }, {
    titulo: 'La Iglesia',
    explicacion: [
        { id: 'A.', text: 'Se distingue de Israel. (1 Cor. 10:32; 12:13; Ef. 2:14-15.)' },
        { id: 'B.', text: 'Se compone de todos los regenerados desde Pentecostés hasta la primera resurrección.( Mt. 16:18; 1 Cor. 15:51-52.)' },
        { id: 'C.', text: 'Se ingresa por unirse a Cristo por el bautismo del Espíritu Santo. (1 Cor 12:12-13.)' },
        { id: 'D.', text: 'Es el cuerpo de Cristo, del cual El es la cabeza. (Ef. 1:22-23; 2:20-22: 1Cor. 12:13.)' },
        { id: 'E.', text: 'Su obra es la de completarse ganando a las almas perdidas para Cristo.  (Hch. 1:8; Mt. 28:18-20; Juan 20:21.)' },
    ],
  }, {
    titulo: 'La Resurrección',
    explicacion: [
        { id: 'A.', text: 'Tanto justos como injustos resucitarán corporalmente. (Job 19:25-27)' },
        { id: 'B.', text: 'Los justos a un estado de eterna bendición. (1 Cor. 15:52-53; Fil. 3:21; 1 Tes. 4:14-17; Apoc. 20:5-6)' },
        { id: 'C.', text: 'Los injustos a un estado de castigo eterno y consciente. (Apoc. 19:20; 20:10,15; Isa. 33:14; Mat. 13:42;  Apoc. 14:11)' },
    ],
  }, {
    titulo: 'La Biblia',
    explicacion: [
        { id: 'A.', text: 'Las Sagradas Escrituras del Antiguo y Nuevo Testamento son total y  verbalmente inspiradas por Dios y sin equivocación alguna en sus documentos originales, y son de autoridad suprema y final en todo asunto de Fe y práctica cristiana. (2 Tim. 3:15-17; 1 Ped. 1:22-23; 2 Ped. 1:16-21)' },
        { id: 'B.', text: 'Las Escrituras son completas en sí mismas. (Deut. 4:2;  Jn. 14:26; 16:13 ; Apoc. 22:18-19)' },
        { id: 'C.', text: 'El Espíritu Santo es el único autor e intérprete que necesitamos. (Jn. 14:26;16:13-15; 1 Jn. 2:20, 27; 1 Cor. 2:14)' },
        { id: 'D.', text: 'La Palabra de Dios tiene poder' },
        { id: '1.', child: 2, text: 'Para convertir el alma. (Salmos 19:7.)' },
        { id: '2.', child: 2, text: 'Para salvar.(Stgo. 1:18; 21; 1 Ped. 1:23; 1 Cor. 1:18 y Hch. 11:14.)' },
        { id: '3.', child: 2, text: 'Para limpiar. (Jn. 15:3 , Jn 17:17; Sal. 119:11-13; Ef. 5:26.)' },
    ],
  }, {
    titulo: 'Las Ordenanzas de Cristo',
    explicacion: [
        { id: 'A.', text: 'El Bautismo' },
        { id: '1.', child: 2, text: 'El bautismo por inmersión es el único que ilustra bíblicamente la regeneración del creyente, y lo requerimos de todos los aspirante a membresia de la iglesia.  (Rom. 6:3-14; Hch. 8:36-39; Jn. 3:23)' },
        { id: '2.', child: 2, text: 'El bautismo por inmersión es el testimonio público de que ya hemos recibido a Cristo como nuestro Salvador personal (Hech.8:26-38) y el  mismo no influye en nada a nuestra salvación. (Hch. 8:13-24)' },
        { id: '3.', child: 2, text: 'Los candidatos deben de ser discipulados y luego examinados por el liderazgo de la Iglesia; aplazando y/o anulando el acto si hubiere alguna falta que afecte el buen orden, el testimonio público de Cristo y de su iglesia.' },
        { id: 'B.', text: 'La Cena del Señor (Santa Cena)' },
        { id: '1.', child: 2, text: 'Es un memorial y ordenanza establecido por Cristo. (1 Cor. 11:24-26;Mat. 3:11; 1 Cor. 12:13; Hch. 10:44-47)' },
        { id: '2.', child: 2, text: 'La participación en ella en nada influye en nuestra salvación. (1 Cor.11:27)' },
        { id: '3.', child: 2, text: 'Participar en ella es deber y derecho de todo creyente regenerado. (Mat. 26:27)' },
        { id: '4.', child: 2, text: 'Invitamos a participar en ella solamente a aquellos cristianos bautizados por inmersión, en plena comunión y de alguna iglesia evangélica que esté de acuerdo con nuestra doctrina y práctica, para evitar abusos. (1 Cor. 10:16-22; 11:20-22; 29-34 con 2 Jn. 10-11)' },
        { id: '5.', child: 2, text: 'Se celebrará en lo posible el primer domingo de cada mes.' },
    ],
  }, {
    titulo: 'Plan de Salvación',
    explicacion: [
        { id: 'A.', text: 'Preconcebido por Dios desde antes de la fundación del mundo. (1 Ped.1:18-20; Ef 1:3-4)' },
        { id: 'B.', text: 'Todo ser humano nace en pecado y no puede salvarse por sí mismo e ir al cielo. En el Nuevo Testamento la Biblia nos indica que Cristo, el Cordero de Dios, quita el pecado con su sangre derramada en la Cruz. (Sal.51:5; Eclec.7:20; Jn. 1:29; Heb. 9:11-14; 22; 25-28)' },
        { id: 'C.', text: 'Fuera del Señor Jesucristo y su obra completada una vez y para siempre, no puede haber salvación. (Jn. 14:6; Hch. 4:12; 10:43; Apoc. 5:9; Heb. 4:14- 16; 5:10; 10:10-12,14)' },
        { id: 'D.', text: 'Todo aquel que se arrepiente sinceramente de su condición pecaminosa y cree en el Señor Jesucristo recibiéndole por fe en su corazón, es justificado ante Dios en base a Su sangre derramada en la Cruz. (Jn. 3:16; Rom. 3:23-26, 10:9-10; Mat. 3:2; Mr. 1:15; Lc. 13:3; Hch. 3:19; 17:30)' },
        { id: 'E.', text: 'La salvación es por gracia solamente y no por las obras o méritos propios.(Ef. 2:8-9; Rom. 3:20-22: Tito 3:5-7)' },
        { id: 'F.', text: 'La salvación tiene tres aspectos importantes. (Jn. 5:24)' },
        { id: '1.', child: 2, text: 'Pasado. Al recibir a Cristo el creyente es salvo de la culpa y pena del pecado. (Lc. 7:48-50; Ef. 1:6,2:5,8; Rom. 8:2)' },
        { id: '2.', child: 2, text: 'Presente. Cristo va liberando al creyente del hábito y dominio del pecado. (Rom. 6:14; Fil. 2:12; 13; Gál. 2:19-20 y Rom. 12:2)' },
        { id: '3.', child: 2, text: 'Futuro. En la completa redención del creyente, quien será conformado a la misma imagen de Cristo. (1 Jn. 3:2-3;  Ef. 1:13-14; Rom. 13:11 y 1 Ped. 1:5)' },
        { id: 'G.', text: 'La Salvación es segura y no se pierde (Jn.10:27-30, 6:37; Rom.8:1,33-39; 1 Jn. 5:13)' },

    ],
  }, {
    titulo: 'Escatologia',
    explicacion: [
        { text: 'Sostenemos por la fe el Pre-milenialismo y Pre-tribulacionismo. Quiere decir que nuestra reunión con Cristo ha de ocurrir antes del período que en la Biblia se conoce como de tribulación, de ira y de prueba que vendrá sobre el mundo entero. Será en las nubes como lo dice 1 Tes. 4:17, donde los muertos en Cristo resucitarán primero y luego los santos vivos arrebatados, para compadecer ante el tribunal de Cristo y recibir según lo que hayamos hecho mientras estuvimos en el cuerpo. Posteriormente la Iglesia de Cristo celebrará como esposa las bodas del Cordero y finalmente descenderá con Cristo como Rey, para reinar sobre la tierra por mil años. Esto ocurrirá al fin de los siete años de tribulación y será la inauguración del Reino milenial, y cuyo final será el estado Eterno. (1 Tes. 4:14-17; Jn. 14:1-3; Apoc. 20:1-6; 3:10; 2 Cor. 5:10: 1 Cor. 15:50-53)' },
    ],
  }, {
    titulo: 'Separación',
    explicacion: [
        { text: 'Creemos que la Santidad de Dios exige que la separación sea no sólo una doctrina pero también una práctica, y que este principio se ve a través de toda la Escritura. Creemos que la verdadera comunión espiritual es el resultado de una común  fe y práctica. Debemos estar apartados para Cristo y Su Evangelio, con un compromiso a la comunión con otras organizaciones o iglesias cuyas doctrinas y principios estén en armonía con la UCB. (Rom. 1:1; Hech. 13:2; Col. 2:10; Ef. 4:1-6; Rom. 14:13; Heb. 10:25). Hay varios aspectos de la separación Bíblica' },
        { id: 'A.', text: 'Política - separación de la iglesia del Estado. (Lc. 20:25)' },
        { id: 'B.', text: 'Personal – separación del creyente del mundo y el pecado para poder servir a Dios. (Josué 24:15; Rom. 12:1-2,14; 2 Cor. 6:14-7:1; Ef. 5:15-18; 1 Jn.2:15-17; Stgo. 4:4)' },
        { id: 'C.', text: 'Eclesiástica – separación de la iglesia de la apostasía, así como de grupos carismáticos, liberales, neo-evangélicos y ecuménicos. (2 Cor. 6:14-18; Tito 3:10; 2 Tim. 3:5, 4:2-4; 2 Jn. 10-11; Fil. 3:17-18; 1 Jn. 2:15-17)' },
        { id: 'D.', text: 'Familiar – separación del creyente del hermano no arrepentido, cuando este compromete la sana doctrina, ética cristiana o su moral en su vida o ministerio. (Rom. 16:17; 1 Cor. 5:11; 2 Tes. 3:6,14-15; Mt. 18:15-17; Gal. 6:1) (2 Tes. 3:15 No teniéndole como enemigo, 2Cor. 2:7-8 mostrando amor   y consuelo cuando este se haya arrepentido en forma sólida y genuina).' },
    ],
}];
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
  padding: 36px 24px 42px;
  scroll-margin-top: 70px;
  &__explicacion {
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