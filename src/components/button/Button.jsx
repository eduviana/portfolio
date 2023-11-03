import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ text, url, size, type, disabled }) => {
  if (type !== "submit") {
    return (
      <Link href={url}>
        <button
          className={`${styles.container} ${
            size === "small" ? styles.small : ""
          }`}
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

export default Button;
