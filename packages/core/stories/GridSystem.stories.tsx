import React from "react";

import { Meta } from "@storybook/react";

import { Box, Grid, Item } from "../lib";

export default {
  component: Grid,
  title: "Components/Grid System",
} as Meta;

export const SampleGridSystem = () => (
  <Grid>
    {new Array(5).fill("Item").map((item, i) => {
      return (
        <Item xs={12} md={4} lg={3} key={item + i}>
          <Box border="1px solid #cecece" p={0.5}>
            HELLO FROM ITEM {i + 1}
          </Box>
        </Item>
      );
    })}
  </Grid>
);
