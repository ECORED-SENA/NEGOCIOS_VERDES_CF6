<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 8
      h1 <i>Software</i> para estadística

    p(data-aos="fade-down") En la investigación de mercados existe software o paquetes estadísticos que permiten almacenar, tabular, realizar análisis y sacar conclusiones, como es el caso del SPSS (#[i statistical package for the social sciences]), Stata, R o JMP. Algunos son gratuitos, para acceder a otros se debe pagar por el derecho al uso como el SPSS (#[i statistical package for the social sciences]), que traducido al español es paquete estadístico para ciencias sociales.
    h5.mt-5(data-aos="fade-down") SPSS:
    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-10 
        .row.justify-content-center.align-items-center.my-5     
          .col-lg-5(data-aos="fade-right")  
            img.img-t.img-a(src='@/assets/ilustraciones/img47.svg', alt='')

          .col-lg-7(data-aos="fade-left")  
            .row.justify-content-center.align-items-stretch(data-aos="flip-down")       
              .col-lg-2.card-img-color-1.p-4.text-just
                img.img-t.img-a(src='@/assets/ilustraciones/img48.svg', alt='')
              .col-lg-10.card-img-color-2.text-just
                p.p-3.mb-0 Para acceder a este se debe realizar el pago, ya que el servicio contiene tabulación de la información, tratamiento de datos, además realiza análisis de la información. 

            .row.justify-content-center.align-items-stretch.mt-4(data-aos="flip-down")       
              .col-lg-2.card-img-color-1.p-4.text-just
                img.img-t.img-a(src='@/assets/ilustraciones/img49.svg', alt='')
              .col-lg-10.card-img-color-2.text-just
                p.p-3.mb-0 Permite elaborar bases de datos o gestionar una nueva.

            .row.justify-content-center.align-items-stretch.mt-4(data-aos="flip-down")       
              .col-lg-2.card-img-color-1.p-4.text-just
                img.img-t.img-a(src='@/assets/ilustraciones/img50.svg', alt='')
              .col-lg-10.card-img-color-2.text-just
                p.p-3.mb-0 Contiene la opción ventana de datos que brinda la posibilidad de ingresar por vista de datos para, visualizar, analizar datos o cifras estadísticas y la opción vista de variables que brinda la posibilidad de realizar análisis de tipo cualitativo.                                
        
    p.mt-5(data-aos="fade-down") El software funciona de la siguiente manera: una vez se ingresan cada una de las variables, luego se puede ingresar los datos. En ambos casos las columnas van a representar las variables y las filas el número de casos. El programa permite importar información o archivos, abrir o guardar información, desde otra plataforma o paquete ofimático (Dos Santos, 2017).

    p(data-aos="fade-down") Los sistemas de información o bases de datos permiten el almacenamiento de mega cantidades de datos estadísticos, administración de la información y describen las actividades de una empresa, y las actividades de una empresa.  

</template>

<script>
export default {
  name: 'Tema8',
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
