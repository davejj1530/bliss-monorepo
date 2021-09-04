import React from "react";

import { Meta } from "@storybook/react";

import { Button } from "../lib";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

export const Primary = () => <Button>Primary Button</Button>;

export const ErrorButton = () => <Button type="error">Error Button</Button>;

export const SuccessButton = () => (
  <Button type="success">Success Button</Button>
);

export const PrimaryDark = () => (
  <Button type="primary" pallette="dark">
    Primary Dark
  </Button>
);

export const ErrorDark = () => (
  <Button type="error" pallette="dark">
    Error Dark
  </Button>
);

export const SuccessDark = () => (
  <Button type="success" pallette="dark">
    Success Dark
  </Button>
);

export const PrimaryLight = () => (
  <Button type="primary" pallette="light">
    Primary Dark
  </Button>
);

export const ErrorLight = () => (
  <Button type="error" pallette="light">
    Error Dark
  </Button>
);

export const SuccessLight = () => (
  <Button type="success" pallette="light">
    Success Dark
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
