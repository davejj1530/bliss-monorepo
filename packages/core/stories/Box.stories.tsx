import React from "react";

import { Meta } from "@storybook/react";

import { Box } from "../lib";

export default {
  component: Box,
  title: "Components/Box",
} as Meta;

export const SamplePaddedBox = () => (
  <Box p={4}>Hi! I'm a Box with a padding</Box>
);

export const BorderedBox = () => (
  <Box border="1px solid #eee" p={4}>
    BORDERED BOX
  </Box>
);
