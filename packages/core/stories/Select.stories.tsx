import React from "react";

import { Meta } from "@storybook/react";

import { Select } from "../lib";

export default {
  component: Select,
  title: "Components/Select",
} as Meta;

export const SampleSelect = () => (
  <Select
    options={new Array(4)
      .fill("item")
      .map((item, i) => ({ label: `ITEM NUMBER ${i + 1}`, value: i + 1 + "" }))}
  />
);

export const fullWidthSelect = () => (
  <Select
    fullWidth
    options={new Array(4)
      .fill("item")
      .map((item, i) => ({ label: `ITEM NUMBER ${i + 1}`, value: i + 1 + "" }))}
  />
);
