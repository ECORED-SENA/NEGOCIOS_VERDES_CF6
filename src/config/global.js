export default {
  global: {
    componenteFormativo: 'Administración de la información del mercado',
    descripcionCurso:
      'Mediante la investigación de mercados las organizaciones invierten para tomar decisiones más efectivas a la hora de realizar el plan de mercadeo y la planeación comercial. Esta herramienta facilita la comprensión de los comportamientos de compra y consumo, y a través de estudios cuantitativos y/o cualitativos, la empresa responde a las diferentes problemáticas o necesidades del mercado internas o externas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Investigación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es la investigación de mercados?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Proceso investigación de mercados',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas para la recolección de información ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Instrumentos de recolección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'La encuesta',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Método de observación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Método experimental',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Muestreo',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Trabajo de campo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Informe de investigación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Análisis de la información: la estadística ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: '<i>Software</i> para estadística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Big data',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: '¿Qué es un Sistema de Gestión de Base de Datos',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Componentes de una base de datos',
            hash: 't_10_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.3',
            titulo:
              'Otros tipos de Software o bases de datos usadas como fuentes de información ',
            hash: 't_10_3',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Inteligencia de mercados',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Burns, A. y Bush, R. (2017). Investigación de mercados. Pearson',
    },
    {
      referencia:
        'Dos Santos, M. (2017). Investigación de mercados: manual universitario. Diaz de Santos. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/57508',
    },
    {
      referencia: 'Grupo Meiko. (2021). Meiko. ',
      link: 'https://grupomeiko.com/',
    },
    {
      referencia:
        'Jiménez (2013). Investigación y recogida de información de mercados. IC editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/44108',
    },
    {
      referencia:
        'Kinnear, T. y Taylor, J. (1998). Investigación de Mercados. Mc Graw Hill. ',
    },
    {
      referencia: 'Kotler, P. (2001). Marketing. Prentice Hall. ',
    },
    {
      referencia:
        'Ortiz, J. (2019). Investigación exploratoria: tipos, metodología, y ejemplos. Lifeder. ',
      link: 'https://www.lifeder.com/investigacion-exploratoria/',
    },
    {
      referencia:
        'Plazas, F. (2013). Investigación de mercados: un enfoque gerencial. Ediciones U.',
    },
    {
      referencia:
        'Prieto, J. (2013). Investigación de mercados. Ecoe ediciones. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/69269',
    },
    {
      referencia:
        'Salgueiro, A. (2015). Indicadores de gestión y cuadro de mando. Diaz de Santos. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/63024',
    },
    {
      referencia:
        'Sepulveda, G. (2009). Crm: Customer relationship management. El cid editor. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/28826 ',
    },
    {
      referencia: 'Servinformación. (2021). Servinformación. ',
      link: 'https://servinformacion.com/',
    },
    {
      referencia:
        'Velasco, S.(2015). Gestión de la logística en la empresa: Planificación de la cadena de suministros. Difusora Larousse. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/49058/',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'Es el conjunto de datos informativos organizados en un mismo contexto para su uso y vinculación, su estructura está compuesta por tablas.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'Grupo de intermediarios relacionados entre sí que hacen llegar productos y servicio de los fabricantes a los consumidores y usuarios.',
    },
    {
      termino: 'Comerciante exportador',
      significado:
        'Comerciante que opera en el país del fabricante y compra bienes para exportarlos.',
    },
    {
      termino: 'Competencia',
      significado:
        'Conjunto de organizaciones que comercializan un mismo producto y compiten entre sí por el liderazgo de la categoría.',
    },
    {
      termino: 'Competidores',
      significado:
        'Aquellas empresas que ofrecen el mismo tipo de producto o servicio y compiten por el liderazgo de esa categoría.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad para satisfacer en un mayor grado las necesidades o deseos del mercado que sus competidores.',
    },
    {
      termino: 'Consumo',
      significado: 'Acción de compra repetitiva en el tiempo.',
    },
    {
      termino: 'Datos primarios',
      significado:
        'Datos nuevos reunidos específicamente para el proyecto a mano.',
    },
    {
      termino: 'Datos secundarios',
      significado: 'Datos disponibles, ya reunidos para algún otro propósito.',
    },
    {
      termino: 'Empaque',
      significado:
        'Contenedor o envoltura que sirve para proteger al producto en su distribución.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Método de obtención de datos primarios que se aplica entrevistando en persona, por teléfono, por correo o por internet.',
    },
    {
      termino: 'Estilos de vida',
      significado:
        'Hábitos que se relacionan con las actividades, intereses y opiniones de una persona',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan de acción amplio por el cual una organización trata de alcanzar sus objetivos.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'Parte del producto que contiene la información clave acerca de este y del vendedor.',
    },
    {
      termino: 'Gestión',
      significado:
        'Actividad dirigida al mejoramiento de los procesos de una organización, con el objetivo de mejorar su productividad y administración.',
    },
    {
      termino: 'Intermediarios',
      significado:
        'Personas naturales o jurídicas que facilitan al consumidor el conocimiento y la obtención del producto.',
    },
  ],
  complementario: [
    {
      texto:
        'Aguirre, M. González, C. Abando, J. y Molina, A. (2003). El consumidor ecológico. Distribución y consumo. 178  enero-febrero 2003. ',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/publication/28061197_El_consumidor_ecologico',
    },
    {
      texto:
        'Ortiz, J. (2019). Investigación exploratoria: tipos, metodología, y ejemplos. Lifeder. ',
      tipo: 'Artículo',
      descarga: 'https://www.lifeder.com/investigacion-exploratoria/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Alberto Martínez Gómez',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
