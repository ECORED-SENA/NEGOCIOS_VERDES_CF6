<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 9
      h1 Big data
    p(data-aos="fade-down") Los sistemas de información o bases de datos permiten el almacenamiento de mega cantidades de datos estadísticos, administración de la información y describen las actividades de una empresa, y las actividades de una empresa. Por ejemplo:                                      
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="slide-down")      
        .BorTit Una empresa productora y comercializadora de bebidas alcohólicas 
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img.img-t.img-a(src='@/assets/ilustraciones/img51.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="67.2%" y="23.5%")
            p En su base de datos posee información de las diversas áreas de la empresa.     
          .tarjeta.color-acento-botones.p-3(x="70.9%" y="49.8%")
            p Contiene información clave del negocio como de los proveedores.
          .tarjeta.color-acento-botones.p-3(x="67.2%" y="78.2%")
            p Conocen la importancia que tiene la información en toda la organización, ya que estos son el eje principal para la toma de decisiones.                         
    p.mt-5(data-aos="fade-down") El objetivo del presente contenido es lograr que el aprendiz adquiera los fundamentos de como reunir, clasificar, analizar, evaluar y distribuir la información, con el fin de lograr un posicionamiento de su producto o servicio dentro de su entorno .


</template>

<script>
export default {
  name: 'Tema9',
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
