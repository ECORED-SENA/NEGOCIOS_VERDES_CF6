<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 7
      h1 Análisis de la información: la estadística
    p(data-aos="fade-down") La estadística por su naturaleza numérica o cualitativa, permite medir la intensidad de las variables, recopilar, almacenar, documentar y analizar información que es usada a la hora de sustentar, socializar o vender un proyecto, por lo que su uso en la investigación de mercados es de obligatoriedad. 

    img.img-t.img-a.my-5(data-aos="fade-down")(src='@/assets/ilustraciones/img43.png', alt='')

    p(data-aos="fade-down") Esta disciplina cuenta con un amplio campo de aplicación en diferentes áreas del conocimiento, así mismo dentro de las organizaciones donde todo se mueve con base en cifras, resultados, análisis de variables.

    p(data-aos="fade-down") La estadística permite medir el comportamiento de las variables cuantitativas o cualitativas, en los diferentes periodos de tiempo, para ello las organizaciones invierten recursos en la recopilación y en el análisis de la información, donde el proceso estadístico soporta las diferentes conclusiones, facilitando la toma de decisiones.     

    .row.justify-content-center.align-items-center.my-5(data-aos="flip-down")       
      .col-lg-10.cajon.color-primario.p-4 
        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a(src='@/assets/ilustraciones/img44.svg', alt='')            
          .col-lg-10.my-3
            p.mb-0 Prieto (2013), define la estadística como: #[b “el proceso de recopilar, ordenar, analizar e interpretar datos, hechos observaciones de un fenómeno determinado”].   

    p(data-aos="fade-down") Se reconocen dos tipos de estadística (Prieto, 2013, p 116): 

    .row.justify-content-center.align-items-center.my-5(data-aos="flip-down")       
      .col-lg-8
        .row.mt-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/ilustraciones/img45.svg' alt='AvatarTop')
              
              .tarjeta.color-acento-contenido.bg-avatar-1
                .p-4
                  h5 Estadística descriptiva o deductiva
                  p La cual trabaja con características como promedios o variabilidad de datos, sin profundizar, pero facilitando las comparaciones de los hechos. 

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/ilustraciones/img46.svg' alt='AvatarTop')
              
              .tarjeta.color-acento-botones.bg-avatar-2
                .p-4
                  h5 Estadística analítica o inductiva
                  p Pretende explicar el comportamiento de lo observado, probar la validez de los resultados y descubrir las causas de su actuación para lograr conclusiones más precisas.      

</template>

<script>
export default {
  name: 'Tema7',
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
