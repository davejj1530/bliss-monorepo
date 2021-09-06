import React from "react";

import { Meta } from "@storybook/react";

import { Box, SideBar } from "../lib";

export default {
  component: SideBar,
  title: "Components/Sidebar",
} as Meta;

export const SamplePaddedBox = () => (
  <SideBar
    items={new Array(6).fill("item").map((item, i) => (
      <Box>FELLO FROM ITEM {i + 1}</Box>
    ))}
  >
    SIDEBAR CONTENT
  </SideBar>
);
