export const getLevelClass = (level) => {
  if (level === "newbie") {
    return "newbie";
  } else if (level === "junior") {
    return "junior";
  } else if (level === "intermediate") {
    return "intermediate";
  } else if (level === "advanced") {
    return "advanced";
  } else if (level === "guru") {
    return "guru";
  }

  return "level";
};
