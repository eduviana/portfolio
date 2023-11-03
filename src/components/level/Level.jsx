import { getLevelClass } from "@/helpers/getLevelClass";
import styles from "./level.module.css";

const Level = ({ level }) => {
  const levelClass = getLevelClass(level);

  return (
    <span className={`${styles.level} ${styles[levelClass]}`}>{level}</span>
  );
};
export default Level;
