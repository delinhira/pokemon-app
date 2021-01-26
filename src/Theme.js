import facepaint from "facepaint";

export const theme = {
  colors: {
    primary: "pink",
    secondary: "yellow",
  },
};

export const breakpoints = [420, 720, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);
