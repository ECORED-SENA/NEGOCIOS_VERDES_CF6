<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 10
      h1 Bases de datos

    p(data-aos="fade-down") Una base de datos es aquella cantidad o conjunto que componen todos los datos informativos de una empresa que son organizados y almacenados dentro de un mismo contenido, para ser usada y vinculada, respondiendo a las diferentes necesidades de información de la empresa. En una base de datos se almacena gran cantidad de contenidos, una vez creada se puede permanentemente acceder a ella. La información almacenada puede actualizarse con la frecuencia requerida. La sumatoria de todos los datos o contenidos en una base de datos es lo que se conoce como información, lo que pretende es generar el conocimiento.

    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='') 
    #t_10_1.titulo-segundo.mt-5(data-aos="slide-right")
      h2 10.1 ¿Qué es un Sistema de Gestión de Base de Datos?

    p(data-aos="fade-down") El SGBD (Sistema gestor de bases de datos) es uno de los software más conocidos y usados. Su funcionalidad radica en que permite realizar permanentemente mantenimiento a la información almacenada, a través de una aplicación para la toma de decisiones. Es lo que se conoce como gestión de la información. El SGBD es un sistema seguro que permite mayor nivel de eficiencia y facilita el acceso o concurrencia permanente por muchos usuarios a cualquier hora o momento según la política de la organización. Permite el análisis a los datos y responder preguntas a través de las consultas realizadas a sus contenidos. 

    p(data-aos="fade-down") A continuación, se relacionan algunas de las preguntas que se podrían plantear en SGBD o (sistemas gestores de bases de datos). 
    .row.justify-content-center.align-items-stretch.mt-3(data-aos="flip-down")       
      .col-lg-10    
        .row.justify-content-between.align-items-stretch.mt-3.mb-0(data-aos="fade-right")       
          .col-lg-4.my-3
            .card-num-color-1.p-3
              img.img-t(src='@/assets/ilustraciones/01.svg', alt='')
              p.mt-4 ¿Cómo se llama el alumno con ID 123456?     
          .col-lg-4.my-3
            .card-num-color-1.p-3
              img.img-t(src='@/assets/ilustraciones/02.svg', alt='')
              p.mt-4 ¿Cuál es el sueldo medio de los profesores que imparten la asignatura CS564?    
          .col-lg-4.my-3
            .card-num-color-1.p-3
              img.img-t(src='@/assets/ilustraciones/03.svg', alt='')
              p.mt-4 ¿Cuántos alumnos se han matriculado en CS564?                      
        .row.justify-content-center.align-items-stretch.mt-3.mb-0(data-aos="fade-left")       
          .col-lg-4.my-3
            .card-num-color-1.p-3
              img.img-t(src='@/assets/ilustraciones/04.svg', alt='')
              p.mt-4 ¿Qué proporción de los alumnos de CS564 obtuvieron una nota superior a notable?    
          .col-lg-4.my-3
            .card-num-color-1.p-3
              img.img-t(src='@/assets/ilustraciones/05.svg', alt='')
              p.mt-4 ¿Hay algún alumno con nota menor de 6,0 matriculado en CS564?     

    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='') 
    #t_10_2.titulo-segundo.mt-5(data-aos="slide-right")
      h2 10.2 Componentes de una base de datos

    p.mt-5(data-aos="fade-down") Los procesos tecnológicos y la innovación cada día van con más rapidez y su beneficio puede llegar a condicionar estratégica y operativamente el buen funcionamiento de las empresas, cuando no se mueven a la misma velocidad del cambio tecnológico. La incorporación de nuevos sistemas de información, el desarrollo tecnológico genera ahorro, rapidez, mayor grado de interacción con los consumidores, capacidad de respuesta rápida, gestión eficiente y efectiva de grandes cantidades de datos, aumento en la satisfacción del servicio al cliente y en la rentabilidad de cada uno de los departamentos que hacen parte de la compañía. Es de suma importancia conocer directamente los que impactan en la relación con los clientes, por ello es importante conocer los componentes de una base de datos: 
    .row.justify-content-center.align-items-stretch.mt-5(data-aos="flip-down")       
      .col-lg-10 
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img.img-t.img-a(src='@/assets/ilustraciones/img52.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="4.5%" y="3%")
            p Es la sumatoria, el conjunto o total de datos que se han ingresado en la tabla, disponibles para procesar, actualizar y analizar. Como se muestra a continuación en la figura ponentes de una tabla:       
          .tarjeta.color-acento-botones.p-3(x="31.5%" y="50.5%")
            p Contienen el universo o datos de información o registros disponibles para analizar. Se consideran también como espacios de almacenamiento que permiten al productor de la tabla guardar, actualizar la información que estará estructurada por datos y registros. En una Base de datos dependiendo de su tamaño, funcionalidad o necesidades pueden agregarse variedades de tablas, dependiendo también de la capacidad de almacenamiento y capacidad de gestión o administración que posea el propietario de la información o empresa.         
          .tarjeta.color-acento-botones.p-3(x="57.8%" y="79.2%")
            p Tiene que ver con cada uno de los campos que se utilizan dentro de una tabla, por ejemplo, la tabla de información en una universidad para carreras de pregrado seria, nombres de los programas, cantidad de créditos educativos, duración de los créditos, datos personales profesores del programa, perfil del egresado etc. En los campos se debe establecer una llave primaria o campo que permita clasificar y que sea único, para nuestro ejemplo el campo que no se repite sería el de Nombre del programa.         

    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='') 
    #t_10_3.titulo-segundo.mt-5(data-aos="slide-right")
      h2 10.3 Otros tipos de software o bases de datos usadas como fuentes de información 

    p.mt-5(data-aos="fade-down") A continuación se profundizará en el estudio de algunos de los software y bases de datos que se utilizan para la toma de información.
    p(data-aos="fade-down") Las empresas suelen utilizar software de servicio al cliente para permitir un soporte al cliente más rápido y de manera eficiente.

    h4.mt-5(data-aos="fade-down") CRM (#[b #[i Customer Relationship Management]])

    p(data-aos="fade-down") Se debe visualizar el siguiente video y conocer qué es un CRM:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ky73iaXuuTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h4.mt-5(data-aos="fade-down") CMI (#[b Cuadro de Mando Integral])

    p(data-aos="fade-down") Las organizaciones son estructuras organizadas por áreas operativas, sus directivos luchan con frecuencia por hacer cada área productiva; para ello deben cumplir con unos indicadores de eficiencia y efectividad que permiten establecer compromisos, realizar seguimiento, controlar o evaluar el desempeño de las diferentes áreas. Con el CMI (#[b Cuadro de Mando Integral]), se busca que en toda la organización, empezando por los niveles más altos, se estructuren indicadores de gestión que garanticen la mejora continua empresarial desde las áreas o procesos de personal, mejora continua en los procesos, mejora en los indicadores de servicio al cliente y por último con el modelo CMI (Cuadro de Mando Integral), se espera que, ejecutan estos procesos mencionados esto impacte positivamente en mejores resultados económicos o las finanzas que es el cuarto proceso del modelo CMI.

    p(data-aos="fade-down") Es importante que desde la alta directiva y en toda la estructura de la organización en el día a día se comporten o actúen acorde a la misión y valores corporativos. Con el modelo del CMI (Cuadro de Mando Integral) se garantiza la implementación, seguimiento, control y cumplimiento a los indicadores de gestión del proceso personal.  

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p <b>Recordar que</b>:<br>

                  |Es necesario el diseño de actividades dirigidas a fomentar la vivencia y apropiación en todos los niveles de la cultura corporativa. Actuar siempre en función de la misión y valores institucionales; creando al interior de la empresa un modelo de sentido de pertenencia de parte de los colaboradores, con base en incentivos o reconocimientos permanentes; ya que el buen desempeño y los buenos comportamientos al interior de las organizaciones hay que reconocerlos.         
            .col-lg-4.mb-4.mb-lg-0
              img.img-t.img-a(src='@/assets/ilustraciones/img53.svg', alt='')

    p.mt-5(data-aos="fade-down") Una vez que ya se tienen contratados a los mejores, se requiere ejecutar o llevar a cabo un estricto proceso de inducción, en este proceso el nuevo colaborador va a empezar a generar a diario una serie de percepciones sobre la empresa y sus nuevos compañeros de trabajo; es donde los valores corporativos y la disciplina operativa o mejora continua en los procesos juegan un papel importante. El nuevo empleado debe sentir que no son solo letra muerta y que al interior todos los vivencian, esto genera realmente confianza y seguridad por saber o tener claro a donde llegó.              

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5(data-aos="fade-right")
        img.img-t.img-a(src='@/assets/ilustraciones/img54.svg', alt='')
      .col-lg-5(data-aos="fade-left")
        p(data-aos="fade-down") Posterior al buen proceso de selección y a la fase de inducción, se requiere de entrenamiento permanente en busca de que el nuevo empleado produzca los resultados esperados. Con un buen proceso de entrenamiento, estructurado desde el inicio en el modelo CMI (Cuadro de Mando Integral), se garantiza la transferencia de competencias laborales que desarrollen autonomía e independencia necesarias para que el empleado se empodere de su cargo o las funciones de este, y alcance los objetivos. 
        p(data-aos="fade-down") Las personas bien entrenadas, capacitadas y comprometidas, se van a sentir a diario motivadas; porque dan los resultados esperados, además sienten que la empresa invierte en ellos, como consecuencia los procesos mejoran notablemente, ni hablar del proceso de servicio al cliente, los usuarios o clientes perciben ese sentido de pertenencia, lealtad y amor de los empleados por su empresa, identifican un proceso de servicio al cliente que cuida los detalles, el buen relacionamiento y el interés por satisfacer las necesidades o deseos de sus clientes, lo que genera preferencia, lealtad de los clientes y por ende mejores ingresos para la empresa.      

    p.mt-5(data-aos="fade-down") El CMI es un sistema de gestión organizado coherentemente bajo cuatro perspectivas diferentes:
    .row.justify-content-center.align-items-center.mt-5
      .col-md-8.bg-1.p-4(data-aos="slide-down")      
        .BorTit #[b Figura 3] Perspectivas CMI 
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img55.svg', alt='')
        figcaption.mt-3 Nota. Tomado de Salgueiro (2001). 

    p.mt-5(data-aos="fade-down") El uso del cuadro de mando integral, es para alinear los objetivos del plan estratégico con la parte operativa. Es la forma más eficiente de ordenar y recoger información de la empresa y junto con este recoger los indicadores de gestión más representativos de cada área o departamento.

    .tarjeta.color-acento-botones.p-4.p-md-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/ilustraciones/img56.svg")

        .col-md.col-lg-6
          h3 Cuadro de Mando Integral
          p.mb-4 A continuación, se citan ejemplos de los principales indicadores de gestión contemplados para cada una de las cuatro perspectivas (perspectiva del personal, mejora continua de procesos, los clientes y la perspectiva financiera) del modelo CMI (Cuadro de Mando Integral), propuesta por Salgueiro (2001). 
          
          a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Cuadro_de_Mando_Integral.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    h4.mt-5(data-aos="fade-down") RFDI (#[i Radio Frequency Identification])

    .row.justify-content-center.align-items-center.my-5(data-aos="flip-down")       
      .col-lg-10.cajon.color-primario.p-4 
        .row.justify-content-center.align-items-center
          .col-lg-2
            img.img-t.img-a(src='@/assets/ilustraciones/img44.svg', alt='')            
          .col-lg-10.my-3
            p.mb-0 Es un tipo de tecnología que facilita la recepción, identificación, almacenamiento y transmisión de forma inalámbrica de diferentes datos de productos a través de otros dispositivos, lo cual facilita el trabajo en el equipo de distribución o el departamento asignado. 

    .row.justify-content-center.align-items-start.mt-5(data-aos="flip-down")       
      .col-lg-5.mb-4(data-aos="slide-right")
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Las etiquetas RFID son unos dispositivos pequeños, similares a una pegatina, que pueden ser adheridas o incorporadas a un producto, un animal o una persona. Contienen antenas para permitirles recibir y responder a peticiones por radiofrecuencia desde un emisor-receptor RFID.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Velasco, 2013, p 171

      .col-lg-5.mb-4(data-aos="slide-left") 
        p(data-aos="fade-down") Esta tecnología permite desde la recepción del producto realizar una trazabilidad o seguimiento a su recorrido, además brinda la posibilidad de localizar cualquier producto dentro de la cadena de suministro, brindando información sobre este. En lo referente a la trazabilidad, las etiquetas podrían tener gran aplicación, ya que pueden grabarse, con lo que se podría conocer el tiempo que el producto estuvo almacenado, en qué sitios, etc., optimizando así el manejo de los productos en las cadenas de suministro (Velasco, 2013). 

    h4.mt-5(data-aos="fade-down") ECR (#[b #[i Efficient Customer Response]]) - Respuesta Eficiente al Consumidor.  
    p.mt-5(data-aos="fade-down") Este sistema:
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="fade-down")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Permite la recogida o captura de información en cuanto a inventarios de productos.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Facilita el intercambio de esta información.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Agiliza la solicitud de pedidos entre el proveedor y cliente, a través de dispositivos electrónicos, agilizando el suministro de las solicitudes de pedidos del cliente al proveedor, contribuyendo con la optimización y eficiencias de tiempos en la gestión de la cadena de suministros. 
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Garantiza el nivel de stocks de seguridad en los puntos de venta.  

    p.mt-5(data-aos="fade-down") #[b Por ejemplo]: 
    p(data-aos="fade-down") Una vez que el canal o cliente, en este caso El Corte Ingles, envía al proveedor el mensaje con la información de sus inventarios de productos, el proveedor, en este caso Coca-Cola, quien tiene la información vía históricos de ventas y pronósticos de demanda, se encarga de sugerir el pedido. Luego con el visto bueno del cliente este es enviado.  

    .row.justify-content-center.align-items-center.mt-5
      .col-md-8.bg-1.p-4(data-aos="slide-down")      
        .BorTit #[b Figura 4] Sistema emisión de pedidos mediante ECR
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img58.svg', alt='')
        figcaption.mt-3 Nota. Sistemas emisión de pedidos mediante ECR. Tomado de Velasco (2013). 

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-6.mb-4(data-aos="slide-right")
        p En el proceso de comercialización o ventas tradicionales, se da normalmente la visita de un vendedor asesor, quien verifica la cantidad de stocks de producto disponibles en la superficie de venta, tanto en la bodega como en los diferentes exhibidores y puntos de venta, para luego validar estas cantidades con el responsable del punto de venta en hacer los pedidos y por último realizar el cruce del inventario sugerido menos el inventario actual para realizar la toma de pedido. Con el uso de nuevas tecnologías aplicadas al proceso de servicio al cliente como el EDI (intercambio electrónico de datos), se brinda una Respuesta Eficiente al Consumidor, mejorando los tiempos de espera, atención y respuesta del cliente. 

        p Por parte del proveedor, el proceso facilita y organiza la labor de almacenaje, manejo de inventarios y despacho de mercancías, a través de soporte tecnológico, software compartido y equipos tecnológicos que facilitan el proceso de comunicación comercial permanente para la toma o envío de pedidos de parte del cliente al proveedor, sin la intermediación de un vendedor asesor.

      .col-lg-6.mb-4(data-aos="slide-left") 
        .imagen-titulo--izq.color-primario
          figure.mb-5
            img(src='@/assets/ilustraciones/img59.png', alt='') 

    p.mt-1(data-aos="fade-down") #[b ¿Cómo funciona el EDI?]
    p(data-aos="fade-down") Cada vez que en el canal de distribución se produce una venta, el sistema descarga o resta la unidad vendida del inventario del canal de distribución, en este caso el Corte Ingles, este es un conjunto de estrategias en las que clientes y proveedores trabajan conjuntamente para aportar valor añadido a los consumidores, pero a la vez reduciendo los costes de gestión de pedidos y almacenaje.  
    .row.justify-content-center.align-items-center.mt-5
      .col-md-8.bg-1.p-4(data-aos="slide-down")      
        .BorTit #[b Figura 5] Sistema emisión de pedidos mediante EDI
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img60.svg', alt='')
        figcaption.mt-3 Nota. Sistemas emisión de pedidos mediante EDI. Tomado de Velasco (2013).
</template>

<script>
export default {
  name: 'Tema10',
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
