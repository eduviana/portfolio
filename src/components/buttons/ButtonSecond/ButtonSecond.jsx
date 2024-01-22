import Link from "next/link";
import styles from "./ButtonSecond.module.css";

const ButtonSecond = ({ text, href }) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className={`${styles.btn} ${styles.btnSecond}`}
    >
      {text}
      <span></span>
      <span></span>
    </a>
  );
};
export default ButtonSecond;

