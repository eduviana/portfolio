// 'use client'
// import React, { createContext, useState, useEffect } from "react";

// const DarkModeContext = createContext();

// const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Obtener el valor del modo oscuro del localStorage si está disponible
//     const storedDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
//     if (storedDarkMode !== null) {
//       setIsDarkMode(storedDarkMode);
//     } else {
//       // Si no hay un valor en el localStorage, detectar preferencias del sistema
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       setIsDarkMode(prefersDark);
//     }
//   }, []);

//   useEffect(() => {
//     // Guardar el valor del modo oscuro en el localStorage cada vez que cambia
//     localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
//     // Actualizar el atributo "data-theme" en el body
//     document.body.dataset.theme = isDarkMode ? "dark" : "light";
//   }, [isDarkMode]);

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export { DarkModeContext, DarkModeProvider };

"use client";
import React, { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(null); // Inicializamos en null
  const [isLoading, setIsLoading] = useState(true); // Estado para saber si estamos cargando

  useEffect(() => {
    // Este useEffect se ejecuta inmediatamente, antes de renderizar el componente
    const storedDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (storedDarkMode !== null) {
      setIsDarkMode(storedDarkMode);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode !== null) {
      // Guardamos el tema seleccionado en localStorage
      localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
      // Aplicamos el tema al documento
      document.body.dataset.theme = isDarkMode ? "dark" : "light";
      setIsLoading(false); // Ya hemos cargado la preferencia
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode === null) {
      // Si isDarkMode es null, forzamos el tema correcto inmediatamente
      document.body.dataset.theme = "light"; // o "dark", dependiendo de tus preferencias por defecto
    }
  }, [isDarkMode]);

  if (isLoading) {
    // Mientras estamos cargando, no renderizamos nada o podemos mostrar un loader si lo prefieres
    return null;
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };