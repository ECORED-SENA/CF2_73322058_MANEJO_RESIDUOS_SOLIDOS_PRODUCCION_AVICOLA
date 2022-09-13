<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Plan de gestión de residuos sólidos

    .row.justify-content-center.align-items-center.mb-5   
      .col-lg-6
        p(data-aos="fade-down") Hace referencia al documento que contiene objetivos, metas, programas, proyectos y actividades que garanticen el buen manejo de los residuos sólidos, producidos dentro de la empresa. Su función está encaminada a favorecer el establecimiento de metas y/o actividades para el manejo de los residuos, definiendo responsables directos e indirectos. La verificación de este proceso es responsabilidad de la persona que administra o se encarga de la granja.

        p(data-aos="fade-down") El plan de gestión de residuos sólidos se encuentra establecido en tres pilares fundamentales que son: el cumplimiento legal, la política ambiental y la planeación de toda actividad pecuaria y necesaria para el establecimiento de la producción de pollo a gran escala. 
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img15.png', alt='')
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.cajon.color-primario.p-4.mb-4(data-aos="flip-down")
        .row.justify-content-center.align-items-center    
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img21.svg', alt='')
          .col-10.my-3
            p(data-aos="fade-down").mb-0 El plan de gestión de los residuos, requiere ser implementado para evitar a la finca, multas o cierres, debido a los impactos generados al medio ambiente, las personas o los animales de la producción, en el caso de no aplicarlo. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la generación e implementación de un plan de gestión de residuos, se deben tener en cuenta los siguientes aspectos. Se debe procurar llevar registro de esto en su libreta personal de apuntes: 
          br
          br
        ul.lista-ul--color
          li 
            i.fas.fa-check
            p.mb-0 El éxito de la formulación de un plan es atacar directamente el origen de impactos no deseados y hacer un manejo adecuado de los residuos producidos con el fin de reducirlos y eliminarlos.

          li 
            i.fas.fa-check
            p.mb-0 Disposición de los residuos y beneficio: deben ser separados de acuerdo a la clasificación, para su transformación, en beneficio de la empresa. Probablemente, se convierten en materias primas utilizadas para otras labores.

          li 
            i.fas.fa-check
            p.mb-0 Manejo y transformación de los residuos: es el proceso por el cual sufren un cambio para ser aprovechados en otra actividad productiva.

          li 
            i.fas.fa-check
            p.mb-0 Disposición final controlada: se refiere a los residuos que por sus características no pueden ser utilizados y se realiza la disposición final, de acuerdo a la normatividad vigente.

    p(data-aos="fade-down").my-5 La resolución 2184 de 2019, propone el uso racional de bolsas plásticas para el manejo de los residuos y establece su separación por colores, así: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        SlyderF(columnas="col-lg-6")(data-aos="fade-left")
          .tarjeta.bg4.crd.crd--100.p-3
            img.img-a.img-t.mb-3(src='@/assets/curso/temas/img23.png', alt='')
            .text-center
              h4.mb-3 Residuos aprovechables
              p.mb-0 Plástico, cartón, vidrio, papeles y metales.            
          .tarjeta.bg4.crd.crd--100.p-3
            img.img-a.img-t.mb-3(src='@/assets/curso/temas/img24.png', alt='')
            .text-center
              h4.mb-3 Residuos orgánicos aprovechables
              p.mb-0 Restos de comida y desechos agrícolas.
          .tarjeta.bg4.crd.crd--100.p-3
            img.img-a.img-t.mb-3(src='@/assets/curso/temas/img25.png', alt='')
            .text-center
              h4.mb-3 Residuos no aprovechables
              p.mb-0 Papel higiénico, servilletas, papeles contaminados con comida.            
          .tarjeta.bg4.crd.crd--100.p-3
            img.img-a.img-t.mb-3(src='@/assets/curso/temas/img26.png', alt='')
            .text-center
              h4.mb-3 Residuos peligrosos
              p.mb-0 Productos con características infecciosas, tóxicas, inflamables.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.cajon.color-primario.p-4.mb-4(data-aos="flip-down")
        .row.justify-content-center.align-items-center    
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.svg', alt='')
          .col-10.my-3
            p(data-aos="fade-down").mb-0 La formulación e implementación del plan de gestión de residuos asegura que los mismos, tengan la disposición correspondiente y se favorezca al medio ambiente, a las personas y a los animales del proceso productivo. Las empresas pecuarias, cada vez más, clasifican, reciclan y reúsan, en función de mitigar impactos sobre el agua, los suelos y el aire. 

    p(data-aos="fade-down").mb-5 Implementar un plan de gestión de residuos sólidos en una granja avícola, tiene como principal objetivo, reducir la posibilidad de problemas de orden ambiental, de salud, de afectación a la inocuidad de los productos, además de cumplir con la normatividad.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        p(data-aos="fade-down") Otros objetivos más concretos que puede plantearse una finca avícola, en relación al plan de gestión de residuos, son:
        ul.lista-ul--color(data-aos="fade-down")
          li 
            i.fas.fa-check
            p.mb-0 Identificar situaciones de riesgo. 
          li 
            i.fas.fa-check
            p.mb-0 Definir las acciones para su prevención y control.
          li 
            i.fas.fa-check
            p.mb-0 Lograr un funcionamiento óptimo de la granja avícola.
          li 
            i.fas.fa-check
            p.mb-0 Implementar un buen plan de integración de todas las áreas de la compañía, en función de los residuos.
          li 
            i.fas.fa-check
            p.mb-0 Reducir costos de producción con la reutilización y reciclaje.
          li 
            i.fas.fa-check
            p.mb-0 Mejorar los procesos de producción de la granja avícola.
          li 
            i.fas.fa-check
            p.mb-0 Reducir o eliminar los residuos que se generan durante los procesos.
          li 
            i.fas.fa-check
            p.mb-0 Garantizar la salud de las aves, del personal y consumidores finales.
          li 
            i.fas.fa-check
            p.mb-0 Cumplir la normatividad establecida y vigente.                                                                
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img28.png', alt='')

    h4(data-aos="fade-down").mb-5 Metas e indicadores

    p(data-aos="fade-down").mb-5 Las metas e indicadores, relativas a la gestión de los residuos en la granja avícola, se deben establecer por áreas o departamentos de la producción. Tales metas e indicadores se tienen en cuenta y son utilizados para el seguimiento de los procesos, la planeación de nuevos procesos y acciones, las proyecciones, la evaluación de la producción, entre otras.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img29.png', alt='')             
      .col-lg-6 
        p(data-aos="fade-down") Entre otros factores de la producción y de la operación de la empresa, las metas y los indicadores, tocan los siguientes aspectos entre otros:  
        ul.lista-ul--color(data-aos="fade-down")
          li 
            i.fas.fa-check
            p.mb-0 Materias primas.
          li 
            i.fas.fa-check
            p.mb-0 Insumos o productos.
          li 
            i.fas.fa-check
            p.mb-0 Costos de la producción.
          li 
            i.fas.fa-check
            p.mb-0 Plan de compras. 
          li 
            i.fas.fa-check
            p.mb-0 Procesos de contratación de recurso humano. 

    p(data-aos="fade-down").mb-5 En el siguiente esquema, identifique los pasos clave para el establecimiento de metas o indicadores, en la granja avícola (ver figura 1):
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img30.svg', alt='metas o indicadores, en la granja avícola')

          .tarjeta.color-acento-contenido.p-3(x="50%" y="26.5%" numero="1")
            h5.mb-2 Identificación del aspecto
            p.mb-0 Se deberán identificar los aspectos, áreas o ámbitos de la producción que se pretender intervenir o afectar, en relación con el manejo de los residuos.

          .tarjeta.color-acento-contenido.p-3(x="71.5%" y="43%" numero="2")
            h5.mb-2 Definición y diseño
            p.mb-0 Definir cada meta u objetivo implica establecer, además, la estrategia a seguir para alcanzarlos. 

          .tarjeta.color-acento-contenido.p-3(x="63.5%" y="65%" numero="3")
            h5.mb-2 Implementación
            p.mb-0 Es el hecho mismo de poner en marcha las estrategias, actividades, acciones que aportan al cumplimiento de las metas y objetivos definidos.  

          .tarjeta.color-acento-contenido.p-3(x="36%" y="64%" numero="4")
            h5.mb-2 Monitoreo y seguimiento
            p.mb-0 Mide las tareas ejecutadas y, con ellas, los tiempos, los encargados, los mecanismos, los beneficios de aplicación de estrategias y las dificultades o complicaciones encontradas. 

          .tarjeta.color-acento-contenido.p-3(x="30%" y="41%" numero="5")
            h5.mb-2 Evaluación de resultados
            p.mb-0 De nada podría servir alcanzar metas y objetivos si, a la vez, no son analizados en función de nuevas proyecciones. Del análisis de los resultados, dependen las mejoras que se establezcan para optimizar los procesos.                                               
</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass">
.bloque-texto-g
  justify-content: flex-start
  background-color: rgba(255, 255, 255, 0.65)
.bloque-texto-g__img
  left: auto
  right: 0
</style>
