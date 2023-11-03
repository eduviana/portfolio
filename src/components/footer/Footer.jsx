import Image from "next/image";
import styles from "./footer.module.css";
import { useContext } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.containerWithBg}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.copy}>
            <div>©2023 Eduardo Viana.</div>
            <div>All rights reserved.</div>
          </div>
          <div className={styles.social}>
            <a
              href="https://www.facebook.com/eduviana/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Image
                src="/facebook.png"
                alt="Eduardo Viana facebook account"
                width={35}
                height={35}
                className={styles.icon}
              />
            </a>

            <a
              href="https://www.instagram.com/edu8653/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Image
                src="/instagram.png"
                alt="Eduardo Viana instagram account"
                width={35}
                height={35}
                className={styles.icon}
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Image
              src="/twitter.png"
              alt="Eduardo Viana twitter account"
              width={35}
              height={35}
              className={styles.icon}
            />
            </a>

            

            <a
              href="https://github.com/eduviana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Image
                src="/github.png"
                alt="Eduardo Viana youtube account"
                width={35}
                height={35}
                className={styles.icon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
