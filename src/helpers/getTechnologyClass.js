export const getTechnologyClass = (technology) => {
  if (technology === "html") {
    return "html";
  } else if (technology === "css") {
    return "css";
  } else if (technology === "js") {
    return "js";
  } else if (technology === "react") {
    return "react";
  } else if (technology === "tailwind") {
    return "tailwind";
  } else if (technology === "sass") {
    return "sass";
  } else if (technology === "next") {
    return "next";
  } else if (technology === "ts") {
    return "ts";
  } else if (technology === "material") {
    return "material";
  } else if (technology === "strapi") {
    return "strapi";
  } else if (technology === "stripe") {
    return "stripe";
  } else if (technology === "redux") {
    return "redux";
  } else if (technology === "bootstrap") {
    return "bootstrap";
  } else if (technology === "remix") {
    return "remix";
  } else if (technology === "sanity") {
    return "sanity";
  }
  // Si no hay una clase específica, devuelve la clase por defecto
  return "technology";
};
