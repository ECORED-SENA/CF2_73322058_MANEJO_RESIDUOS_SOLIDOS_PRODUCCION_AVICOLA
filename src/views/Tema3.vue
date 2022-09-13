<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Identificación de impactos ambientales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img15.png', alt='')    
      .col-lg-6
        p(data-aos="fade-down") Un impacto ambiental es una alteración del medio ambiente, ocasionada o provocada por la intervención directa o indirecta de una actividad humana. La producción avícola, desde luego, en toda su cadena, puede incidir en el funcionamiento normal de algunos ecosistemas, del aire, de las fuentes de agua que rodean o transitan la granja, de los espacios de habitación de personas que colaboran en la finca, entre otras.

        p(data-aos="fade-down") Las granjas y plantas avícolas pueden producir algunos impactos importantes al medio ambiente, como los que se enuncian a continuación:

    .bg3.p-4(data-aos="fade-left")
      SlyderB.mb-5(:datos="datosSlyder")
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Contaminación del agua',
        texto:
          'Las fuentes hídricas pueden ser afectadas por vertimientos de aguas residuales, producto de procesos en las unidades avícolas. Esto se puede dar por un manejo inadecuado en el tratamiento de las aguas residuales y estas van directamente a fuentes hídricas.',
        imagen: require('@/assets/curso/temas/img16.png'),
      },
      {
        titulo: 'Indicadores de contaminación del agua',
        texto:
          'Pérdida de las cualidades organolépticas como el color, olor, sabor, turbidez, provocando un proceso de  eutrofización que consiste la contaminación del agua con materia orgánica con nitratos y fosfatos que posteriormente provoca en el agua una reducción del oxígeno. Comúnmente, en estas aguas tienden a crecer, en la superficie, plantas acuáticas que impiden el paso de la luz solar.',
        imagen: require('@/assets/curso/temas/img17.png'),
      },
      {
        titulo: 'Contaminación del suelo',
        texto:
          'Los problemas del suelo se ven relacionados, principalmente, con el mal manejo de la gallinaza. Uno de los problemas más comunes es la acción del estiércol sobre los poros del suelo: este interviene directamente en el drenaje del suelo y provoca inundaciones. De igual manera interviene en la oxigenación del mismo, generando microorganismos que producen los gases metano, el amoniaco y el gas sulfhídrico.',
        imagen: require('@/assets/curso/temas/img18.png'),
      },
      {
        titulo: 'Contaminación del aire',
        texto:
          'La descomposición de los residuos, como la gallinaza y pollinaza, produce gases volátiles (ácido acético, propiónico, butírico, valérico y caproico) que pueden causar molestias en los alrededores de las granjas avícolas; estos aumentan cuando hay un mal diseño del galpón, alta densidad y poca ventilación. Un olor característico de estas producciones es el olor a amoniaco y metano, el cual puede ocasionar daños graves porque contribuyen al efecto invernadero.',
        imagen: require('@/assets/curso/temas/img19.png'),
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
