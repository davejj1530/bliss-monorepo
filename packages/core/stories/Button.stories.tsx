import React from "react";

import { Meta } from "@storybook/react";

import { Button } from "../lib";
import { ThemeProvider } from "../lib/theme";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

export const Primary = () => <Button>Primary Button</Button>;

export const SecondaryButton = () => (
  <Button themeColor="secondary">Secondary Button</Button>
);

export const SuccessButton = () => (
  <Button themeColor="tertiary">Tertiary Button</Button>
);

export const PrimaryDark = () => (
  <Button themeColor="primary" pallette="dark">
    Primary Dark
  </Button>
);

export const SecondaryDark = () => (
  <Button themeColor="secondary" pallette="dark">
    Error Dark
  </Button>
);

export const TertiaryDark = () => (
  <Button themeColor="tertiary" pallette="dark">
    Success Dark
  </Button>
);

export const PrimaryLight = () => (
  <Button themeColor="primary" pallette="light">
    Primary Light
  </Button>
);

export const SecondaryLight = () => (
  <Button themeColor="secondary" pallette="light">
    Error Light
  </Button>
);

export const TertiaryLight = () => (
  <Button themeColor="tertiary" pallette="light">
    Success Light
  </Button>
);

export const CustomColor = () => <Button color="#3b49df">Custom Color</Button>;

export const SquareButton = () => (
  <Button square color="black">
    Square Button
  </Button>
);

export const PillButton = () => <Button pill>I am a Pill</Button>;

export const OutlinedButton = () => <Button outlined>Outline Button</Button>;

export const InterActiveButton = () => (
  <Button liftOnHover>Interact with me!</Button>
);

export const ElevatedButton = () => (
  <Button elevation={1}>Elevated Button</Button>
);

export const DisabledButton = () => (
  <Button disabled={true} type="error">
    Disabled Button
  </Button>
);

export const ButtonWithTheme = () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: {
            dark: "#2979ff",
            main: "#eaa",
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
      }}
    >
      <Button>HELLO FROM BUTTON WITH THEME</Button>
    </ThemeProvider>
  );
};
