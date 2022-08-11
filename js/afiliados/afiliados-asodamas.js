const afiliados = {
  asodamas: {
    title: 'Asodamas',
    content:
      'Somos una asociación sin ánimo de lucro fundada en 2008, está integrada por esposas de gobernantes – primeras gestoras y gestores sociales y asociadas de número que en su mayoría son organizaciones de mujeres de base que trabajan por las comunidades más vulnerables de la sociedad colombiana.',
    url: 'https://res.cloudinary.com/protalento/image/upload/f_auto,q_auto/v1660170117/Website/PROtalento/Convocatorias/logo-asodamas-web-x1_khxsnh_mneqmt.png',
  },
  dev: {
    title: 'bvc',
    content:
      'Es la escuela de tecnología más grande y premiada en Latinoamérica. Con más de 8 años, +12,000 capacitaciones y 32 ubicaciones en 12 países de LATAM, hemos sido reconocidos por organizaciones como el Banco Interamericano de Desarrollo (BID), Google, Forbes y otras gracias a los resultados que nuestra comunidad ha logrado.',
    url: 'https://res.cloudinary.com/protalento/image/upload/f_auto,q_auto/v1660169215/Website/PROtalento/Home/logo_bvc_oq8pwn_lofcyc.png',
  },
  primera: {
    title: 'Primera HFC',
    content:
      'Es una organización de alto impacto social que enseña idiomas a los jóvenes y los apoya para mejorar sus oportunidades. Su misión es abrir oportunidades laborales para los jóvenes a través del poder de los idiomas.',
    url: 'https://res.cloudinary.com/protalento/image/upload/q_auto/v1660170113/Website/PROtalento/Convocatorias/Copia_de_logo-horizontal-sinSlogan_1_pjskfs_zbwosq.svg',
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
