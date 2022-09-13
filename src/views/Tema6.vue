<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Seguimiento y evaluación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img31.png', alt='')    
      .col-lg-6
        p(data-aos="fade-down") El seguimiento y evaluación en un sistema de manejo de residuos, agiliza y efectiviza el proceso mismo, pues es el mecanismo por el cual se revisan las medidas adoptadas en la unidad productiva, de acuerdo a los indicadores de cada seccional de la granja avícola.

        p(data-aos="fade-down") Este proceso se realiza para corregir, prevenir, mitigar u optimizar los procesos productivos. El seguimiento y evaluación deben ser realizados de acuerdo a cada área y a cada actividad. La supervisión es responsabilidad de la persona que administra o se encarga de la empresa avícola. 

    p(data-aos="fade-down").mb-5 Al analizar la siguiente tabla 3 se puede identificar los elementos fundamentales del seguimiento y evaluación que, entre otros, deben ser tenidos en cuenta para tal proceso: 

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Tabla 3
      span Ejemplo de lista de chequeo para seguimiento y evaluación
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left") 
      table
        thead
          tr
            td(colspan='5') Seguimiento y Evaluación de PGIRS 
        tbody
          tr.text-center
            td(rowspan='2') #[b Programa]
            td(rowspan='2') #[b Actividad]
            td(colspan='2') #[b Cumplimiento]
            td(rowspan='2') #[b Observaciones]
          tr.text-center
            td #[b Si]
            td #[b No]
          tr.text-center
            td Bioseguridad            
            td Realiza todos los parámetros bajo la normatividad           
            td            
            td            
            td 
          tr.text-center
            td Mortalidad            
            td Dispone del material de acuerdo a la normatividad vigente           
            td            
            td            
            td 
          tr.text-center
            td Residuos Solidos            
            td Realiza PGIRS de acuerdo con la normatividad y el plan de gestión          
            td            
            td            
            td 
          tr.text-center
            td Recurso Hídrico            
            td Cumple con cada una de las actividades de acuerdo a la norma            
            td            
            td            
            td 
          tr.text-center
            td Generalidades            
            td Todas las seccionales de la producción avícola cumplen con las actividades destinadas para el plan de gestión de residuos sólido            
            td            
            td            
            td

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.cajon.color-primario.p-4.mb-4(data-aos="flip-down")
        .row.justify-content-center.align-items-center    
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.svg', alt='')
          .col-10.my-3
            p(data-aos="fade-down").mb-0 Las granjas avícolas tienen facultad para realizar su propio formato, de acuerdo al plan implementado.
</template>

<script>
export default {
  name: 'Tema6',
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
