import facepaint from "facepaint";

export const theme = {
  colors: {
    primary: "pink",
    secondary: "yellow",
  },
};

export const breakpoints = [500, 900, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);
