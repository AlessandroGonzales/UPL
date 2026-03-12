import unrfceye from "../assets/grupounr.jpg";
import unrder from "../assets/grupoderecho.jpeg";
import prouno from "../assets/prouno.png";
import prodos from "../assets/prodos.png";
import protres from "../assets/protres.png";
import procuatro from "../assets/procuatro.png";
import procinco from "../assets/procinco.png";
import proseis from "../assets/proseis.png";
import enderecho from "../assets/banderauplderecho.jpeg"
import dergrup from "../assets/derechovotos.jpeg"
import hayek from "../assets/hayek.jpg"
import upleco from "../assets/upleco.jpg"

export const facultiesData = {
  fceye: {
    id: "fceye",
    name: "Ciencias Económicas y Estadística",
    short: "FCEyE",
    heroImage: unrfceye,
    historyImages: [upleco, hayek],
    historyShort: [
      "Hace casi un año levantamos la voz en las asambleas para evitar las tomas y defender tu derecho a cursar. Hoy estamos de este lado para defenderte en el barro. No venimos a prometer, venimos a proponer y solucionar: estamos acá para terminar con quienes se abusan de su poder para obtener beneficios a costa de los estudiantes.",
      "Tenemos el compromiso de llevar el ideal liberal a cada rincón de la universidad. Estamos cansados del adoctrinamiento y de los negociados. Vamos a pelear por una educación de mayor calidad, más justa y que esté por y para el estudiante. La libertad hay que cuidarla porque una vida sin ella no merece ser vivida."
    ],
    config: "lazy",
    mission:
      "Transformando la gestión para una facultad eficiente y transparente.",
    description:
      "En Económicas, luchamos contra la burocracia eterna y la falta de rendición de cuentas. Queremos una facultad donde el mérito valga más que los contactos políticos.",
    social: {
      instagram: "https://www.instagram.com/upl.economicasunr/",
      linktree: "https://linktr.ee/upl.economicas?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn9K4s01vtqqE7GJ3izyH2l9C5dm1WA-Pqp1smDdlh-CKu7-dZZIqdnUbOakc_aem_bsfrbBExNeYEQODwYlq1Zw",
      whatsapp: "https://wa.me/5493410000000" 
    },
    challenges: [
      {
        title: "Burocracia",
        desc: "Trámites que tardan meses en digitalizarse.",
      },
      {
        title: "Falta de Auditoría",
        desc: "Cuentas poco claras sobre el uso del presupuesto.",
      },
    ],
    proposals: [
      {
        id: "eco-1",
        number: "01",
        title: "Parciales y Mesas Garantizadas",
        shortDesc:
          "Garantizar exámenes y reprogramación obligatoria ante paros.",
        fullDesc:
          "Garantizar exámenes presenciales o virtuales y la reprogramación obligatoria e inmediata ante paros docentes o de transporte, para que ningún estudiante pierda su fecha ni vea afectado su avance académico.",
        highlight: "EL ESTUDIANTE PRIMERO: SIN PAROS NI TRABAS",
        image: prouno,
      },
      {
        id: "eco-2",
        number: "02",
        title: "Transparencia Total del Presupuesto",
        shortDesc: "Publicación mensual y clara del destino de los fondos.",
        fullDesc:
          "Publicación mensual, clara y accesible del destino de los fondos de la facultad, con rendición de cuentas sobre gastos y mantenimiento de las instalaciones.",
        highlight: "AUDITORÍA DE LOS GASTOS: CUIDEMOS NUESTRO DINERO",
        image: prodos,
      },
      {
        id: "eco-3",
        number: "03",
        title: "Digitalización Total: Apuntes y Trámites",
        shortDesc: "Acceso digital a apuntes y reducción de burocracia.",
        fullDesc:
          "Acceso a apuntes en formato digital y digitalización completa de inscripciones, certificados y solicitudes, reduciendo la burocracia y los costos innecesarios.",
        highlight: "CHAU BUROCRACIA: TU FACULTAD A UN CLIC",
        img: protres,
      },
      {
        id: "eco-4",
        number: "04",
        title: "Evaluación Docente Constante",
        shortDesc:
          "Encuestas anónimas para evaluar el desempeño en las cátedras.",
        fullDesc:
          "Implementar encuestas obligatorias, anónimas y públicas para evaluar el desempeño docente, cuyos resultados influyan en la continuidad y mejora de las cátedras.",
        highlight: "EXIGENCIA Y MÉRITO: LA CALIDAD EDUCATIVA IMPORTA",
        image: procuatro,
      },
      {
        id: "eco-5",
        number: "05",
        title: "Régimen de Virtualidad",
        shortDesc:
          "Clases grabadas y tutorías para quienes trabajan y estudian.",
        fullDesc:
          "Garantizar acceso a clases grabadas, material digital y tutorías online para estudiantes con trabajo, facilitando la continuidad de la carrera.",
        highlight: "ESTUDIAR Y TRABAJAR TIENE QUE SER POSIBLE",
        image: procinco,
      },
      {
        id: "eco-6",
        number: "06",
        title: "Modernización de Contenido",
        shortDesc: "Programas actualizados y pasantías con empresas reales.",
        fullDesc:
          "Actualizar los programas según las demandas actuales y generar convenios con empresas y estudios para pasantías y formación orientada al mundo laboral.",
        highlight: "DE LA FACULTAD DIRECTO AL MUNDO LABORAL",
        image: proseis,
      },
    ],
  },

  derecho: {
    id: "derecho",
    name: "Facultad de Derecho",
    short: "Derecho",
    config: "lazy",
    heroImage: unrder,
    historyImages: [dergrup, enderecho],
    historyShort: [
    "Nacimos de la necesidad de recuperar la excelencia académica que la política partidaria nos quitó. Empezamos siendo tres estudiantes en un pasillo discutiendo sobre la libertad de cátedra, y hoy somos cientos exigiendo respeto por nuestro tiempo y nuestro futuro profesional.",
    "A lo largo de estos años, hemos logrado difundir poco a poco las ideas de la libertad. Nuestra historia en Derecho no la escriben los centros de estudiantes de siempre, la escribimos nosotros, todos los días, defendiendo el derecho a estudiar sin adoctrinamiento."
  ],
    mission:
      "Defendiendo la libertad y el respeto a la Constitución en las aulas.",
    description:
      "En Derecho, nos enfrentamos al adoctrinamiento constante. Buscamos devolverle a la facultad su prestigio académico basado en la ley y la libertad individual.",
    challenges: [
      {
        title: "Adoctrinamiento",
        desc: "Cátedras con una sola visión ideológica.",
      },
      {
        title: "Infraestructura",
        desc: "Abandono edilicio mientras los fondos se desvían.",
      },
    ],
    social: {
      instagram: "https://www.instagram.com/upl.derecho/",
      linktree: "https://linktr.ee/upl.derecho?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnilzSrDmI751Y1gm3-2WnjFiNNyE55LGj_KkOth32jHlI-6v7CF_RxpILyp0_aem_bbXPHSkloqXg80WeGlhsZQ",
      whatsapp: "https://chat.whatsapp.com/G7zklxsRQMC6rkOt9LTIrt?mode=gi_t" 
    },
    proposals: [
      {
        id: "der-1",
        number: "01",
        title: "Nuevo Plan de Estudios 2026",
        shortDesc:
          "Menos materias, más recibidos. Materias optativas y fin del CFE.",
        fullDesc:
          "Buscamos un plan de estudios moderno: sumar materias optativas para que elijas dónde profundizar, eliminar el Ciclo de Formación Especial (CFE), pasar las materias de gran porte a anuales y habilitar la promoción en TODAS las asignaturas.",
        highlight: "MENOS MATERIAS, MÁS RECIBIDOS",
        image: "",
      },
      {
        id: "der-2",
        number: "02",
        title: "Defender al Estudiante (SIE)",
        shortDesc:
          "Mecanismo rápido y sin represalias para impugnar exámenes arbitrarios.",
        fullDesc:
          "Hacer efectivo el Sistema de Impugnación de Exámenes (SIE). Conforme al nuevo reglamento académico, exigimos que ante un examen oral condicionado arbitrariamente, el estudiante tenga una herramienta rápida y sin represalias para impugnarlo antes, durante o después de la mesa.",
        highlight: "BASTA DE ARBITRARIEDADES EN LAS MESAS",
        image: "",
      },
      {
        id: "der-3",
        number: "03",
        title: "Exámenes Garantizados",
        shortDesc: "Que los paros gremiales no te hagan perder el año.",
        fullDesc:
          "Los conflictos gremiales no pueden perjudicar al estudiante. Cuando hay paro, los exámenes deben tomarse o reprogramarse automáticamente con fechas obligatorias. Garantizar el derecho a recibirnos es poder rendir INCLUSO cuando haya paro.",
        highlight: "TU DERECHO A RENDIR NO SE NEGOCIA",
        image: "",
      },
      {
        id: "der-4",
        number: "04",
        title: "Título Intermedio de Procurador",
        shortDesc:
          "Salida laboral anticipada para trabajar formalmente en el rubro.",
        fullDesc:
          "Queremos implementar un título intermedio de PROCURADOR para quienes completan una parte importante de la carrera. Esto permitirá empezar a trabajar formalmente y generar ingresos en el ámbito jurídico sin tener que esperar el título final de abogado.",
        highlight: "SALIDA LABORAL ANTICIPADA",
        image: "",
      },
      {
        id: "der-5",
        number: "05",
        title: "Inserción Laboral Real",
        shortDesc:
          "Bolsa de trabajo y red de pasantías con estudios jurídicos.",
        fullDesc:
          "Creación de una bolsa de trabajo y red de pasantías con estudios jurídicos para adquirir experiencia real mientras cursás. Queremos más experiencia profesional, menos teoría vacía, y que el estudiante consiga los contactos necesarios para insertarse en el mercado laboral.",
        highlight: "MÁS EXPERIENCIA PROFESIONAL, MENOS TEORÍA",
        image: "",
      },
      {
        id: "der-6",
        number: "06",
        title: "Transparencia en el CED",
        shortDesc:
          "Auditoría de los costos de la fotocopiadora y otros servicios.",
        fullDesc:
          "Queremos transparencia real. Exigimos que se auditen de manera pública los costos de la fotocopiadora y otros servicios manejados por el Centro de Estudiantes para asegurar que no haya sobreprecios ni negocios ocultos con los recursos de los alumnos.",
        highlight: "NO MÁS NEGOCIOS CON NUESTROS RECURSOS",
        image: "",
      },
      {
        id: "der-7",
        number: "07",
        title: "Ingreso Meritocrático",
        shortDesc: "Examen de nivelación para frenar la deserción estudiantil.",
        fullDesc:
          "Proponemos un examen de nivelación (no excluyente) que brinde un paneo general de la carrera. El objetivo es asegurar una base sólida desde el primer día, elevando el nivel académico, reduciendo la deserción y formando mejores profesionales.",
        highlight: "MÁS NIVEL ACADÉMICO, MEJORES ABOGADOS",
        image: "",
      },
      {
        id: "der-8",
        number: "08",
        title: "Privacidad y Seguridad",
        shortDesc:
          "Retirar los baños sin género de las instalaciones de la facultad.",
        fullDesc:
          "Creemos que la facultad debe garantizar privacidad, comodidad y seguridad para todos, especialmente para las mujeres. Por eso, proponemos volver a los baños diferenciados por sexo, tal como existe en la inmensa mayoría de los espacios públicos.",
        highlight: "PRIVACIDAD Y COMODIDAD PARA TODOS",
        image: "",
      },
    ],
  },
};
