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

    .row.justify-content-center.mt-5(data-aos="flip-down")  
      .col-lg-6.d-none.d-lg-block(data-aos="slide-right") 
        img.img-t.img-a(src='@/assets/ilustraciones/img62.svg', alt='')
        p(data-aos="fade-down").m-top El hecho fundamental que se llevó a cabo en una investigación exploratoria o una concluyente, lo constituye el método de selección de los elementos que aportaron los datos o la información necesaria en el estudio de mercado.

        p(data-aos="fade-down")  Las técnicas de recolección, el tipo de preguntas, los formatos de captura de datos y de información, o los procedimientos de análisis de resultados no son propios de un tipo particular de investigación, no están asociados a una investigación  exploratoria o a una concluyente, por ende, no definen, no delimitan, no establecen el tipo de investigación que se efectuó o se efectuará. (Plazas, 2011). 
      .col-lg-6.d-none.d-lg-block(data-aos="slide-right") 
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular La investigación de mercados consiste en el proceso de obtención de información y almacenamiento para posteriormente ser analizada dando respuestas y solucionando problemas referentes a la actividad del mercadeo. Actividad realizada con el propósito de ayudar al directivo del marketing a tomar decisiones que resuelvan sus metas de negocios.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 American Marketing Associattion
        img.img-t.img-a.mt-5.yoyo(src='@/assets/ilustraciones/img63.svg', alt='')

    .row.justify-content-center(data-aos="flip-down")  
      .col-lg-6.d-lg-none
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular La investigación de mercados consiste en el proceso de obtención de información y almacenamiento para posteriormente ser analizada dando respuestas y solucionando problemas referentes a la actividad del mercadeo. Actividad realizada con el propósito de ayudar al directivo del marketing a tomar decisiones que resuelvan sus metas de negocios.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 American Marketing Associattion
      .col-lg-6.d-lg-none
        p.mt-5 El hecho fundamental que se llevó a cabo en una investigación exploratoria o una concluyente, lo constituye el método de selección de los elementos que aportaron los datos o la información necesaria en el estudio de mercado.
        p Las técnicas de recolección, el tipo de preguntas, los formatos de captura de datos y de información, o los procedimientos de análisis de resultados no son propios de un tipo particular de investigación, no están asociados a una investigación  exploratoria o a una concluyente, por ende, no definen, no delimitan, no establecen el tipo de investigación que se efectuó o se efectuará. (Plazas, 2011)
    
    p.mt-5(data-aos="fade-down") Este método de investigación concluyente permite cuantificar las características de las variables, que dieron una estructura a la formulación de ese problema de estudio identificado mediante la investigación exploratoria. Para este tipo de investigación concluyente la encuesta es un instrumento eficaz para la recolección de datos cuantitativos. En este instrumento de recolección se pueden incluir datos a recoger como:

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-3.my-3(data-aos="fade-right")
        img.img-t.img-a(src='@/assets/ilustraciones/img64.svg', alt='')

      .col-lg-3.my-3(data-aos="fade-down")
        img.img-t.img-a(src='@/assets/ilustraciones/img65.svg', alt='') 
        
      .col-lg-3.my-3(data-aos="fade-left")
        img.img-t.img-a(src='@/assets/ilustraciones/img66.svg', alt='')

    p.mt-5(data-aos="fade-down") A continuación se presenta la gráfica de diferencias entre la investigación exploratoria y la investigación concluyente.        
    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-10
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img67.svg', alt='')
        p.text-small.mt-4 Nota. Investigación de Mercados, Un enfoque gerencial (Plazas, 2011).
    
    h5.mt-5(data-aos="fade-down") Técnicas usadas en cada método
    p(data-aos="fade-down") Para ampliar mejor las técnicas usadas en cada método de investigación se presenta la siguiente gráfica:     
    
    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-6
        h5(data-aos="fade-down") Datos primarios: 
    .row.justify-content-center.align-items-stretch.mt-1(data-aos="flip-down")       
      .col-lg-3.card-row-color-1.p-5
        img.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img68.svg', alt='')
        h5.my-3(data-aos="fade-down") Cuantitativos        
        p.mb-0 Encuesta
        p.mb-0 Paneles
        p.mb-0 BBDD
        p.mb-0 Experimentos
      .col-lg-3.card-row-color-2.p-5
        img.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img69.svg', alt='')
        h5.my-3(data-aos="fade-down") Cualitativos        
        p.mb-0 #[i Focus group]
        p.mb-0 Observación
        p.mb-0 T. Proyectivas
        p.mb-0 Test mercado

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img70.svg', alt='')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p #[b Ejemplo]<br>Mediante una encuesta se ilustra un ejemplo de la aplicación del método de investigación concluyente,  para un estudio de mercado de productos de pastelería y repostería que busca ponderar las variables y objetos de estudios que inciden en las ventas e ingresos de este negocio como son: conocimiento y preferencias del consumidor, las frecuencias de visita, inversión, sitio de compra, horarios habituales de consumo y bebidas con las que usualmente acompaña estos productos.       
    .row.justify-content-center.align-items-center.mt-3(data-aos="flip-down")       
      .col-lg-4
        a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p #[b Anexo 1.] Ejemplo de encuesta. 

    p.mt-5(data-aos="fade-down") En la investigación concluyente existen dos grandes grupos: 
    .row.justify-content-center.align-items-stretch.mt-2(data-aos="flip-down")       
      .col-lg-5.card-row-color-3.p-5
        img.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img72.svg', alt='')
        h5.my-3(data-aos="fade-down") La investigación concluyente descriptiva 
        p.mb-0(data-aos="fade-down") Describe personas, lugares, grupos y organizaciones. Es apropiada cuando, además de la necesidad de tomar una decisión, se detalla, describe y cuantifica las características de la situación en estudio; también es oportuna para detectar asociación o relación entre variables y cuantificar el grado de esa dependencia; por último, es conveniente siempre que se pretenda llevar a cabo predicciones o pronósticos. 
      .col-lg-5.card-row-color-4.p-5
        img.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img73.svg', alt='')
        h5.my-3(data-aos="fade-down") La investigación concluyente causal
        p.mb-0(data-aos="fade-down") Posibilita conocer y cuantificar las relaciones entre las variables, relaciones posibles de causa y efecto existentes entre las variables, teniendo claro que el efecto se considera como una consecuencia de la causa, relaciones presentes en las decisiones de mercadeo. Permite entender cómo se da esa relación entre los aspectos que ocasionan un fenómeno y el efecto que produce. (Dos Santos, 2017, p 52) 

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
