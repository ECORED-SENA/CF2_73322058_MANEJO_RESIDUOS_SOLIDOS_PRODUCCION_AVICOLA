<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Documentación del plan de gestión de residuos sólidos

    p(data-aos="fade-down") El plan de gestión de los residuos sólidos en la granja avícola debe contar con documentación e información complementaria y/o integradora, relacionada con los procesos ejecutados en la producción. Los entes de control que pueden certificar u ofrecer sellos a la empresa, están facultados para exigir tales datos.

    p(data-aos="fade-down").mb-5 Se debe observar con atención el siguiente vídeo y entérese de los principales documentos y registros que se integran al plan de gestión de residuos sólidos:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/a6Z5giATD-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
