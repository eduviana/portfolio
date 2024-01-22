import React from "react";
import { items } from "../../data";
import styles from "./page.module.css";
import Carousel from "@/components/carousel/Carousel";
import GoBack from "@/components/goBack/GoBack";
import ButtonSecond from "@/components/buttons/ButtonSecond/ButtonSecond";

const getData = (id) => {
  const itemData = items.find((item) => item.id === Number(id));

  if (itemData) {
    return itemData;
  }

  return notFound();
};

const Details = ({ params }) => {
  const project = getData(params.id);
  const {
    id,
    title,
    liveSiteUrl,
    githubUrl,
    explanation,
    level,
    technologies,
    feedback,
    images,
  } = project;

  const explanationWithLineBreaks = explanation
    .split("/n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  const feedbackWithLineBreaks = feedback.split("/n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="container">
      <GoBack />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links}>
        <ButtonSecond text="Sitio Online" href={liveSiteUrl} />
        <ButtonSecond text="Repositorio" href={githubUrl} />
      </div>
      <div className={styles.content}>
        <Carousel images={images} technologies={technologies} level={level} />
        <div className={styles.textsContainer}>
          <div className={styles.objetiveContainer}>
            <h4 className={styles.objetive}>Objetivo</h4>
            <p className={styles.explanation}>{explanationWithLineBreaks}</p>
          </div>
          <div className={styles.learnedContainer}>
            <h4 className={styles.learned}>¿Qué aprendí?</h4>
            <p className={styles.feedback}>{feedbackWithLineBreaks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
