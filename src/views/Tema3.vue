<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 3
      h1 Ténicas para la recolección de información
    p(data-aos="fade-down") El alcance en la investigación de mercados se fundamenta por las herramientas que brinda a los directivos de mercadeo, para poder que logren tomar decisiones, para esto el diseño de la investigación de mercados es fundamental. A continuación, se citan dos fuentes para diseñar el proceso de investigación de mercados. 

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-5
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/ilustraciones/img17.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p Diseño de investigación
                  h5 exploratoria           
          .col-lg-5
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/ilustraciones/img18.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p Diseño de investigación
                  h5 concluyente  

    p(data-aos="fade-down") Las dos son muy diferentes en cuanto a fundamentación o metodología, dependiendo de los objetivos o alcances esperados, la empresa decide si requieren de la investigación exploratoria o el modelo de la investigación concluyente, como también la organización puede mezclar las dos técnicas para complementar conocimiento con análisis de cifras cuantitativas. 

    h5(data-aos="fade-down") Investigación exploratoria
    p(data-aos="fade-down") Se fundamenta en enriquecer el conocimiento, estudia variables cualitativas lo que no permite técnicamente la posibilidad de toma de decisiones respecto a un problema planteado; esta fuente es ideal para la elaboración de las bases iniciales y se considera que es la fase preliminar de la investigación concluyente. 
    p(data-aos="fade-down") Se profundizará sobre la investigación cualitativa, ¡Vamos!  

    SlyderE.my-5(indicadores="izquierda")(data-aos="slide-down") 
      .row
        .col-md-6.mb-4.mb-md-0
          p Este tipo de investigación se realiza a través de encuestas, mediante la realización de focus group, aplica también para esta técnica el estudio de casos de la industria o análisis de fuentes secundarias para la construcción de conocimiento primario que servirá como inicio del proceso de una posible investigación concluyente. En esta investigación las variables del problema son analizadas con mayor grado de precisión.     
        .col-md-6
          img.img-t.img-a(src='@/assets/ilustraciones/img19.png', alt='')  
      .row
        .col-md-6.mb-4.mb-md-0
          h5 Ejemplo
          p #[b Objetivo:] identificar sobre los posibles efectos de los juguetes de guerra en los niños. 

          p En este caso, el problema de investigación podría plantearse de esta forma: “los juguetes que hacen referencia a la guerra generan comportamientos violentos en los niños que los utilizan”.

          p En este caso un recurso para acercarse al tema sería abordar o investigar con psicólogos infantiles quienes podrían informar sobre las posibles causas de este tipo de juguetes en los niños. Otra fuente valiosa de información que se puede contactar sería a los fabricantes de juguetes reconocidos quienes diseñan o han diseñado juguetes este tipo. (Ortiz, 2021)     
        .col-md-6
          img.img-t.img-a(src='@/assets/ilustraciones/img20.png', alt='') 
      .row
        .col-md-6.mb-4.mb-md-0
          h5 Ventajas 
          p #[b Por ejemplo:] mientras que para una investigación concluyente que busca a través de una encuesta ponderar precios, sitios de compra o marcas. Con una investigación exploratoria a través de una entrevista, focus group, observación o un estudio de etnografía, se pretende identificar las diferentes variables que influyen en la decisión de consumo como aspectos culturales, generacionales, preferencias, contraindicaciones, estilos de vida que puedan influenciar en el consumo.     
        .col-md-6
          img.img-t.img-a(src='@/assets/ilustraciones/img21.png', alt='')                                                            
    h5(data-aos="fade-down") Investigación concluyente
    p(data-aos="fade-down") Tiene la estructura conceptual y metodológica que se requiere en la empresa para tomar decisiones de negocio, basados en los resultados por ser de tipo cuantitativo permiten medir, comparar, realizar proyecciones con base en datos estadísticos o grandes muestras de información cuantitativa a diferencia de la investigación exploratoria. Además, este tipo de investigación permite estimar varias probabilidades o realizar diferentes planteamientos desde la parte numérica, esto acorde a los recursos disponibles, capacidad operativa de la empresa y objetivos corporativos trazados.

    .tarjeta.color-primario.p-3.mt-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/ilustraciones/img22.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Investigación concluyente
              p.text-small Se descubrirá más sobre la investigación concluyente a continuación. 
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download    

    p.mt-5(data-aos="fade-down") Las técnicas utilizadas en estas dos investigaciones son, ver la tabla 1: 
    .BorTit.mt-5(data-aos="fade-down") #[b Tabla 1] Técnicas utilizadas en la investigación exploratoria o cualitativa
    .tabla-b.color-acento-contenido.mt-3(data-aos="fade-down")
      table
        caption Nota. Tomada de Dos Santos (2017).
        tr
          td.title-table #[b Técnicas]
          td.title-table #[b Descripción]
          td.title-table #[b Ventajas]
          td.title-table #[b Desventajas]
        tr 
          td.t-borde-right #[b Grupo Focal]
          td.t-borde-right Pequeños grupos de discusión dirigidos por un moderador capacitado.                
          td.t-borde-right Puede ser rápida.<br>Múltiple perspectiva.<br>Flexibilidad.<br> Roles grupales.              
          td Resultado no general.<br>Veta temas sensibles.<br>Costosas. 
        tr
          td.t-borde-right #[b Entrevista]
          td.t-borde-right Entrevista individual profunda cara a cara.
          td.t-borde-right Profundidad por caso.<br>Comprensión del comportamiento.
          td No generalizable.<br>Muy caro por cada entrevista.

        tr
          td.t-borde-right #[b Observación]
          td.t-borde-right Se registra la observación de fenómenos.
          td.t-borde-right Es discreta.<br>Patrones reales.
          td Puede ser cara.<br>Poca profundidad.

        tr
          td.t-borde-right #[b Pseudocompra (Mystery shopper)]
          td.t-borde-right Visitas anónimas de simulación de compra.
          td.t-borde-right Evaluación real.<br>Directa.
          td No generalizable.<br>Presión y evaluación.

        tr
          td.t-borde-right #[b Técnicas proyectivas]
          td.t-borde-right Muestran imágenes ambiguas.
          td.t-borde-right Flexible.<br>Trata temas sensibles.
          td Alta dependencia de la interpretación.


</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass" scoped></style>
