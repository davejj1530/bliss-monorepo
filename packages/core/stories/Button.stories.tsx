import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../lib";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <Button />;
});
