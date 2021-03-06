import facepaint from "facepaint";

export const theme = {
  colors: {
    blue: "#306BB4",
    fadeBlue: "#97B5D9",
    darkGray: "#161616",
    lightGray: "#E3E3E0",
    red: "#EF1C24",
    fadeRed: "#FABABD",
    darkRed: "#DC4F4F",
    yellow: "#FFCB08",
    white: "#F9F9F9",
    type: {
      bug: "#99A717",
      dark: "#543E32",
      dragon: "#705BD8",
      electric: "#FAB917",
      fairy: "#ECA3EC",
      fighting: "#90513D",
      flying: "#5D74D6",
      fire: "#ED410D",
      ghost: "#5453A0",
      grass: "#67BC2B",
      ground: "#9F8541",
      ice: "#6BD4F4",
      normal: "#ADA593",
      poison: "#9D599C",
      psychic: "#E74D83",
      rock: "#9F873D",
      shadow: "#281946",
      steel: "#141518",
      unknown: "#4E5F6D",
      water: "#2281E2",
    },
  },
  breakpoints: {
    small: "500",
    medium: "900",
    large: "1200",
  },
};

export const breakpoints = [
  theme.breakpoints.small,
  theme.breakpoints.medium,
  theme.breakpoints.large,
];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);
