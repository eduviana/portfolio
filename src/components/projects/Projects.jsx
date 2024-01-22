"use client";
import { items } from "@/data";
import styles from "./projects.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ButtonFirst from "../buttons/ButtonFirst/ButtonFirst";

const Projects = () => {
  return (
    <div className={styles.projects}>
      {items.map((item) => (
        <Project key={item.id} item={item} />
      ))}
    </div>
  );
};

const Project = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${styles.project} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={item.image}
          alt={item.title}
          fill={true}
        />
      </div>
      <div className={styles.content}>
        {/* <span className={styles.source}>{`Origen: ${item.source}`}</span> */}
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <ButtonFirst text="Ver más" url={`${item.id}`} />
      </div>
    </div>
  );
};

export default Projects;
