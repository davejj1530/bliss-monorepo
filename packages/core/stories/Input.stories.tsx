import React from "react";

import { Meta } from "@storybook/react";

import { Input } from "../lib";

export default {
  component: Input,
  title: "Components/Input",
} as Meta;

export const SampleInput = () => <Input />;

export const SampleFullWidthInput = () => (
  <Input fullWidth placeholder="Im a full width input" />
);
