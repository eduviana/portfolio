'use client'
import React, { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Obtener el valor del modo oscuro del localStorage si está disponible
    const storedDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (storedDarkMode !== null) {
      setIsDarkMode(storedDarkMode);
    } else {
      // Si no hay un valor en el localStorage, detectar preferencias del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Guardar el valor del modo oscuro en el localStorage cada vez que cambia
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    // Actualizar el atributo "data-theme" en el body
    document.body.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };