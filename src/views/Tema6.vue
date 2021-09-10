<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 6
      h1 Informe de investigación

    p(data-aos="fade-down") Muchos autores coinciden en afirmar que esta es la parte fundamental o más importante del proceso de la investigación de mercados. El cliente o la empresa está a la expectativa del informe final, porque con este documento podrán tomar las acciones respectivas, idear los diferentes planes de acción y trazar nuevos objetivos. Por lo que se requiere de un informe claro, entendible, directo en sus apreciaciones, problemas y respuestas. 

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-5.mb-4(data-aos="slide-right")
        p Dos Santos (2017) afirma que:
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Toda la información y conclusiones deben girar en torno a los objetivos de la investigación establecidos al comienzo del proyecto” pero la información debe presentarse de forma asequible para el público objetivo interesado, que pueden ser varios, principalmente directivos, pero también pueden dirigirse a un departamento en especial de la empresa como el de marketing. Por ello que se requiere tener muy claro, ¿para quién va dirigida o a hacía que público va dirigido el informe? El nivel cultural, académico es crucial para la redacción.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Dos Santos (2017), p.214

      .col-lg-5.mb-4(data-aos="slide-left") 
        .imagen-titulo--izq.color-primario
          figure.mb-5
            img(src='@/assets/ilustraciones/img42.png', alt='')

    p.mt-5(data-aos="fade-down") Se sugiere hacer mucho énfasis en el informe de los resultados finales de la investigación, además de explicar cómo estos resultados obtenidos podrían aportar para la solución de la problemática planteada como objetivo de investigación. De esto depende la toma de decisiones acertadas en mercadeo.

    p(data-aos="fade-down") La siguiente tabla 3 muestra una estructura del informe final. Esta estructura puede variar de acuerdo con la empresa que realiza la investigación.            

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-7
        .BorTit.mt-5(data-aos="fade-down") #[b Tabla 3] Estructura del informe final   
        .tabla-b.color-acento-contenido.mt-3(data-aos="fade-down")
          table
            caption Nota. Investigación de mercados.Tomado de Dos Santos (2017). 
            tr
              td.title-table.text-center #[b Título de la investigación]
            tr 
              td Portada

            tr 
              td índice

            tr 
              td Introducción 

            tr 
              td Objetivos 

            tr 
              td Metodología 

            tr 
              td Diseño de la investigación 

            tr 
              td.ml Método de recopilación de datos 

            tr 
              td.ml Técnicas de muestreo  

            tr 
              td.ml Trabajo de campo 

            tr 
              td.ml Análisis e interpretación 

            tr 
              td Limitaciones 

            tr 
              td Resultados

            tr 
              td Conclusiones y recomendaciones 

            tr 
              td Bibliografía 

            tr 
              td Anexos 


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

<style lang="sass" scoped></style>
