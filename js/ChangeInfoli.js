const li = document.querySelectorAll('.box__li');
const content = document.getElementById('content');

const text = [
  [
    'Aprender a trabajar con HTML y CSS para desarrollar sitios web estáticos, responsivos',
    'Uso básico de Git y Github para generar portafolio y desplegar sitios web.',
    'Lógica de programación con JavaScript para manipular HTML y CSS mediante el DOM',
  ],
  [
    'Aprender a reconocer y utilizar estructuras de datos y algoritmos de búsqueda y ordenamiento con JavaScript para manejar datos eficientemente.',
  ],
  [
    `Obtener los conocimientos básicos sobre desarrollo de SPAs con React.js para crear aplicaciones robustas del lado del cliente.
    `,
  ],
  [
    `
    Aprender a desarrollar REST APls con Express.js y como funcionan las bases de datos y el lenguaje de consulta SQL para mejorar la persistencia de datos de una aplicación.
    `,
  ],
  [
    `
    Aprender técnicas avanzadas de desarrollo Backend como arquitectura mvc, manejo de errores y autenticación para desarrollar aplicaciones backend fáciles de escalar y mantener.
    `,
  ],
  [
    `
    Describir información relacionada con el desarrollo de software.
    `,
    `
    Intercambiar información acerca de la lógica, sus principios y métodos.  
    `,
    `
    Identificar información acerca de la historia del software y sus características.

    `,
    `
    Hacer sugerencias en el contexto de compartir ideas relacionadas con el desarrollo de software.
    `,
    `
    Identificar características relacionadas con el desarrollo de software.
    `,
  ],
  [
    `
    Entender información esencial acerca de conceptos, principios y metodologías. 
    `,
    `
    Hablar acerca de técnicas de programación, casos de uso, tipo y secuencias. 
    `,
    `
    Intercambiar información acerca de conceptos y principios en el desarrollo de software.
    `,
    `
    Intercambiar información relacionada con el desarrollo de software y los lenguajes de programación.
    `,
  ],
  [
    `
    Dar información detallada relacionada con la historia de los lenguajes de programación en diferentes periodos.
    `,
    `
    Explicar rasgos fundamentales relacionados con los lenguajes de programación en diferentes contextos.
    `,
    `
    Hablar de temas particulares y específicos relacionados con el desarrollo de software.
    `,
    `
    Explicar en detalle cómo funcionan diferentes lenguajes de programación.
    `,
  ],
  [
    `
    Acompañamiento en procesos de selección con nuestros aliados.
    `,
    `
    Creación de tu marca personal.
    `,
    `
    Activación en redes profesionales.
    `,
    `
    Dashboard de seguimiento a ofertas laborales.
    `,
    `
    Negociaciones laborales y salariales.
    `,
  ],
  [
    `
    Alineación de tus talentos, propósito y habilidades.
    `,
    `
    Aterrizar plan de carrera.
    `,
    `
    Construcción de redes de contacto.
    `,
    `
    Plan y proyecciones económicas de carrera.
    `,
    `
    Desarrollo de habilidades del siglo 21
    `,
  ],
  [
    `
    Aprender a aprender.
    `,
    `
    Cómo administrar nuestra energía y alcanzar nuestros sueños.
    `,
    `
    Mentalidad de crecimiento y determinación para retar el cerebro.
    `,
    `
    Uso del tiempo para tener equilibrio.
    `,
    `
    Decidir por prioridad e importancia para crecer.
    `,
  ],
  [
    `
    ¿Te has quedado sin palabras ante esa pregunta ambigua en la entrevista? ¿No sabes en dónde empezar a buscar vacantes? ¿Sientes que tu hoja de vida no refleja todo tu potencial?
    `,
    `
    En este curso aprenderás:
    `,
    `
    Herramientas laborales (comunicación, planeación y organización).
    `,
    `
    Hoja de vida y perfil de Linkedin
    `,
    `
    Canales de búsqueda de trabajo
    `,
  ],
  [
    `
    Ya has sido seleccionado en el trabajo de tus sueños, ahora el reto es quedarte, enfrentar los retos laborales, personales y encontrar ese punto de equilibrio que te permitirá seguir creciendo.
    `,
    `
    En este curso aprenderás:
    `,
    `
    Autogestión​
    `,
    `
    Tolerancia a la frustración​
    `,
    `
    Capital social y redes​
    `,
    `
    Manejo del tiempo​
    `,
    `
    Propósito de vida​
    `,
  ],
  [
    `
    Comienza tu viaje creando contenidos web con Html
    `,
    `
    ¡Haz que tu página web destaque! Aplicaremos CSS para diseñar y maquetar el contenido html. ¡Da vida a tu sitio! Haz tu sitio dinámico con el uso de JavaScript.
    `,
  ],
  [
    ` Programación orientada a objetos en Python.
Crea tu primer software de forma rápida y escalable.`,

    `Bases de datos relacionales, Frameworks y patrones de diseño de Python MVC.`,
    `Al igual que en un entorno de trabajo real, aprende a crear aplicaciones para escalarlas fácilmente y colaborar con otros desarrolladores. Lograrás almacenar datos de forma segura y generar la experiencia de usuario.`,

    `Podrás crear una versión a escala de una experiencia de compra en línea, con funciones de pago y carrito de compras.`,

    `Crea una herramienta de recopilación de información automatizada que pueda escanear y extraer datos de las interfaces del sitio web.`,

    `Cada sitio necesita un inicio de sesión, ¿verdad? Te mostraremos cómo crear esta función fundamental que utilizan todos los sitios web.`,
  ],
  [
    `
    Crearás tu software, desarrollarás proyectos en la práctica y trabajarás en equipo.
    `,
  ],
  [
    `
    Comienza tu viaje creando contenidos web con Html
    `,
    `
    ¡Haz que tu página web destaque! Aplicaremos CSS para diseñar y maquetar el contenido html. ¡Da vida a tu sitio! Haz tu sitio dinámico con el uso de JavaScript.
    `,
  ],
  [
    `
    Diseño de base de datos NoSQL Aprende a almacenar datos y a generar experiencia de usuario con MERN.
    `,
    `
    Crearás aplicaciones, un mini sitio web, una red social a escala en la que los usuarios puedan comunicarse en tiempo real o un e-commerce.
    `,
    `
     Aprenderás a crear las funciones de un chat en tiempo real ¡No es tan fácil como parece!
    `,
  ],
  [
    `
    Crearás tu software, desarrollarás proyectos en la práctica y trabajarás en equipo.
    `,
  ],
  [
    `
    Aprenderás los fundamentos de Python y la Ciencia de Datos. Manipulación, carga, limpieza y comprensión de datos. También te introduciremos en el aprendizaje automático y estadísticas experimentando con datos reales.
    `,
    `
    Concluirás con un proyecto para mostrar tus conocimientos.
    `,
  ],
  [
    `¿Qué es el aprendizaje automático y por qué deberías usar Python Scikit-Learn? `,

    `Aprenderás sobre una gran cantidad de algoritmos, cómo medirlos, maximizar su rendimiento, agruparlos, sus hiperparámetros, fortalezas y debilidades.`,

    `Concluirás con un proyecto para mostrar tus conocimientos.`,
  ],
  [
    ` Qué es el aprendizaje no supervisado y cuáles son sus aplicaciones.  Algoritmos de aumento de gradiente y competencias de Kaggle. También trabajarás SQL con Python.`,

    `Aprenderás todo sobre Deep Learning: redes neuronales recurrentes (RNN) y redes neuronales convolucionales (CNN) y concluirás con un proyecto.`,
  ],
];

li.forEach((item, idx) => {
  item.id = idx;

  item.addEventListener('click', () => {
    li.forEach((item) => item.classList.remove('bg-blueLight'));

    if (item.id === idx.toString()) item.classList.add('bg-blueLight');

    changeInfo(idx);
  });

  changeInfo(0)
});

// change info
function changeInfo(id) {
  // limpia
  content.innerHTML = '';

  // Crear
  text[id].map((parrafo, idx) => {
    let p = document.createElement('p');

    let text = document.createTextNode(parrafo);

    p.appendChild(text);

    p.classList.add('line-height-md', 'medium-size');

    if (idx !== 0) {
      p.classList.add('mT-1');
    }

    content.appendChild(p);
  });
}
