<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-8(data-aos="slide-right") 
        .cajon.color-primario.p-5.my-3
          p.mb-0 El crecimiento económico de las poblaciones ha incrementado exponencialmente los niveles de producción, distribución y ventas. Esta situación impulsa la evolución del mercadeo a tal nivel, que en la actualidad los niveles de competitividad organizacional apuntan a modelos de economía sostenible, ampliando los intereses comerciales más allá del solo intercambio que durante décadas fue la razón de ser del mercadeo, que entre sus consecuencias nefastas ocasionó serios daños ecológicos y a la salud del ser humano, pasando a un modelo de marketing social o verde que busca el lucro económico garantizando el uso de políticas de producción y consumo sostenible, más equidad social y mayor grado de cuidado de los recursos naturales para las futuras generaciones.         
      .col-lg-4(data-aos="slide-left")
          img.img-t.img-a(src='@/assets/ilustraciones/img1.svg', alt='')

    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
