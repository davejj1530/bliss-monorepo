export type Theme = {
  colors: Pallette;
  elevation?: Elevation;
};

type Pallette = {
  primary: PalleteWeights;
  secondary: PalleteWeights;
  tertiary: PalleteWeights;
};

type PalleteWeights = {
  dark: string;
  main: string;
  light: string;
};

type Elevation = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

export const theme: Theme = {
  colors: {
    primary: {
      dark: "#2979ff",
      main: "#03a9f4",
      light: "#35baf6",
    },
    secondary: {
      dark: "#a73a38",
      main: "#f44336",
      light: "#d15353",
    },
    tertiary: {
      dark: "#357a38",
      main: "#4caf50",
      light: "#6fbf73",
    },
  },
  elevation: {
    1: "2px 2px 2px #cecece",
    2: "2px 4px 2px #cecece",
    3: "2px 4px 8px #cecece",
    4: "2px 6px 8px #cecece",
    5: "2px 8px 10px #cecece",
  },
};
