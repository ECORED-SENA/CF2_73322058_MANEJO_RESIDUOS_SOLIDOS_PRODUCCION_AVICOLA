export default {
  global: {
    componenteFormativo:
      'Manejo y disposición de residuos de la producción avícola',
    descripcionCurso:
      'Mediante este componente, el aprendiz se afianzará en el manejo y disposición de residuos de la producción avícola. Ampliará conocimientos y conceptos sobre fuentes generadoras, clasificación, disposición, procedimientos, equipos e instalaciones, identificación de impactos ambientales y plan de gestión de residuos sólidos. Así mismo profundizará en elementos del proceso de seguimiento y evaluación a la gestión de los residuos en favor de procesos de certificación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Residuos en la producción avícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fuentes generadoras',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Disposición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Identificación de impactos ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Plan de gestión de residuos sólidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Documentación del plan de gestión de residuos sólidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Seguimiento y evaluación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Disposición',
      referencia: 'UCSustentable. (2019). Residuos Orgánicos. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8REXZi78MUQ',
    },
    {
      tema: 'Residuos en la producción avícola',
      referencia:
        'UNISARC (2020). Gestión Integral de Residuos Sólidos en Avicultura. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Of2YKwJ8zVM',
    },
    {
      tema: 'Plan de gestión de residuos sólidos',
      referencia:
        'Vital support S.A.S (2021). Gestión de residuos sólidos en Colombia - nuevo código de colores [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BzJ56q8YOPE',
    },
    {
      tema: 'Plan de gestión de residuos sólidos',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible – Colombia Canal. (2016). <i>Planes de gestión integral de residuos sólidos</i> [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GPIcH8RAJTk',
    },
    {
      tema: 'Clasificación',
      referencia:
        'Educa ambientes (2020). Uso de los puntos ecológicos (Resolución 2184 de 2019). [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iPGKz822UQE',
    },
  ],
  glosario: [
    {
      termino: 'Clasificación',
      significado:
        'Lista ordenada de cosas de acuerdo a un criterio determinado.',
    },
    {
      termino: 'Corrosivo',
      significado:
        'Materiales altamente reactivos de acción química y que pueden ocasionar daños graves en humanos y animales.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Tratamiento físico-químico utilizado para destruir microorganismos patógenos dentro de los establecimientos, utensilios o implementos avícolas.',
    },
    {
      termino: 'Desinfectantes',
      significado:
        'Sustancias que se emplean para destruir los microorganismos patógenos.',
    },
    {
      termino: 'Gallinaza',
      significado:
        'Residuo orgánico de las explotaciones avícolas (mezcla entre cama (viruta) y deposiciones de las aves.',
    },
    {
      termino: 'Galpón',
      significado:
        'Sitio en donde se implementa una producción de aves de corral.',
    },
    {
      termino: 'Gases volátiles',
      significado:
        'Grupo de elementos químicos y compuestos químicos con puntos de ebullición bajo.',
    },
    {
      termino: 'Gestión Ambiental',
      significado:
        'Estrategia utilizada para organizar las actividades que afectan al medio ambiente previniendo o mitigando los problemas ambientales.',
    },
    {
      termino: 'PGIRS',
      significado: 'Plan de Gestión Integral de Residuos Sólidos.',
    },
    {
      termino: 'Recurso Hídrico',
      significado: 'Fuente de aguas cantidad y calidad suficientes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fondo Nacional Avícola (2014). Cartilla - normativa ambiental en el sector Avícola. <i>FENAVI</i>.',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/cartillas/cartilla-normativa-ambiental-en-el-sector-avicola/#cartilla-normativa-ambiental/3',
    },
    {
      referencia:
        'Hernández, P. (s.f.). Formulación para un plan integral de residuos sólidos para la avícola Villa Mabe ubicado en El Vino – Cundinamarca. [Trabajo de grado, Especialización en Planeación Ambiental y Manejo Integral de los Recursos Naturales, Universidad Militar Nueva Granada].',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/12097/FORMULACI%D3N%20PARA%20UN%20PLAN%20INTEGRAL%20DE%20RESIDUOS%20S%D3LIDOS%20PARA%20LA%20AVICOLA%20VILLA%20MABE%20UBICADO%20EN%20EL%20VINO%20-%20%20CUNDINAMARCA.pdf?sequence=1',
    },
    {
      referencia:
        'López, R. (2019). Elaboración del plan de manejo ambiental para la Finca El Pradito, con crianza y engorde de pollos ubicado en la vereda vía el triunfo en el municipio de Mesitas del colegio Cundinamarca. Universidad Distrital Francisco José de Caldas.',
      link:
        'https://repository.udistrital.edu.co/bitstream/handle/11349/22770/LopezTorresRuthDamaris2019.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Navarro, C. (2018). Buenas Prácticas en la Producción Avícola.',
      link:
        'https://rdu.unc.edu.ar/bitstream/handle/11086/6348/Navarro%2C%20C.%20Gu%C3%ADa%20de%20buenas%20pr%C3%A1cticas%20en%20la%20producci%C3%B3n%20av%C3%ADcola.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Ortega, C. (2014). Formulación de un plan de manejo ambiental para la granja avícola la paz del Tequendama. [Trabajo de grado, Especialista en Planeación Ambiental y Manejo Integral de Recursos Naturales, Universidad Militar Nueva Granada].',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/13083/Plan%20de%20Manejo%20Ambiental.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'Pedroza, J. (2005). Manual de producción avícola.',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4271/avicultura_2005.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Pinzón, C. (2004). Plan de gestión integral de residuos convencionales y peligrosos en EMCOCABLES S.A. Cajicá. [Proyecto de grado, Ingeniería Ambiental y Sanitaria, Universidad de la Salle].',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=2571&context=ing_ambiental_sanitaria',
    },
    {
      referencia:
        'Rueda, L. (2019). Gestión integral de los residuos sólidos generados en la planta de beneficio avícola “el buen sabor” del municipio del Socorro, Santander. Ingeniería Ambiental. Universidad Libre.',
      link:
        'https://repository.unilibre.edu.co/bitstream/handle/10901/20286/Trabajo%20de%20grado.pdf?sequence=1',
    },
    {
      referencia:
        'Tamayo, M. (2014). Propuesta de manual técnico para el manejo y aprovechamiento de residuos orgánicos avícolas generados en el proceso de producción de huevos. [Proyecto de Grado, Especialización en Gerencia Ambiental, Universidad Libre].',
      link:
        'https://repository.unilibre.edu.co/bitstream/handle/10901/10637/PROYECTO%20DE%20GRADO%20MILENA%20TAMAYO.pdf?sequence=1',
    },
    {
      referencia:
        'Universidad Nacional de Costa Rica (2013). Guía práctica para el manejo de los residuos orgánicos utilizando composteras rotatorias y lombricompost. Universidad Nacional de Costa Rica.',
      link:
        'https://documentos.una.ac.cr/bitstream/handle/unadocs/3818/Manual%20Composteras.pdf?sequence=1&isAllowed=y',
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
        nombre: 'James Dubán Lozano Cuéllar',
        cargo: 'Experto temático',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica ',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
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
        nombre: 'Liliana Marcela Alarcón Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
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
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
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
        nombre: 'Mayra Alejandra Alvarez Diaz',
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
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco',
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
