import facepaint from "facepaint";

export const theme = {
  colors: {
    primary: "pink",
    secondary: "yellow",
    blue: "#306BB4",
    gray: "",
    darkGray: "#161616",
    lightGray: "#E3E3E0",
    red: "#EF1C24",
    darkRed: "#DC4F4F",
    yellow: "#FFCB08",
    white: "#E2E3DF",
  },
  background: {
    white: {
      backgroundColor: "#f9f9f9",
      opacity: 1,
      backgroundImage:
        "linear-gradient(135deg, #efefef 25%, transparent 25%), linear-gradient(225deg, #efefef 25%, transparent 25%), linear-gradient(45deg, #efefef 25%, transparent 25%), linear-gradient(315deg, #efefef 25%, #f9f9f9 25%)",
      backgroundPosition: "4px 0, 4px 0, 0 0, 0 0",
      backgroundSize: " 4px 4px",
      backgroundRepeat: "repeat",
    },
  },
};

export const breakpoints = [1200, 900, 500];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (max-width: ${bp}px)`)
);
