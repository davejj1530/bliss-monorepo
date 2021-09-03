import React from "react";
import styled from "styled-components";

type Props =
  | {
      vertical?: string;
      horizontal?: string;
      children?: React.ReactNode;
    }
  | React.HTMLProps<HTMLDivElement>;

export const Space = (props: Props) => {
  return <StyledSpace {...props}>{props.children}</StyledSpace>;
};

const StyledSpace = styled.div`
  margin: ${(props) => props.vertical || "1rem"}
    ${(props) => props.horizontal || "0rem"};
`;
