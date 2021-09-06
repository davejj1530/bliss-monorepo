import React from "react";

import { Meta } from "@storybook/react";

import { Box, Paper } from "../lib";

export default {
  component: Paper,
  title: "Components/Paper",
} as Meta;

export const SamplePaperComponent = () => (
  <Paper>
    <Box p={4}>Hi! I'm a Box with a padding</Box>
  </Paper>
);

export const SampleSquarePaper = () => (
  <Paper square>
    <Box p={3}>HELLO FROM SQUARE PAPER</Box>
  </Paper>
);

export const ElevatedPaper = () => (
  <Paper elevation={3}>
    <Box p={4}>HELLO FROM ELEVATED PAPER</Box>
  </Paper>
);
