<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Residuos en la producción avícola
      
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img1.png', alt='')      
      .col-lg-6
        p(data-aos="fade-down") Comprendidos los residuos como todos aquellos materiales que han cumplido alguna función o condición de uso, se hace indispensable que su disposición final, se realice tanto en los lugares adecuados como en los tiempos pertinentes y de las maneras más proporcionadas a su naturaleza, clasificación y cantidad. Al tener en cuenta todo ello, se minimizarán los posibles riesgos que afectarían al medio ambiente, a los humanos y, en ocasiones, al mismo proceso productivo.      
        p(data-aos="fade-down") En el sector avícola, los sitios donde más suelen generarse residuos son las plantas de beneficio, las granjas de ponedoras o de pollo de engorde. Para disponer de ellos, se requiere actuar de acuerdo a las normas técnicas y condiciones del entorno. 
    .bg1        
      p(data-aos="fade-down").mb-5 Todos los manejos sobre residuos se deben realizar, idealmente, bajo mecanismos establecidos por la empresa avícola y en cumplimento de los estándares existentes para ello. Vale la pena, entonces, conocer la distinción de cada residuo:
      .row.justify-content-center
        .col-lg-10      
          .row.justify-content-center.mb-4.mb-md-5(data-aos="fade-down")
            .col-lg-6.col-md-10.mb-3
              .tarjeta.tarjeta-foto-hover.h-100
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img2.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
                  h5.text-center.mb-0 Residuo sólido aprovechable
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4
                    h5 Residuo sólido aprovechable
                    p.mb-0 Es cualquier residuo sólido sin valor alguno a la planta, pero si genera un beneficio para otro proceso productivo al ser reincorporado. Por ejemplo toda clase de papel, plástico, metal, vidrio o madera.
            .col-lg-6.col-md-10.mb-3
              .tarjeta.tarjeta-foto-hover.h-100
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img3.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bghover
                  h5.text-center.mb-0 Residuo sólido no aprovechable
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4
                    h5 Residuo sólido no aprovechable
                    p.mb-0 Producto sólido o semisólido de origen inorgánico o orgánico y que no es aprovechable o reutilizable en un proceso productivo, sin valor comercial y el cual es necesario realizar un tratamiento o disposición específica, por ejemplo las envolturas, material vegetal, papel higiénico, papel parafinado, icopor o servilletas, etc. 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-5.col-md-10.mb-md-5.col-sm-10.mb-sm-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img5.png', alt='')                       
        .col-lg-5
          .bg2.p-4.mb-3(data-aos="flip-down")
            h4(data-aos="fade-down").mb-3 Disposición de recipientes
            p(data-aos="fade-down").mb-0 Otro aspecto a tener en cuenta para el manejo de los residuos sólidos es la disposición de recipientes, canecas u otro elemento para recolección o almacenamiento.                        
          .bg2.p-4(data-aos="flip-down")
            h4(data-aos="fade-down").mb-3 Características de los recipientes
            p(data-aos="fade-down").mb-0 Deben ser de un material ideal con boca ancha y con su respectiva tapa, ubicada un lugar pertinente. Tendrán un uso específico según el tipo de residuos que alojarán (Infeccioso, tóxico, explosivo, corrosivo, envases, empaques o embalajes, etc).

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Fuentes generadoras

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-down") Durante los procesos avícolas se pueden generar diversos tipos de residuos y en diferentes sectores de la producción. Tales puntos de generación de residuos se denominan #[b fuentes generadoras] porque son los puntos o situaciones que originan, dentro de las instalaciones avícolas, cualquier tipo de residuo.

        p(data-aos="fade-down") En el pre alistamiento y alistamiento de los galpones, por ejemplo, se producen en las diferentes líneas o secciones algunos residuos.                    
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img6.png', alt='') 
        
    p(data-aos="fade-down").mb-5 Analizar la siguiente tabla 1 e identificar la entrada, el proceso y el residuo generado, en distintos eventos o acciones de la producción:

    .titulo-sexto.color-acento-contenido(data-aos="fade-left") 
      h5 Tabla 1
      span Ejemplos de generación de residuos en galpones  
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")  
      table
        thead
          tr
            th Entradas Prima
            th 
            th Residuo
        tbody
          tr.text-center
            td Elementos de Aseo        
            td Limpieza del Galpón (Gallinaza)      
            td.text-start Gallinaza, alimento, aserrín, plumas, huevos rotos y elementos de aseo desgastados         
          tr.text-center
            td Desinfectantes y detergentes    
            td Lavado y desinfección de equipos y Galpones
            td.text-start Envases vacíos de elementos detergentes y desinfectantes   
          tr.text-center
            td Herramientas, repuestos y bombillos    
            td Mantenimiento de Galpón 
            td.text-start Residuos de metal, residuos plásticos y bombillos dañados    
          tr.text-center
            td Plaguicida, filtros, guantes y overol    
            td Aplicación de plaguicida (Acaro)
            td.text-start Envases vacíos y dotación en desgaste   
          tr.text-center
            td Desinfectante    
            td Termo nebulización (Desinfección)
            td.text-start Envase vacío    
          tr.text-center
            td Bulto de aserrín   
            td Cama (Aserrín)
            td.text-start Lonas     
          tr.text-center
            td Concentrado y agua    
            td Suministros de agua y piensos
            td.text-start Gallinaza, alimento contaminado y lonas de empaque   
          tr.text-center
            td Huevo y bandeja de cartón   
            td Recolección de huevos
            td.text-start Cascara de huevos, bandejas de cartón    
          tr.text-center
            td N/A    
            td Recolección y sanitización de gallinaza
            td.text-start Gallinaza y cascara de huevo   
          tr.text-center
            td N/A    
            td Recolección y disposición de la mortalidad 
            td.text-start Aves muertas    
          tr.text-center
            td Carbonato de calcio   
            td Ca
            td.text-start Lonas de empaque   
          tr.text-center
            td Insecticida y rodenticida    
            td Control de plagas
            td.text-start Empaques y residuos de plaguicidas   
          tr.text-center
            td Sanidad y vacunación     
            td Vacunación y tratamientos
            td.text-start Envases, jeringas y agujas

    p(data-aos="fade-down").mb-5 De la misma manera en que en las áreas de galpones se evidencia la entrada de materiales que, luego de su correspondiente uso, se convierten en residuos; así mismo, es fácil hacer un esquema representativo de la generación de residuos en los procesos administrativos (ver tabla 2):

    .titulo-sexto.color-acento-contenido(data-aos="fade-left") 
      h5 Tabla 2
      span Ejemplos de generación de residuos en los procesos administrativos
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")  
      table
        thead
          tr
            th Entrada Materias Primas
            th 
            th Residuo
        tbody
          tr.text-center
            td Implementos de aseo y papel de oficina 
            td Oficinas y Administración
            td.text-start Implementos desgastados, papel de oficina usado 
          tr.text-center
            td Papel sanitario y jabón líquido 
            td Sanitarios y duchas
            td.text-start Papel sanitario usado y envases plásticos vacíos 
          tr.text-center
            td Alimentos 
            td Casino de comedor
            td.text-start Residuos orgánicos, envases, envolturas plásticas, vidrios, papel 
          tr.text-center
            td Elementos de reposición de maquinaria. 
            td Mantenimientos de equipos 
            td.text-start Aceite usado, luminarias y repuestos y elementos metálicos dañados 

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2   Clasificación

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6.mb-md-5.mb-sm-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img7.png', alt='')      
      .col-lg-6
        p(data-aos="fade-down") En la avicultura es necesario clasificar todos los residuos de manera organizada; de acuerdo con su función o característica, se clasifican en tres ramas: orgánicos, convencionales no peligrosos y residuos peligrosos. La variable de clasificación depende del uso y manejo que se les dé, al momento de recolectar y disponer.

        p(data-aos="fade-down") Profundice en las características, generalidades y aspectos clave de las tres ramas en que, en la producción avícola, se clasifican los residuos sólidos. Observar con atención el vídeo que se muestra a continuación:              
            
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/WhoxjtW7nxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
