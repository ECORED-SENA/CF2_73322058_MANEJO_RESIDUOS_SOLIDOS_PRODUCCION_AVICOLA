<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Disposición

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-down") La disposición de los residuos orgánicos se realiza de acuerdo con las características de los productos; un ejemplo muy común es la recolección de la gallinaza: un residuo orgánico que se remueve de los galpones. Dependiendo de su uso o del fin de producción de los animales, este se realiza de una manera manual o con maquinaria disponible.

        p(data-aos="fade-down") La gallinaza, en tanto residuo sólido orgánico, se dispone en un área especial, lejos de la granja, con el fin de utilizarse, por ejemplo, como venta para fertilizantes agrícolas.
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img8.png', alt='')
    p(data-aos="fade-down").mb-5 Algunos aspectos importantes para tener en cuenta, relacionados con la disposición de los residuos, son:
    .bg3.p-4(data-aos="fade-left")
      SlyderB.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Producción especializada y tecnificada',
        texto:
          'En granjas especializadas, este manejo se realiza por bandas transportadoras, después de realizar la recolección. El residuo de gallinaza, por ejemplo, se cubre con cubierta de tipo invernadero y se voltea diariamente con el objetivo de airear y aumentar el calor interno para matar todo patógeno no deseado.',
        imagen: require('@/assets/curso/temas/img9.png'),
      },
      {
        titulo: 'Residuos por mortalidad de aves',
        texto:
          'En el caso de la mortalidad de aves, esta es recolectada en otro sitio para su disposición. El proceso puede durar 60 días hasta convertir el residuo en materia orgánica de uso agrícola (compostación).',
        imagen: require('@/assets/curso/temas/img10.png'),
      },
      {
        titulo: 'Lugares aptos para la disposición de residuos',
        texto:
          'En el caso de los residuos convencionales no peligrosos, las granjas deben disponer un lugar apto para la disposición de basuras.  Tales lugares deben tener superficies lisas, cajas o dispensadores de almacenamiento, sistema de ventilación, mallas para evitar ingreso y proliferación de vectores; todos estos deben estar envueltos en bolsa negra. ',
        imagen: require('@/assets/curso/temas/img11.png'),
      },
      {
        titulo: 'Disposición de material chatarra',
        texto:
          'Para el material de tipo chatarra también se debe de disponer de un sitio especializado con el fin de hacer su debido manejo. Las características de este lugar son muy similares a las del lugar que alberga los residuos convencionales no peligrosos y, sobre todo, debe mantenerse lo más protegido posible de las humedades.',
        imagen: require('@/assets/curso/temas/img12.png'),
      },
      {
        titulo: 'Tratamientos adecuados',
        texto:
          'Los residuos especiales y peligrosos, deben recibir un tratamiento adecuado, según normativa vigente. Los mismos, deberán ser sumergidos en desinfectante durante ciertos tiempos propios. En el caso de las agujas, estas deben ir a un recipiente cerrado de color rojo (llamado guardián) el cual se deberá entregar a una empresa especializada en su manejo.',
        imagen: require('@/assets/curso/temas/img13.png'),
      },
      {
        titulo: 'Medicamentos y desinfectantes',
        texto:
          'Los envases de medicamentos y desinfectantes, detergentes y plaguicidas, deben ir a bolsa roja para realizar su respectivo manejo por la empresa recolectora. Los bombillas y tubos tienen, al igual que las baterías, son recolectados y administrados por empresas especializadas.',
        imagen: require('@/assets/curso/temas/img14.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
