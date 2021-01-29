export const toTitleCase = (string) => {
  return string
    .split("-")
    .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
    .join(" ");
};
