<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 11
      h1 Inteligencia de mercados

    p(data-aos="fade-down") Es el proceso mediante el cual la empresa u organización #[b obtiene, procesa y analiza la información de mercado o de la industria en la que compite] conformada por fuentes secundarias. Puede contener información clave de los clientes, los productos de la competencia, la venta de estos productos, información sobre participación de mercados y perfiles de los clientes, o información específica sobre los posibles canales de distribución como, tipos de establecimientos, ubicación geográfica, frecuencias de compra, tamaño o superficie, cantidades de compra. Para usarla como soporte de sus planes de mercadeo y planeación comercial.
    img.img-t.img-a.my-5(data-aos="fade-down")(src='@/assets/ilustraciones/img61.png', alt='')
    p(data-aos="fade-down") Esta información es elaborada por entidades públicas o privadas, instituciones académicas o empresariales que buscan ampliar el conocimiento del sector o brindar cifras estadísticas del comportamiento de las variables. Para el caso colombiano hay empresas como Nielsen, Meiko o Servinformación que se dedican a procesos de investigación de mercados para posteriormente comercializar esta información a empresas interesadas en adquirirla. Brindando información sobre georreferenciación, aspectos demográficos, psicográficos o conductuales. Las siguientes imágenes son ejemplos de las empresas mencionadas servicios de inteligencia de mercados ofrecidos. 
</template>

<script>
export default {
  name: 'Tema11',
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
