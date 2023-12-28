"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import Hamburguer from "../icons/Hamburguer";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Close from "../icons/Close";
import { DarkModeContext } from "@/context/DarkModeContext";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
  },
  {
    id: 2,
    title: "Portafolio",
    url: "/#portfolio",
  },
  {
    id: 4,
    title: "Sobre Mí",
    url: "/about",
  },
  {
    id: 5,
    title: "Contacto",
    url: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.background}>
      <div className="container">
        <div className={styles.container}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/profile.jpg"
              width={70}
              height={70}
              alt="foto de perfil"
              className={styles.profile}
            />
            <p href="/" className={styles.name}>
              Eduardo Viana
            </p>
          </Link>
          <div className={styles.menu}>
            <DarkModeToggle toggleDarkMode={toggleDarkMode} />
            <Hamburguer
              fill={isDarkMode ? "white" : "black"}
              className={styles.hamburguer}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && (
              <div className={styles.menuOpened}>
                <Close
                  fill="black"
                  className={styles.close}
                  onClick={() => setIsMenuOpen(false)}
                />
                <div className={styles.links}>
                  {links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.url}
                      className={styles.link}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className={styles.links}>
              {links.map((link) => (
                <Link key={link.id} href={link.url} className={styles.link}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
