export const items = [
  {
    id: 23,
    title: "Apex - Sporote",
    liveSiteUrl: "",
    githubUrl: "",
    source: "Trabajo autónomo",
    desc: "Sitio web que permite gestionar reclamos de los usuarios y visualizar la información en tablas y gráficos",
    explanation:
      "Desarrollar una plataforma que permita a los operarios de un call center registrar y consultar incidencias a través de un formulario interactivo y una tabla que muestra los reportes almacenados en MongoDB./n/n Por otro lado, incorpora un segundo formulario y una tabla especializada para la gestión de seguimientos y adelantos, diseñados específicamente para los supervisores. Además, la aplicación ofrece gráficos dinámicos que facilitan la visualización de estadísticas relevantes, y su arquitectura optimizada garantiza un rendimiento excepcional mediante un renderizado eficiente y una experiencia de usuario fluida",
    level: "intermediate",
    technologies: ["next", "tailwind", "mongo"],
    feedback:
      "Trabajar de manera autónoma en este proyecto para la empresa APEX me permitió mejorar significativamente mi comunicación con el cliente, en este caso, los gerentes de la empresa. A través de reuniones y un constante ida y vuelta, pude comprender sus necesidades, analizar el sistema que utilizaban y proponer soluciones acordes, seleccionando las herramientas de software y arquitecturas más adecuadas para el caso./n/n  Además, esta experiencia me permitió notar un detalle importante sobre el hosting en planes gratuitos de Vercel. Inicialmente, ejecutaba las solicitudes de datos (fetch) del lado del servidor, pero al notar que esto generaba latencias significativas debido al estado standby del servidor en el plan gratuito, decidí mover los fetchs al lado del cliente. Este ajuste mejoró notablemente el rendimiento del sitio, evitando demoras en la respuesta del servidor y optimizando métricas clave como el Largest Contentful Paint (LCP) en Lighthouse de Google./n/n Fue un proceso muy enriquecedor tanto a nivel técnico como en la interacción con el cliente, lo que reforzó mis habilidades en la toma de decisiones y adaptación a los requerimientos del proyecto.",
    image: "/projects/fullstack/apex/apex-1.png",
    images: [
      "/projects/fullstack/apex/apex-1.png",
      "/projects/fullstack/apex/apex-2.png",
      "/projects/fullstack/apex/apex-3.png",
      "/projects/fullstack/apex/apex-4.png",
      "/projects/fullstack/apex/apex-5.png",
    ],
  },
  {
    id: 21,
    title: "Kass Tienda",
    liveSiteUrl: "https://kass-tienda.vercel.app/",
    githubUrl: "https://github.com/eduviana/kassTienda",
    source: "Personal",
    desc: "Sitio web para una tienda de accesorios y productos tecnológicos con pasarela de pagos.",
    explanation:
      "El dueño de un negocio de articulos de tecnología me plantió la necesidad de crear un sitio web en el cual él mismo pueda agregar, modificar y eliminar la información de los productos de las distintas secciones que posee la página./n/n Además me comentó que se siente cómodo trabajando con hojas de cálculo al estilo Excel, por lo que luego de investigar posibles soluciones que satisfagan estos requerimientos, le sugerí realizar la base de datos en una hoja de cálculo de Google utilizando la Api de Googlesheets./n/n El documento cuanta con varias páginas, en donde cada página es una categoría de productos. Mediante esta división logramos que sea más fácil de ubicar un producto y realizar las modificaciones necesarias. El sitio utiliza el servicio de Stripe para lo que respecta a los pagos y también el paquete use-shopping-cart proveído por el mismo servicio para administrar el carrito de compras y la seguridad del mismo.",
    level: "intermediate",
    technologies: ["next", "tailwind"],
    feedback:
      "Este proyecto representa mi primera incursión en un proyecto real, donde asumí la responsabilidad de comprender los requisitos del cliente, explorar diversas soluciones y establecer un diálogo constante tanto con el propietario como con los futuros usuarios./n/n Este proceso me llevó a investigar y determinar las tecnologías más adecuadas para abordar de manera integral todos los requisitos necesarios para garantizar el funcionamiento del sistema según las especificaciones del cliente./n/n En el desarrollo de esta iniciativa, adquirí experiencia en la implementación de la API de Google Sheets, integrándolo eficazmente en un entorno de Next.js. Además, opté por utilizar el paquete de npm denominado use-shopping-cart proporcionado por Stripe, el cual ofrece funcionalidades robustas para la gestión del carrito de compras./n/n Cabe destacar que existen dos enfoques para la implementación de este paquete: del lado del cliente y del lado del servidor. Elegí el enfoque del lado del servidor, ya que es la opción más segura y recomendada. Además, al estar basado en el framework de Next.js consideré apropiado complementar los server components con esta funcionalidad serverless, mejorando así la eficiencia y seguridad del sistema.",
    image: "/projects/fullstack/kassTienda/kass_1.png",
    images: [
      "/projects/fullstack/kassTienda/kass_1.png",
      "/projects/fullstack/kassTienda/kass_2.png",
      "/projects/fullstack/kassTienda/kass_3.png",
      "/projects/fullstack/kassTienda/kass_4.png",
      "/projects/fullstack/kassTienda/kass_5.png",
    ],
  },
  {
    id: 1,
    title: "Movix",
    liveSiteUrl: "https://movix-nu-six.vercel.app/",
    githubUrl: "https://github.com/eduviana/movix",
    source: "YouTube",
    desc: "Página web de películas y series que utiliza la API gratuita 'The Movie Database'. ",
    explanation:
      "El objetivo de este proyecto es crear un sitio en el cual se pueda consumir contenido tanto de películas como series consumiendo una API. La idea central es utilizar algun manejador de estados y lograr un diseño agradable y moderno. El sitio debe ser responsive y debe estar componetizado para reutilizar el código.",
    level: "advanced",
    technologies: ["react", "sass", "redux"],
    feedback:
      "Realizando este proyecto aprendí que por más que estemos utilizando un manejador de estados no es necesario ni recomendado que todos los estados residan en él, sino sólo los que necesitamos que estén disponibles en toda la aplicación. El resto de estados pueden existir en cada componente, ya que sólo en ese lugar es requerido./n/nDe esta manera mantenemos en el estado global lo mínimo necesario y no abusamos de dicha tecnología. También me quedo con la experiencia de haber utilizado varios paquetes de npm tales como:/n/n - dayjs para formatear fechas/n/n - react-circular-progressbar para representar la calificación de una película o serie/n/n - react-lazy-load-image para realizar la carga perezosa de las imágenes/n/n - react-player para la reproducción de video/n/n - react-select para crear el filtro por género más eficientemente.",
    image: "/projects/fullstack/movix/movix_11.png",
    images: [
      "/projects/fullstack/movix/movix_1.png",
      "/projects/fullstack/movix/movix_3.png",
      "/projects/fullstack/movix/movix_4.png",
      "/projects/fullstack/movix/movix_5.png",
    ],
  },
  {
    id: 22,
    title: "Gamehub",
    liveSiteUrl: "",
    githubUrl: "",
    source: "Personal",
    desc: "Plataforma que permite visualizar y realizar transmisiones en vivo.",
    explanation:
      "Este proyecto fue desarrollado siguiendo un curso proporcionado por el instructor CodeWithAntonio en YouTube, con el propósito de crear una plataforma similar a Twitch que permita a los usuarios actuar como espectadores y/o streamers./n/n Para gestionar la autenticación de usuarios a través de Google, implementamos el servicio de Clerk, aprovechando un webhook para registrar la información del usuario en nuestra base de datos. Además, empleamos el paquete Livekit para construir todos los elementos relacionados con los streams, salas de transmisión, y el chat./n/n En el contexto de un streamer, una vez que se ha creado una cuenta o iniciado sesión, se puede establecer una conexión que proporcionará la información necesaria para integrarla con programas compatibles, como OBS Studio. El streamer cuenta con la capacidad de personalizar tanto la información del stream como su perfil de usuario. Además, se le brinda la opción de configurar el chat de su propio stream, permitiéndole activar o desactivar funciones como desactivar el chat, habilitar el modo lento y el modo solo suscriptores. Este nivel de flexibilidad y control permite a los streamers adaptar la experiencia según sus preferencias y necesidades específicas./n/n Este proyecto, a diferencia del resto de proyectos de mi portafolio, no posee un link para visitar el sitio online debido a que utiliza servicios de pago para funcionar, por lo que solo funciona en desarrollo. Por lo tanto decidí subir un video demostrativo.",
    level: "advanced",
    technologies: ["next", "shadcn"],
    feedback:
      "Abordé este proyecto de gran complejidad, que superaba mis habilidades actuales, con la determinación de desafiarme y aprender a manejar un nivel de complejidad superior al que había enfrentado anteriormente. Se trata de un proyecto extenso y complicado, que demanda dedicación, constancia y atención meticulosa para evitar errores. Aunque conté con la guía de un instructor, la posibilidad de cometer errores es inherente, especialmente dado que el código no es de mi autoría y la resolución de problemas puede resultar desafiante./n/n A pesar de los desafíos, la experiencia de desarrollo fue sumamente positiva por varios motivos. En primer lugar, adquirí conocimientos significativos y adopté buenas prácticas que aplicaré en futuros proyectos. En segundo lugar, este proyecto contribuyó en gran medida a fortalecer mi mentalidad. Aprendí a abordar proyectos aparentemente difíciles y complejos dividiéndolos en partes más pequeñas, resolviendo cada problema de manera incremental y evitando preocuparme en exceso por lo que está por venir o lo que falta. La clave fue centrarme en el módulo o las actividades que se estaban desarrollando en ese momento, sin sobreanalizar el futuro. Este enfoque resultó ser fundamental para mantener la claridad y el control a lo largo del proceso de desarrollo.",
    image: "/projects/fullstack/gamehub/gamehub_4.png",
    images: [],
    video: "https://www.youtube.com/embed/U6XBxhTLSuU",
  },
  {
    id: 2,
    title: "Flair Store",
    liveSiteUrl: "https://sanity-ecommerce-orcin.vercel.app/",
    githubUrl: "https://github.com/eduviana/Sanity-Ecommerce",
    source: "YouTube",
    desc: "Tienda online de venta de indumentaria realizado con Sanity y Next 13.",
    explanation:
      "El objetivo de este proyecto es crear un sitio web de venta de indumentaria con Sanity y Next 13. Debe de tener dos tipos de filtros, el primero con las propiedades de los productos tales como categorías, tamaño, color y el segundo para poder ordenarlos por precio de mayor a menor, de menor a mayor y también por más nuevos. Debe de tener dark mode y carrito de compras y un método de pago funcional. Es importante que esté desarrollado con Typescript y debe ser responsive.",
    level: "advanced",
    technologies: ["next", "tailwind", "sanity"],
    feedback:
      "En este proyecto aprendí muchas cosas. En cuanto al backend se utilizó Sanity, un potente administrador de contenido que nos permite crear los modelos y productos de una manera sencilla y ágil. Lo que me gustó de trabajar con esta tecnología es que, comparándolo con Strapi, la interfaz para agregar productos es mucho más limpia y simple./n/nCon respecto al frontend se utilizó la librería radix-ui y sanity-ui, de las cuales utilizamos ciertos componentes específicos de cada una. El resto de los estilos están construídos con Tailwind, en donde aprendí a crear un tema personalizado./n/nOtra librería que se implementa es use-shopping-cart, proveída por Stripe para manejar los productos del carrito de compras. La funcionalidad que más me gustó de este proyecto es la forma en que se manejan los filtros, dado que éstos son componentes hijos que, al seleccionar un filtro, modifican algún valor internamente y estos cambios deben actualizar la información del componente padre y este flujo de hijo a padre no es la manera correcta o natural de trabajar en React. Para no tener que complicar el código para solucionar este problema ni tampoco relegar todo el problema con más states y effects todo se realiza a través de parámetros en la url. Un componente hijo setea en la url la query y el componente padre está pendiente de estos cambios y de esta manera se dispara la re-renderización del/los elementos del DOM correspondientes.",

    image: "/projects/fullstack/sanity/sanity_5.png",
    images: [
      "/projects/fullstack/sanity/sanity_1.png",
      "/projects/fullstack/sanity/sanity_2.png",
      "/projects/fullstack/sanity/sanity_3.png",
      "/projects/fullstack/sanity/sanity_4.png",
    ],
  },
  {
    id: 3,
    title: "Prueba Técnica - Libros",
    liveSiteUrl: "https://challenge-books-midudev.vercel.app/",
    githubUrl: "https://github.com/eduviana/Challenge-Books-Midudev",
    source: "Midudev",
    desc: "Challenge extraído del creador de contenido Midudev que consiste en una página web de una editorial de libros.",
    explanation:
      "Somos un sello editorial de libros multinacional. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo y poder guardar los libros que les interesan en una lista de lectura. Para ello, queremos desarrollar una aplicación web que permita a los usuarios ver los libros disponibles y crear una lista de lectura./n/nTen en cuenta que:/n/n - no sabemos si el framework que utilicemos ahora será el definitivo, pero querremos reutilizar el máximo de código posible/n/n - la aplicación debe ser fácil de usar y agradable a la vista/n/n - tenemos un 80% de usuarios que vienen de navegadores de escritorio/n/n - usa el archivo books.json para obtener los datos de los libros. Puedes añadir más libros si lo deseas, siempre y cuando siga la misma estructura.",
    level: "intermediate",
    technologies: ["react", "sass"],
    feedback:
      "Este challenge que en una primera instancia parece muy simple y de escueto diseño me enseñó muchisimo. En primer lugar contribuyó a mejorar la forma en que estructuro las carpetas de un proyecto. Además me exijió a debuguear el código para poder encontrar los problemas como re-renders infinitos, saber que valores tienen los states en cada momento al cambiar los filtros de búsqueda y a almacenar los resultados en el localstorage./n/nLo más importante que me llevo de aprendizaje de este ejercicio es la importancia de que cualquier variable que tengo en un componente que no forma parte de un state y que tiene relación con un useEffect genera renderizados infinitos, ya que no es manejada por el motor de react.  ",
    image: "/projects/personales/libros/libros_1.png",
    images: [
      "/projects/personales/libros/libros_1.png",
      "/projects/personales/libros/libros_2.png",
      "/projects/personales/libros/libros_3.png",
    ],
  },
  {
    id: 4,
    title: "Admin UI - Recharts",
    liveSiteUrl: "https://react-dashboard-recharts-nff7.vercel.app/",
    githubUrl: "https://github.com/eduviana/React-Dashboard-Recharts",
    source: "YouTube",
    desc: "Página web que permite visualizar información tanto en formato de gráficos como de tablas.",
    explanation:
      "Construir un panel de administración con Vite utilizando react-router-dom para las rutas, Material Ui y Sass para la interfaz gráfica y la libreria Recharts para los gráficos. El objetivo de este proyecto es familiarizarce con estas librerias y principalmente aprender a utilizar el componente data-grid de Material.",
    level: "advanced",
    technologies: ["react", "material", "sass"],
    feedback:
      "Este proyecto me permitió adentrarme en el uso de la última versión de react-router-dom, que al momento de escribir estas líneas es la v6. Además, exploré una nueva metodología para abordar la responsividad en Sass. Esta técnica implica crear un archivo Sass separado que contiene los media querys personalizados, los cuales se pueden importar en cada clase para aplicar propiedades específicas a diferentes tamaños de pantalla./n/n Este enfoque difiere de mi práctica anterior, que consistía en definir los media querys al final del archivo de estilos para cada breakpoint. Con esta nueva metodología, podemos tener un media query dedicado a cada clase, lo que lo hace más preciso. A pesar de que esta forma de trabajo puede aumentar la longitud del código debido a la repetición del mixin para aplicar los media querys, su ventaja radica en la claridad y facilidad de lectura, ya que no es necesario desplazarse hasta el final del documento./n/n Se utiliza el componente data-grid para representar las tablas. Para asegurar la reutilización de este componente tanto para usuarios como para productos, lo diseñé de manera dinámica. En lugar de almacenar los datos en una base de datos, opté por mantener la información necesaria en un archivo local. Esta decisión se tomó para simplificar el hosteo de la página web. Si hubiera utilizado una base de datos  la hubiera alojado en un servicio gratuito, habría enfrentado restricciones de acceso en poco tiempo debido a las limitaciones de la versión gratuita de dicho servicio. La esencia de este proyecto es aprender y perfeccionar el desarrollo frontend, sin lidiar con suscripciones y el riesgo de que la página deje de funcionar.",
    image: "/projects/fullstack/adminRecharts/recharts_1.png",
    images: [
      "/projects/fullstack/adminRecharts/recharts_1.png",
      "/projects/fullstack/adminRecharts/recharts_2.png",
      "/projects/fullstack/adminRecharts/recharts_3.png",
      "/projects/fullstack/adminRecharts/recharts_4.png",
    ],
  },
  {
    id: 5,
    title: "Car Showcase",
    liveSiteUrl: "https://car-showcase-seven-nu.vercel.app/",
    githubUrl: "https://github.com/eduviana/Car-Showcase",
    source: "YouTube",
    desc: "Página web de venta e información de vehículos. Se utilizan dos endpoints distintos para mostrar la información.  ",
    explanation:
      "Esta página es el resultado de un curso/tutorial extraído de YouTube del canal de Javascript Mastery, el cual considero que tiene contenido de buena calidad y valiosas explicaciones a diversos temas que no son fáciles de entender e interiorizar./n/n El objetivo de esta página web es brindar una interfaz vistoza e interactiva que permita la búsqueda de automóviles. Para ello utilizamos dos endpoints, el primero proveniente de RapidApi, que nos provee de toda la información de los vehículos y el segundo endpoint lo utilizamos para mostrar información del vehículo seleccionado a través de un modal, en el cual se puede visualizar tres imágenes del mismo desde distintos ángulos de visión.",
    level: "advanced",
    technologies: ["next", "ts", "tailwind"],
    feedback:
      "Realizar este tutorial me enseñó muchas cosas, desde cómo trabajar con Typescript, definiendo los types para cada pieza de código, como estructurar el projecto a nivel de carpetas y la utilización de la carpeta app de next 13 que funciona como router. Hay un montón de otras funcionalidades que me fueron de utilidad, como los filtros de búsqueda, animaciones y responsive design. ",
    image: "/projects/fullstack/carShowcase/carShowcase_1.png",
    images: [
      "/projects/fullstack/carShowcase/carShowcase_1.png",
      "/projects/fullstack/carShowcase/carShowcase_2.png",
      "/projects/fullstack/carShowcase/carShowcase_3.png",
    ],
  },
  {
    id: 6,
    title: "Evo Gym",
    liveSiteUrl: "https://gym-typescript-one.vercel.app/",
    githubUrl: "https://github.com/eduviana/gym-typescript",
    source: "YouTube",
    desc: "Página web con temática fitness. Simple, elegante y efectiva. Buen proyecto para dar mis primeros pasos con Typescript.",
    explanation:
      "Este sitio web fué desarrollado siguiendo un curso de YouTube cuyo autor es EdRoh. Es un ejercicio perfecto para asentar las bases tanto de diseño como de Typescript, definiendo los tipos e interfaces utilizadas por los componentes. ",
    level: "junior",
    technologies: ["react", "ts", "tailwind"],
    feedback:
      "Realizando esta página dí mis primeros pasos con typescript en un proyecto real. El uso del mismo en este proyecto no es muy sofisticado ni complejo, pero eso es lo que yo me encontraba buscando, un ejercicio que implementara typescript con sus conceptos básicos sin complicaciones extras, para ir incorporándolo lentamente a todos mis proyectos. ",
    image: "/projects/fullstack/evoGym/evoGym_1.png",
    images: [
      "/projects/fullstack/evoGym/evoGym_1.png",
      "/projects/fullstack/evoGym/evoGym_2.png",
      "/projects/fullstack/evoGym/evoGym_3.png",
    ],
  },

  {
    id: 7,
    title: "Liverr",
    liveSiteUrl: "https://liverr.vercel.app/",
    githubUrl: "https://github.com/eduviana/liverr",
    source: "YouTube",
    desc: "Página web inspirada en Fiverr. Este sitio tiene un nivel de complejidad mayor tanto a nivel de diseño como funcionalidad.",
    explanation:
      "Esta página la desarrollé siguiendo el curso de Javascript Mastery en YouTube. La idea de este proyecto es realizar una página con los mismos objetivos que la página oficial Fiverr, cuya finalidad es ofrecer un mercado en línea para servicios independientes. Es una plataforma para que los trabajadores autónomos ofrezcan servicios a clientes de todo el mundo. ",
    level: "advanced",
    technologies: ["react", "sass"],
    feedback:
      "Aplicación muy completa y compleja, tanto a nivel de diseño como funcional. Hay muchos elementos en pantalla que hay que reordenar para que se ajuste a distintos tamaños de pantalla, posee muchas categorías e items por cada una de ellas, tiene filtros de búsqueda y página de detalles por cada artículo. La envergadura del proyecto me obligó a reorganizar las carpetas y archivos dado que estos empezaron a crecer y la arquitectura que se había implementado en un principio quedó desfasada.",
    image: "/projects/fullstack/liverr/liverr_1.png",
    images: [
      "/projects/fullstack/liverr/liverr_1.png",
      "/projects/fullstack/liverr/liverr_2.png",
      "/projects/fullstack/liverr/liverr_3.png",
      "/projects/fullstack/liverr/liverr_4.png",
      "/projects/fullstack/liverr/liverr_5.png",
    ],
  },
  {
    id: 8,
    title: "Hardware 360",
    liveSiteUrl: "https://hardware360-remix.vercel.app/",
    githubUrl: "https://github.com/eduviana/hardware360-remix",
    source: "Personal",
    desc: "Página web de venta de hardware e insumos informáticos.",
    explanation:
      "Esta página la desarrollé con Remix.js en el frontend y Strapi en el backend. La idea fué aprender ambas tecnologías y realizar un proyecto fullstack. ",
    level: "intermediate",
    technologies: ["remix", "bootstrap", "strapi"],
    feedback:
      "Realizando este proyecto aprendí lo básico de Remix y bootstrap. También me sirvió para aprender Strapi, crear los distintos endpoints, asignar permisos, y a crear los modelos de cada tipo de producto./n/nLa información cargada de cada producto es verídica y las imágenes están alojadas en Cloudinary utilizando un plugin de Strapi. Cuando se clickea un producto, en vez de establecer el id en la url como normalmente hacía, utilicé un slug de Strapi que sustituye dicho id por el nombre del producto que automaticamente extrae del campo título. Esto hace que la url sea más descriptiva y ayude a los motores de Google a indexar mejor la página.",
    image: "/projects/personales/hardware360/hardware360_1.png",
    images: [
      "/projects/personales/hardware360/hardware360_1.png",
      "/projects/personales/hardware360/hardware360_2.png",
      "/projects/personales/hardware360/hardware360_3.png",
      "/projects/personales/hardware360/hardware360_4.png",
    ],
  },
  {
    id: 9,
    title: "Fashion E-commerce",
    liveSiteUrl: "https://www.google.com",
    githubUrl: "https://github.com/eduviana/Fashion-Online-Client",
    source: "YouTube",
    desc: "Página web de venta de ropa con método de pagos.",
    explanation:
      "Esta página la desarrollé siguiendo un curso de EdRoh en YouTube. El objetivo de este proyecto es proporcionar una página web para la venta de artículos de indumentaria, con un estilo elegante y simple. El frontend está desarrollado con React, Material Ui, Formik y Yup. El backend está construído con strapi y tiene implementado stripe para lo que respecta a pagos.",
    level: "intermediate",
    technologies: ["react", "material", "strapi", "stripe"],
    feedback:
      "Aprendí a dar mis primeros pasos con Material Ui. Puedo destacar que utilizando dicha librería, los estilos de la página consiguen una apariencia muy lograda y armónica, dando la sensación de que todo concuerda y encaja, tanto las tipografías como la combinación de colores./n/n Con respecto al backend aprendí a utilizar strapi y me encantó. Le veo mucho potencial para futuros proyectos. Creo que te dá un control y una visión de lo que uno podría hacer a futuro debido a que posee una interfaz gráfica para manejar el contenido de la base de datos, ademas de que permite agregar plugins para aumentar sus funcionalidades. Por ejemplo, existe un paquete disponible en npm que permite que las imágenes que uno sube a strapi directamente se suban a cloudinary.",
    image: "/projects/fullstack/fashionEcommerce/fashion_1.png",
    images: [
      "/projects/fullstack/fashionEcommerce/fashion_1.png",
      "/projects/fullstack/fashionEcommerce/fashion_2.png",
      "/projects/fullstack/fashionEcommerce/fashion_3.png",
      "/projects/fullstack/fashionEcommerce/fashion_4.png",
      "/projects/fullstack/fashionEcommerce/fashion_5.png",
    ],
  },
  {
    id: 10,
    title: "Dashboard",
    liveSiteUrl: "https://react-dashboard-lyart.vercel.app/",
    githubUrl: "https://github.com/eduviana/react-dashboard",
    source: "YouTube",
    desc: "Panel de administración que incluye diversos tipos de  gráficos, listados y buscadores.",
    explanation:
      "Esta proyecto fué desarrollado siguiendo un curso de EdRoh en YouTube. El objetivo es construir un panel de administración visualmente atractivo y formal en el cual se pueda visualizar distintos tipos de información. En la página principal se muestra un resumen de todas las secciones que hay en el menú, como lo son control de gastos, listado de personas, graficos de barra, circular, de línea y geográfico.",
    level: "intermediate",
    technologies: ["react", "material", "strapi", "stripe"],
    feedback:
      "Proyecto muy completo que hace uso de varias librerías externas tales como:/n/n - Material Ui para los estilos/n/n - Fullcalendar para representar el calendario/n/n - Nivo para los distintos tipos de gráficos/n/n - Formik y Yup para la validación de formularios/n/n - React Router Dom para la navegación entre páginas/n/n Todo esto me ayudó a leer documentacion de cada uno de estos paquetes porque muchas cosas no me funcionaban como en el curso, había diferencias entre las versiones utilizadas en el curso y las que actualmente se instalan.",
    image: "/projects/fullstack/dashboard/dashboard_1.png",
    images: [
      "/projects/fullstack/dashboard/dashboard_1.png",
      "/projects/fullstack/dashboard/dashboard_2.png",
      "/projects/fullstack/dashboard/dashboard_3.png",
      "/projects/fullstack/dashboard/dashboard_4.png",
    ],
  },
  {
    id: 11,
    title: "Easybank Landing Page",
    liveSiteUrl: "https://easybank-landing-page-phi-lyart.vercel.app/",
    githubUrl: "https://github.com/eduviana/Easybank-Landing-Page",
    source: "FrontendMentor",
    desc: "Desafío que consta en desarrollar una SPA que se asemeje lo más posible al diseño proveído.",
    explanation:
      "El desafió es construir esta página intentado que se parezca lo más posible al diseño proveído. Se puede utilizar cualquier herramienta para lograr el objetivo. La única funcionalidad que requiere Javascript es el menú de navegación para dispositivos móviles, sin embargo también es posible realizar dicha funcionalidad sólo con Css.",
    level: "intermediate",
    technologies: ["html", "css"],
    feedback:
      "Este ejercicio me sirvió para aprender a hacer el menú para dispositivos móviles sin necesidad de utilizar Javascript y hacerlo sólo con Css. Considero que esto es una buena práctica ya que el código del componente queda más simple, creo que leer código de Css es mas fácil de interpretar que su contraparte en Javascript, siempre pensando en que mi código tiene que ser lo más legible posible tanto para otras personas como par mi yo del futuro 😀.",
    image: "/projects/frontendMentor/easybank/easybank_1440.png",
    images: [
      "/projects/frontendMentor/easybank/carousel_1.png",
      "/projects/frontendMentor/easybank/carousel_2.png",
    ],
  },
  {
    id: 12,
    title: "Ecommerce Product Page",
    liveSiteUrl: "https://ecommerce-product-page-rho-seven.vercel.app/",
    githubUrl: "https://github.com/eduviana/Ecommerce-Product-Page",
    source: "FrontendMentor",
    desc: "Desafío que puso a prueba mis habilidades de Javascript para crear una galería de productos, un modal y una funcionalidad de carrito de compras.",
    explanation:
      "El desafío es construir esta página de comercio electrónico y lograr que se parezca lo más posible al diseño proveído. Se puede utilizar cualquier herramienta que te guste para ayudarte a completar el desafío.",
    level: "intermediate",
    technologies: ["react", "sass"],
    feedback:
      "Este ejercicio me sirvió para reforzar conocimientos sobre el posicionamiento relativo y absoluto para poder ubicar correctamente el menú desplegable al hacer click en el carrito de compras, en los thumbnails de la galería, como así tambien al abrir el modal al clickear una imágen./n/n Utilizé un context para almacenar los productos agregados al carrito, de esta manera se vé reflejado en tiempo real el badget de la cantidad de productos que posee el carrito en un momento determinado. Opté por esta técnica porque me parece que en este ejercicio es lo más adecuado, ya que quería evitar el prop drilling. Es cierto que dada la envergadura reducida de este ejercicio podría haber utilizado props, pero pensando en un código escalable preferí utilizar content. ",
    image: "/projects/frontendMentor/ecommerce/ecommerce_1.png",
    images: [
      "/projects/frontendMentor/ecommerce/ecommerce_1.png",
      "/projects/frontendMentor/ecommerce/ecommerce_3.png",
    ],
  },
  {
    id: 13,
    title: "News Home Page",
    liveSiteUrl: "https://news-homepage-main-g8l3jn4bt-eduviana.vercel.app/",
    githubUrl: "https://github.com/eduviana/news-homepage-main",
    source: "FrontendMentor",
    desc: "Este desafío es una excelente oportunidad para practicar mis habilidades de CSS Grid. ¡Hay muchas decisiones difíciles que tomar y muchas oportunidades de aprendizaje!",
    explanation:
      "El desafió es construir esta página intentado que se parezca lo más posible al diseño proveído. Se puede utilizar cualquier herramienta para lograr el objetivo. La única funcionalidad que requiere Javascript es el menú de navegación para dispositivos móviles, sin embargo también es posible realizar dicha funcionalidad sólo con CSS",
    level: "junior",
    technologies: ["html", "css", "js"],
    feedback:
      "Gané destreza con Css grid para posicionar los elementos como el diseño lo requiere y adaptándolo a dispositivos móviles. Utilicé la propiedad grid-template-areas en el contenedor padre para crear la grilla y grid-area en los contenedores hijos para asignarle a cada uno su ubicación.",
    image: "/projects/frontendMentor/news/news_1.png",
    images: ["/projects/frontendMentor/news/news_1.png"],
  },
  {
    id: 14,
    title: "Rest Country",
    liveSiteUrl:
      "https://rest-country-api-with-color-theme-switcher-fupf6x4t2-eduviana.vercel.app/",
    githubUrl:
      "https://github.com/eduviana/Rest-Country-Api-With-Color-Theme-Switcher",
    source: "FrontendMentor",
    desc: "Challenge para poner a prueba mis skills de Javascript consumiendo una API. ¡Tiene varios detalles a resolver que no se aprecian a simple vista!",
    explanation:
      "El desafío es integrar la API REST de paises para extraer los datos y mostrarlos como indica el diseño. Puedes usar cualquier framework de Javascript que quieras. también tienes control sobre qué paquete utilizar para realizar las solicitudes HTTP.",
    level: "advanced",
    technologies: ["react", "sass"],
    feedback:
      "Aprendí muchas cosas realizando este reto. Quería hacer el dark mode sin utilizar context y encontré una forma de realizarlo con el atributo data-set de HTML5./n/n En los estilos globales del proyecto defino las variables de css para cuando el body tenga el data-set con el valor 'light' y para cuando tenga el valor 'dark'. Los nombres de las variables son los mismos para ambos casos, lo que cambia son los valores. Creo que con esta forma de hacerlo se puede ahorrar lineas de código en los componentes./n/n En vez de tener que importar useContent y mi context para poder comprobar en qué tema nos encontramos lo que hago es crear una variable css tanto en el selector body[data-theme='light'] como en body[data-theme='dark'], estableciendo en cada una el valor correspondiente. Otra cuestión que me pareció muy interesante y que tenía a medio olvidar es que la respuesta de la API tiene algunos campos que son variables dependiendo del país que se buscó, por lo que no es posible acceder a dichas keys del objeto por medio de la notación del punto como normalmente estaba acostumbrado, hay que hacerlo por medio de la notacion de corchetes, marcando la posición en vez del valor.",
    image: "/projects/frontendMentor/restCountry/restCountry_1.png",
    images: [
      "/projects/frontendMentor/restCountry/restCountry_1.png",
      "/projects/frontendMentor/restCountry/restCountry_2.png",
    ],
  },
  {
    id: 15,
    title: "Testimonial Grid",
    liveSiteUrl:
      "https://testimonial-grid-section-main-jnauizfda-eduviana.vercel.app/",
    githubUrl: "https://github.com/eduviana/testimonial-grid-section-main",
    source: "FrontendMentor",
    desc: "Este desafío es una práctica perfecta para cualquiera que quiera probar sus habilidades con CSS Grid. Grid es una adición tan poderosa a CSS, ¡así que vale la pena familiarizarse con él!",
    explanation:
      "El desafío es construir esta sección de cuadrícula y lograr que se parezca lo más posible al diseño. Puedes usar cualquier herramienta que te guste para ayudarte a completar el desafío. Entonces, si tienes algo que te gustaría practicar, no dudes en intentarlo. ",
    level: "junior",
    technologies: ["react", "sass"],
    feedback:
      "Buena práctica para repasar Css grid. Lo más complicado es ajustar los textos para que queden igual al diseño proveido. Hay que jugar mucho con tamaños de texto, altura de linea, espaciado de letras etc.",
    image: "/projects/frontendMentor/testimonialGrid/testimonial_1.png",
    images: ["/projects/frontendMentor/testimonialGrid/testimonial_1.png"],
  },
  {
    id: 16,
    title: "Fylo dark theme landing page",
    liveSiteUrl:
      "https://filo-dark-theme-landing-page-master-nmeoll70x-eduviana.vercel.app/",
    githubUrl:
      "https://github.com/eduviana/filo-dark-theme-landing-page-master",
    source: "FrontendMentor",
    desc: "Este challenge tiene desafíos de diseño agradables. Un campo de entrenamiento perfecto para practicar mis habilidades de Flexbox y/o Grid.",
    explanation:
      "El desafío es construir esta página de destino y lograr que se parezca lo más posible al diseño. Puedes usar cualquier herramienta que te guste para ayudarte a completar el desafío.",
    level: "junior",
    technologies: ["react", "sass"],
    feedback:
      "Un desafío ideal para adquirir experiencia en el uso de grid y flexbox es la anidación de múltiples contenedores grid o flex que deben ajustar su disposición en función de las dimensiones de la pantalla. Además, este desafío implica el uso de position relative y absolute para posicionar elementos entre dos secciones con colores diferentes.",
    image: "/projects/frontendMentor/filoDarkTheme/filo_1.png",
    images: [
      "/projects/frontendMentor/filoDarkTheme/filo_1.png",
      "/projects/frontendMentor/filoDarkTheme/filo_2.png",
      "/projects/frontendMentor/filoDarkTheme/filo_3.png",
    ],
  },
  {
    id: 17,
    title: "Loopstudios landing page",
    liveSiteUrl:
      "https://loopstudios-landing-page-main-r8k6s4vrh-eduviana.vercel.app/",
    githubUrl: "https://github.com/eduviana/loopstudios-landing-page-main",
    source: "FrontendMentor",
    desc: "Este desafío es perfecto si buscas probar tus habilidades con CSS Grid. ¡Incluso sin Grid, este proyecto será divertido para ayudarlo a practicar sus habilidades de diseño!",
    explanation:
      "Su desafío es construir esta página de destino y lograr que se parezca lo más posible al diseño. Se enfoca principalmente en HTML y CSS pero tiene un poquito de Javascript incluido para la alternancia de navegación móvil.",
    level: "junior",
    technologies: ["react", "sass"],
    feedback:
      "En este desafío, empleé tanto flexbox como grid. Ambas técnicas pueden conducir a resultados similares, pero no al mismo costo. Si se trata de elementos que necesitan separación, centrado o alineación hacia uno de los lados, es más eficiente utilizar flexbox. Por otro lado, cuando se trata de elementos superpuestos o de situaciones complejas que requieren adaptación a diferentes resoluciones de pantalla, resulta más conveniente optar por grid.",
    image: "/projects/frontendMentor/loopstudios/loopstudios_1.png",
    images: [
      "/projects/frontendMentor/loopstudios/loopstudios_1.png",
      "/projects/frontendMentor/loopstudios/loopstudios_2.png",
      "/projects/frontendMentor/loopstudios/loopstudios_3.png",
      "/projects/frontendMentor/loopstudios/loopstudios_4.png",
    ],
  },
  {
    id: 18,
    title: "Room Homepage",
    liveSiteUrl: "https://room-homepage-ashy-delta.vercel.app/",
    githubUrl: "https://github.com/eduviana/Room-Homepage",
    source: "FrontendMentor",
    desc: "Desafío que debe realizarce utilizando CSS Grid para crear la cuadrícula y ubicar los elementos en los dos breakpoints que se indican en los requisitos. ",
    explanation:
      "El desafío consta en construir esta página de inicio de comercio electrónico y lograr que se parezca lo más posible al diseño. La idea es que todos los elementos estén manejados por una Grid, definiendo sus dimensiones en el contenedor padre.",
    level: "intermediate",
    technologies: ["react", "tailwind"],
    feedback:
      "Este ejercicio resultó altamente beneficioso para mi aprendizaje, ya que me permitió experimentar con las proporciones de tamaños asignadas a un contenedor grid, logrando medidas adecuadas para cada punto de quiebre y manteniendo la integridad del diseño.",
    image: "/projects/frontendMentor/room/room_1.png",
    images: ["/projects/frontendMentor/room/room_1.png"],
  },
  {
    id: 19,
    title: "Game Store",
    liveSiteUrl: "https://game-store-nextjs-api.vercel.app/",
    githubUrl: "https://github.com/eduviana/GameStore-FreeToGame-API",
    source: "Personal",
    desc: "Maquetación extraída de Figma Community a la que le implementé una API gratuita llamada freetogame para mostrar información dinámica.",
    explanation:
      "Este proyecto surgío revisando los diseños gratituos que la comunidad de Figma comparte en su página, así que seleccioné este y el objetivo era replicarlo lo mas parecido al diseño original, ya que mis anteriores maquetaciones habian sido en base a una foto.",
    level: "intermediate",
    technologies: ["next", "css"],
    feedback:
      "Realizando esta maquetación pude comprobar por mi mismo que hacer una interfaz teniendo una herramienta como Figma, el resultado final es mucho más acertado y fiel al diseño original. Es más cómodo y ágil trabajar de esta manera. Con respecto a la Api, requirió investigar y pensar bien que método de next utilizar para realizar los fetchs y aprender sobre los mismos. Actualmente utilizo getServerSideProps en este proyecto para reealizar las consultas del lado del backend.",
    image: "/projects/personales/gameStore/gameStore_1.png",
    images: [
      "/projects/personales/gameStore/gameStore_1.png",
      "/projects/personales/gameStore/gameStore_2.png",
      "/projects/personales/gameStore/gameStore_3.png",
      "/projects/personales/gameStore/gameStore_4.png",
    ],
  },
  {
    id: 20,
    title: "YouTube Clone",
    liveSiteUrl: "https://ev-YouTube-app.netlify.app/",
    githubUrl: "https://github.com/eduviana/YouTube-app",
    source: "Personal",
    desc: "Página web inspirada en YouTube con un diseño similar que utiliza la API oficial de YouTube para visualizar los videos y realizar las búsquedas.",
    explanation:
      "La idea de este proyecto es simular un sitio web parecido a YouTube en el que se puede buscar videos en el buscador, filtrar por categorías y mostrar videos relacionados al seleccionado. Utiliza la API oficial de YouTube.",
    level: "intermediate",
    technologies: ["react", "material"],
    feedback:
      "Este ejercicio me ayudó a mejorar construyendo interfaces de usuario sin tener un diseño preestablecido o un archivo de figma en el que basarme./n/n Utilizar Material Ui me obligó a leer y buscar mucha informacion en la documentación oficial para lograr el aspecto visual que yo pretendía, ya que es muy distinto trabajar con esta librería a hacerlo con Css o Sass como yo estoy acostumbrado. También opté por usar Axios para realizar las peticiones al endpoint para incorporar otra herramienta nueva para mi ya que el método fetch nativo del navegador es lo que habitualmente utiizo y no quería quedarme en mi zona de confort. ",
    image: "/projects/personales/youtubeClone/youtubeClone_1.png",
    images: [
      "/projects/personales/youtubeClone/youtubeClone_1.png",
      "/projects/personales/youtubeClone/youtubeClone_2.png",
    ],
  },
];
