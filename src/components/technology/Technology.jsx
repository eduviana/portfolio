import { getTechnologyClass } from "@/helpers/getTechnologyClass";
import styles from "./technology.module.css";

const Technology = ({ technology }) => {
  const technologyClass = getTechnologyClass(technology);

  return (
    <span className={`${styles.technology} ${styles[technologyClass]}`}>
      {technology}
    </span>
  );
};
export default Technology;
