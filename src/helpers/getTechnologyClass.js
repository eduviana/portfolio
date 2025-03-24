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
  } else if (technology === "shadcn") {
    return "shadcn";
  } else if (technology === "mongo") {
    return "mongo";
  } else if (technology === "clerk") {
    return "clerk"
  } else if (technology === "prisma") {
    return "prisma"
  }
  // Si no hay una clase específica, devuelve la clase por defecto
  return "technology";
};
