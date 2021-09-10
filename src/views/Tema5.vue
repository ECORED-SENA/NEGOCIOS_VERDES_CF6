<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 5
      h1 Trabajo de campo

    p(data-aos="fade-down") En este momento del estudio la empresa realizó una alta inversión de tiempo y recursos. Se requiere entonces ejecutar el proceso de trabajo de campo, para lo cual debe tener presupuestados los costos de la fase asociados al entrenamiento, capacitación del personal y a las personas seleccionadas de supervisión. Es importante tener claro que en la fase de entrenamiento se asegura la aplicación de actitudes, normas, valores o principios del personal a cargo de recolectar la información. 
    p(data-aos="fade-down") Con un buen entrenamiento se puede garantizar todo lo anterior, a través de simulaciones de entrevistas con procesos de retroalimentación bien estructurados. 
    p(data-aos="fade-down") Además, habrá momentos que surjan dudas o preguntas, por parte de la población seleccionada como muestra. Lo ideal es que el personal que realiza el trabajo de campo cuente con los conocimientos, la autonomía o empoderamiento necesarios para dar respuesta a estas inquietudes; esto se logra con un buen proceso de capacitación. La capacitación contribuye al desarrollo de los individuos, por tal razón se debe invertir fuerte en esta fase . 

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-10.cajon.color-primario.p-4 
        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a(src='@/assets/ilustraciones/img38.svg', alt='')            
          .col-lg-10.my-3
            p.mb-0  Algunas preguntas por diferentes razones no serán respondidas, esto puede significar un menor grado de sesgo en la hora de responder. En este caso cuando falta responder a una pregunta no necesariamente se debe eliminar toda la encuesta (Dos Santos, 2017). Otros errores frecuentes según Burns y Bush (2017), son los intencionales y no intencionales. Dentro de los intencionales tenemos la tergiversación deliberada que se da cuando el entrevistador intenta influir directamente en la respuesta. Puede ser a través del lenguaje, la redacción de las respuestas, lenguaje corporal, es importante mitigar con los supervisores (Dos Santos, 2017).  

    p.mt-5(data-aos="fade-down") El segundo bloque de errores tiene que ver con los no intencionales, está compuesto por las interferencias de las características del entrevistador sobre las respuestas del entrevistado. Se dan básicamente cuando el entrevistador no le quedó claro el proceso y quedó con dudas. Además, se presentan otros tipos de errores en el trabajo de campo, como los atribuibles a los encuestados, que son:

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-5
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/ilustraciones/img39.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p Las respuestas falsas que se dan cuando el entrevistado por alguna razón miente, como por vergüenza o miedo.       
          .col-lg-5
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/ilustraciones/img40.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p Las no respuestas, que sencillamente son porque la persona se niega a contestar. 

    p.mt-5(data-aos="fade-down") En este caso, cuando se diseña la investigación, lo más importante es la buena preparación del entrenador, la insistencia y persistencia con el entrevistado en la calidad de las respuestas, la buena capacitación con el manejo de las diferentes situaciones, en lo posible la programación o agendamiento de citas para los entrevistados, así mismo como los posibles incentivos estos. La siguiente imagen de la figura 2 presenta la clasificación del eror en la investigación de mercados. 

    .row.justify-content-center.align-items-center.mt-5
      .col-md-8.bg-1.p-4(data-aos="slide-down")      
        .BorTit #[b Figura 2] Clasificación del error en investigación de mercados
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img41.svg', alt='')
        figcaption.mt-3 Nota. Investigación de mercados. Tomado de Dos Santos (2017). 
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

<style lang="sass" scoped></style>
