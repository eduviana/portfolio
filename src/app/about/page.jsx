import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import GoBack from "@/components/goBack/GoBack";

const About = () => {
  return (
    <div className="container">
      <GoBack />
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt="ilustración de personas utilizando notebooks y celulares"
            className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Analista de sistemas</h1>
            <h2 className={styles.imgDesc}>Desarrollador web frontend</h2>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}>¿Quién soy?</h1>
            <p className={styles.desc}>
              {/* Mi nombre es Eduardo, tengo 30 años y resido en la Provincia de
              Córdoba, Argentina. Realicé mis estudios en Institución Cervantes
              en donde me recibí de Analista de sistemas. Mientras cursaba la
              carrera trabajé de auditor de software legal para una empresa
              llamada Activa Soluciones. Mi trabajo consistía en realizar
              visitas a las empresas programadas y verificar las licencias del
              software instalado en las computadoras y servidores utilizados por
              dicha empresa. En base a este proceso, completaba las planillas
              con los resultados y luego subía dicha información a la página web
              de Activa Soluciones. Por otra parte, desde que comencé la
              carrera, siempre me dediqué de manera autónoma a realizar
              presupuestos, ensambles y a reparar equipos informáticos.
              Realizando estas actividades logré formar una clientela la cual
              fué creciendo con el tiempo. Esto me obligó a adquirir nuevos
              conocimientos ya que los clientes empezaron a solicitarme
              servicios que yo no brindaba en un principio. */}
              ¡Hola, soy Eduardo! Originario de la  Provincia de Córdoba, Argentina,
              tengo 30 años y soy Analista de Sistemas graduado de la
              Institución Cervantes. Durante mis estudios, tuve la oportunidad
              de trabajar como auditor de software legal en Activa Soluciones.<br /> <br />
              
              Mi rol consistía en llevar a cabo visitas programadas a diversas
              empresas para auditar y verificar las licencias de software
              instaladas en sus sistemas informáticos, abarcando tanto
              computadoras como servidores. El proceso implicaba completar
              minuciosamente hojas de cálculo con los resultados obtenidos
              durante la auditoría. Posteriormente, tenía la responsabilidad de
              cargar y gestionar esta información en el sitio web de Activa
              Soluciones.
              <br /> <br />
              Desde antes de iniciar mis estudios me he involucrado de manera
              autónoma en la elaboración de presupuestos, ensamblaje y
              reparación de equipos informáticos. A medida que me entregaba a
              estas tareas, fui estableciendo y cultivando una cartera de
              clientes que, con el tiempo, experimentó un crecimiento constante.
              Este éxito en el ámbito autónomo me impulsó a adquirir nuevos
              conocimientos y competencias, ya que los requerimientos de mis
              clientes comenzaron a abarcar servicios que inicialmente no
              ofrecía. <br /><br />
              La interacción continua con diversos desafíos tecnológicos y la
              evolución de mi clientela me han brindado valiosas oportunidades
              para expandir mi conjunto de habilidades y adentrarme en áreas
              previamente desconocidas. Esta constante adaptación y búsqueda de
              soluciones me ha dotado de un enfoque versátil y una mentalidad
              abierta hacia la resolución de problemas informáticos y
              tecnológicos.
            </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>¿Y luego de recibirte?</h1>
            <p className={styles.desc}>
              {/* Tenía mucho trabajo autónomo de soporte técnico, por lo que me
              dediqué a ello full time. Fué un tiempo antes de entrar en
              pandemia que decidí retomar la programación, realizando ejercicios
              gratuitos que encontraba en internet. Estas actividades me
              sirvieron para descubrir que lo que más me gusta es el desarrollo
              web, por lo que comencé a tomar cursos tanto gratis en youtube
              como pagos en Udemy. Luego de aprender las bases de html, css y
              javascript mi primer framework fúe Angular. Considero que es una
              buena tecnología por su robustes y que más que un framework es una
              suite de herramientas muy completas, pero se me hizo muy
              complicado poder acoplarme y aprender todo el boilerplate que
              dicha tecnología requiere. Fué en ese momento que dicidí probar
              React, investigar su filosofía y ver de que se trataba, y me
              encantó el cambio. Me sentía mucho mas a gusto trabajando con esta
              librería, los cursos y las clases que tomaba sobre React me eran
              mucho mas fáciles de asimilar y de poder aplicar en ejercicios y
              proyectos personales. Lo que más me gusta de este framework es su
              filosofía. Mientras que Angular impone una única solución para un
              problema, React propone multiples soluciones para un mismo
              problema. Ninguna es mejor ni peor que la otra, pero luego de
              probar ambas definitivamente me siento más cómodo con la segunda
              opción. */}
              Después de obtener mi título, me sumergí por completo en el mundo
              del soporte técnico autónomo, dedicando mi tiempo y esfuerzo a
              esta labor a tiempo completo. Poco antes de que comenzara la
              pandemia, tomé la decisión de retomar la programación, lo que
              marcó un punto crucial en mi trayectoria. Empecé a realizar
              cursos gratuitos que encontré en línea, y fue en este
              proceso de autoexploración que descubrí mi pasión por el
              desarrollo web. <br /><br />
              Impulsado por mi interés, me lancé a aprender más sobre el
              desarrollo web a través de cursos en línea. Tomé cursos tanto
              gratuitos en YouTube como cursos pagos en plataformas como Udemy.
              Inicialmente, adquirí sólidas bases en HTML, CSS y JavaScript, lo
              cual me proporcionó un fundamento sólido. Mi primer acercamiento a
              los frameworks fue con Angular, una tecnología que valoro por su
              robustez y su amplio conjunto de herramientas. Sin embargo, a
              medida que me sumergía más en Angular, encontré que la complejidad
              del boilerplate requerido me resultaba desafiante. <br /><br />
              Fue en este momento que decidí explorar React. Investigué su
              filosofía y su enfoque, y me cautivó de inmediato. Encontré una
              mayor comodidad y satisfacción al trabajar con esta biblioteca.
              Los cursos y las lecciones que tomaba sobre React eran mucho más
              accesibles y aplicables en ejercicios y proyectos personales.<br /><br /> Lo
              que más me atrajo de React es su filosofía adaptable. Mientras que
              Angular tiende a ofrecer una solución única para un problema,
              React aboga por múltiples enfoques para un mismo desafío. Ninguna
              de estas soluciones es inherentemente superior o inferior a la
              otra, pero después de explorar ambas opciones, definitivamente me
              siento más a gusto con la flexibilidad que ofrece React. <br /><br />
              Este viaje de autodescubrimiento y aprendizaje continuo me ha
              empoderado con habilidades versátiles y una perspectiva sólida en
              el mundo del desarrollo web. Mi pasión y compromiso con la mejora
              constante me impulsan a buscar oportunidades en equipos de
              desarrollo, donde pueda no solo contribuir, sino también continuar
              creciendo en un entorno colaborativo y dinámico.
            </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>¿Qué busco?</h1>
            <p className={styles.desc}>
              {/* Formar parte de un equipo de desarrolladores para poder trabajar,
              progresar y compartir experiencias. Estoy convencido que formar
              parte de un equipo es mucho más productivo que de manera autónoma,
              desde pedir ayuda/consejo para una determinada tarea, hasta ser
              uno mismo el que pueda ayudar a otro compañero, ganando amistades
              y habilidades blandas que beneficen tanto al actual grupo como a
              los venideros. */}
              Mi búsqueda se centra en integrarme en un equipo de
              desarrolladores comprometidos, con el objetivo de colaborar en
              proyectos desafiantes, fomentar un crecimiento profesional
              constante y nutrir un ambiente enriquecedor de intercambio de
              conocimientos. Estoy firmemente convencido de que la sinergia de
              trabajar en equipo supera con creces la eficacia de operar de
              manera autónoma. <br /><br />
              Creo que el trabajo en equipo va a brindarme la oportunidad de no
              solo abordar tareas técnicas de manera más eficiente, sino también
              de enriquecer mi comprensión y soluciones a través del intercambio
              directo de ideas y experiencias. La capacidad de consultar y
              recibir consejo de colegas experimentados es inestimable para
              abordar desafíos. Al mismo tiempo, anhelo contribuir con mi
              conocimiento y habilidades, brindando asistencia a mis compañeros
              de equipo cuando sea necesario. <br /><br />
              Un aspecto que valoro profundamente es la construcción de
              relaciones y amistades dentro del equipo. Creo que trabajar codo a
              codo con colegas no solo fomenta un ambiente positivo y motivador,
              sino que también promueve la formación de vínculos fuertes y
              duraderos. Esta camaradería no solo beneficia el rendimiento
              actual del equipo, sino que también sienta las bases para un
              legado de habilidades y conexiones que se transmiten a las
              generaciones futuras de colaboradores. <br /><br />
              Mi objetivo es contribuir de manera significativa a proyectos
              innovadores y ambiciosos, mientras sigo nutriendo mis habilidades
              técnicas y personales. Al sumergirme en un entorno de equipo
              dinámico, aspiro a aportar y recibir conocimientos de manera
              continua, impulsando así mi crecimiento y el de mis compañeros. En
              última instancia, mi visión es ser parte de un grupo que no solo
              obtenga logros notables en el presente, sino que también siente
              las bases para un legado que beneficiará a futuros equipos y
              proyectos.
            </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>¿Qué puedo aportar?</h1>
            <p className={styles.desc}>
              Una de las contribuciones más significativas que aspiro a hacer
              tanto a la empresa como al vasto mundo de la programación es
              abordar una problemática que persiste en muchos sectores: la falta
              de colaboración y apoyo entre desarrolladores. En todas las
              esferas de la industria, nos encontramos con personas que optan
              por no compartir sus conocimientos o experiencias, ya sea por
              orgullo personal o por la preocupación de trabajar en exceso.{" "}
              <br /><br />
              Personalmente, he atravesado esta barrera en mi propio camino de
              desarrollo, y esto me ha impulsado a tomar una determinación
              profunda. Mi compromiso es ser una fuerza transformadora, un
              catalizador de cambio que desafía este enfoque individualista. Mi
              objetivo es ofrecer mi mano y conocimiento a quienes se sienten
              abrumados, a aquellos que luchan solos en la búsqueda de
              soluciones y aprendizaje. <br /><br />
              Mi aportación se centra en crear un entorno de colaboración y
              apoyo, donde cada uno pueda sentirse seguro al buscar orientación
              y consejo. Mi misión es romper las barreras de la soledad y el
              desánimo, y en su lugar, fomentar una comunidad donde los
              problemas se aborden juntos y los éxitos se celebren
              conjuntamente. <br /><br />
              En mi visión, la programación no debe ser un camino solitario y
              desafiante, sino un viaje compartido hacia la maestría y la
              innovación. Desde compartir consejos prácticos hasta guiar a
              través de conceptos complejos, me dedico a estar presente para mis
              colegas desarrolladores en sus momentos de dificultad. Creo
              firmemente que cuando todos contribuimos con nuestro saber y
              apoyo, no solo elevamos nuestras habilidades individuales, sino
              que también enriquecemos y fortalecemos la comunidad en su
              conjunto. <br /><br />
              En resumen, mi aporte se basa en cambiar la narrativa, de manera
              que ningún compañero de trabajo se sienta solo o desamparado. Mi
              propósito es derribar las barreras del ego y la reticencia a
              colaborar, y en su lugar, construir un ecosistema en el que la
              ayuda mutua sea la norma, donde las dificultades se enfrenten con
              coraje colectivo y donde la pasión por el aprendizaje y el
              crecimiento se nutra con la ayuda desinteresada de aquellos que
              han recorrido el camino antes. <br /><br />
              Con respecto al apartado técnico mi compromiso no radica sólo en
              que el código funcione sino en su calidad. Puedo aportar una
              combinación de disciplina y enfoque ordenado en cada proyecto en
              el que participe. Mi objetivo radica en crear soluciones que no
              solo cumplan con su propósito, sino que también sean agradables de
              mantener y mejorar en el tiempo. Esta dedicación no solo beneficia
              a mi propio flujo de trabajo, sino que también crea una base
              sólida para colaborar eficazmente con otros desarrolladores,
              asegurando que todos podamos navegar por el código de manera
              fluida y eficiente en el camino hacia la innovación.
            </p>
          </div>
          <Button url="/contact" text="Contáctame" />
        </div>
      </div>
    </div>
  );
};
export default About;
