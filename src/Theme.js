import facepaint from "facepaint";

export const theme = {
  colors: {
    primary: "pink",
    secondary: "yellow",
    Gray: "",
    darkGray: "#161616",
    lightGray: "##E3E3E0",
    red: "#EF1C24",
    darkRed: "#DC4F4F",
    yellow: "#FFCB08",
    white: "#E2E3DF",
  },
};

export const breakpoints = [1200, 900, 500];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (max-width: ${bp}px)`)
);
