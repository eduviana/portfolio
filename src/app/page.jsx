import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Projects from "@/components/projects/Projects";
import ButtonFirst from "@/components/buttons/ButtonFirst/ButtonFirst";

export default function Home() {
  return (
    <div className="container">
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Desarrollador Web Frontend</h1>
          <p className={styles.description}>
            ¡Bienvenido/a a mi sitio web!. Aquí encontrarás tanto mi información
            personal como los trabajos que he realizado, por lo que podrás
            conocer mi nivel de programación.
          </p>
          <div className={styles.buttonsContainer}>
            <ButtonFirst url="/about" text="Sobre mí" size="small" />
            <ButtonFirst url="#portfolio" text="Proyectos" size="small" />
          </div>
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="illustration" className={styles.img} />
        </div>
      </div>
      <h1 id="portfolio" className={styles.titleSection}>
        Mis Proyectos
      </h1>
      <div>
        <Projects />
      </div>
    </div>
  );
}
