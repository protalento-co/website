const afiliados = {
  stefanini: {
    title: 'Stefanini Group',
    content:
      'Es una multinacional brasileña que actúa en el sector de servicios en tecnologías de la información. Tienen presencia en más de 40 países y se posicionan entre las 100 mayores empresas de TI del mundo (BBC News). Ofrecen procesos de transformación digital, servicios en Consultoría, Integración, Desarrollo de Soluciones, BPO, Outsourcing para Aplicaciones e Infraestructura, entre otras soluciones.',
    url: 'https://res.cloudinary.com/protalento/image/upload/v1658798648/Website/Convocatorias/logo_color_1_mm3ipm.svg',
  },
  dev: {
    title: 'DEV.F',
    content:
      'Es la escuela de tecnología más grande y premiada en Latinoamérica. Con más de 8 años, +12,000 capacitaciones y 32 ubicaciones en 12 países de LATAM, hemos sido reconocidos por organizaciones como el Banco Interamericano de Desarrollo (BID), Google, Forbes y otras gracias a los resultados que nuestra comunidad ha logrado.',
    url: 'https://res.cloudinary.com/protalento/image/upload/v1658798640/Website/Convocatorias/Copia_de_Copia_de_logo-devf_1_qnz7da.svg',
  },
  sufi: {
    title: 'SUFI',
    content:
      'Es una marca creada por el grupo de trabajo de Bancolombia donde siempre podrás encontrar lo que desees ajustando siempre a tus necesidades y sin complicaciones. El ideal de Sufi de Bancolombia es estar presente para cualquier momento de tu vida, donde te acercará a lo que tanto anheles donde y cuando lo quieras.',
    url: 'https://res.cloudinary.com/protalento/image/upload/v1658798623/Website/Convocatorias/Logos_y_Vigilado_Sufi_LOGOS_Logo-rojo_1_zoqebd.svg',
  },
  primera: {
    title: 'Primera HFC',
    content:
      'Es una organización de alto impacto social que enseña idiomas a los jóvenes y los apoya para mejorar sus oportunidades. Su misión es abrir oportunidades laborales para los jóvenes a través del poder de los idiomas.',
    url: 'https://res.cloudinary.com/protalento/image/upload/v1658798632/Website/Convocatorias/Copia_de_logo-horizontal-sinSlogan_1_pjskfs.svg',
  },
  flevo: {
    title: 'Flevo',
    content: '????????????????????',
    url: 'https://res.cloudinary.com/protalento/image/upload/v1658798615/Website/Convocatorias/Isologo-Flevo-secundario-transparente-01-1-e1644858311932_1_ea6psp.svg',
  },
  endava: {
    title: 'Endava',
    content: `
    Endava es una compañía global de IT con presencia en 25 países de Europa, Asia y

    América. Nuestros equipos ágiles ayudan a las más importantes compañías del mundo a

    impulsar sus negocios a través de plataformas dinámicas y experiencias digitales inteligentes.

    Su misión es ayudar a las personas a alcanzar el éxito: clientes, colaboradores, y aquellos que usan y operan los sistemas y aplicaciones que crean. Siguen creciendo en Latinoamérica y, a principios de 2022, sumaron una nueva locación en Monterrey desde donde brindan todo tipo de oportunidades a los profesionales y entusiastas IT de Nuevo León.`,
    url: 'https://res.cloudinary.com/protalento/image/upload/v1658854031/Website/Convocatorias/mexico/Endava_Logo_RGB_Original_cut_y237xh.png',
  },
  accede: {
    title: 'Accede',
    content: `
    Accede es una empresa mexicana que cree en el valor de la educación para lograr una mejor calidad de vida. Cuentan con productos financieros especializados que se adaptan a las necesidades de los estudiantes y sus familias.

    En alianza con PROtalento su propósito es apoyarte para que desarrolles las habilidades y competencias que te darán grandes oportunidades. 
    `,
    url: "https://res.cloudinary.com/protalento/image/upload/v1658854031/Website/Convocatorias/mexico/Asset_1_2x_3_uoqgfd.svg"
  },
  tangelo: {
    title: "Tangelo",
    content: `
    En Tangelo combinan la tecnología y el análisis de datos para crear productos financieros con procesos eficientes y enfocados en el usuario. Nacieron en el 2022, pero su historia va mucho más atrás, cuando decidieron tomar lo mejor de una Fintech Colombiana y una arrendadora Mexicana para crear productos de crédito eficientes, innovadores y sostenibles.

    Son una compañía diversa, que trabaja en equipo para crear productos financieros modernos e innovadores, mientras que expanden las oportunidades de crédito a aquellos que están fuera del sistema financiero tradicional
    .
    `,
    url: "https://res.cloudinary.com/protalento/image/upload/v1658502371/Website/Home/Desktop/logo-color-dark_2x_1_x84ffx.png"
  },
  dojo: {
    title: "Coding Dojo",
    content: "Coding Dojo se ha transformado en la Academia EdTech más relevante a nivel global, a 10 años de su fundación en Silicon Valley y con más de 10 mil casos de éxito de graduados en el mundo. En América Latina contamos con alumnos y ex alumnos de Chile, Colombia, Perú, Ecuador, Uruguay y México. ",
    url: "https://res.cloudinary.com/protalento/image/upload/v1658861077/Website/Convocatorias/pictures/Logo-celeste_1_mljipn.svg"
  }

};

const container = document.querySelector('.afiliados__container');

const afiliadosBox = document.querySelectorAll('.afiliados__box');

afiliadosBox.forEach((item) => {
  item.addEventListener('click', () => {
    const { url, title, content } = afiliados[item.id];
    container.innerHTML = `
    <div>
    <img
      src="${url}"
      alt=""
    />
  </div>

  <div>
    <h3
      class="title title--begin medium-bigger-size c-yellow medium-size"
    >
      ${title}
    </h3>

    <p class="medium-size line-height-md mT-5">
      ${content}
    </p>
  </div>
        `;
  });
});
