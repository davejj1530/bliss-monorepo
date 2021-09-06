import React from "react";
import { Box } from "../Box";

type SideBarProps = {
  width?: number;
  children?: React.ReactNode;
  items?: React.ReactNode[];
};

export const SideBar = (props: SideBarProps) => {
  const { width = 250 } = props;

  return (
    <>
      <Box
        left="0px"
        top="0px"
        height="100%"
        width={width}
        border="1px solid #cecece"
        position="fixed"
        borderRadius="15px"
      >
        <Box p={2}>{props.items}</Box>
      </Box>
      <Box marginLeft={width}>{props.children}</Box>
    </>
  );
};
