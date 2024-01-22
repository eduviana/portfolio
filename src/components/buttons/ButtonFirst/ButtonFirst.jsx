import Link from "next/link";
import styles from "./ButtonFirst.module.css";

const ButtonFirst = ({ text, url, type, disabled }) => {
  if (type !== "submit") {
    return (
      <Link href={url}>
        <button
          className={styles.container}
        >
          {text}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={styles.container} type="submit" disabled={disabled}>
        Enviar
      </button>
    );
  }
};

export default ButtonFirst;
