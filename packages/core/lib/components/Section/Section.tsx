import React from "react";
import styled from "styled-components";

type Props =
  | {
      borded?: boolean;
      children?: React.ReactNode;
    }
  | React.HTMLProps<HTMLDivElement>;

export const Section = (props: Props) => {
  return <StyledSection {...props}>{props.children}</StyledSection>;
};

const StyledSection = styled.div`
  border: 1px solid #eee;
  padding: 1rem;
`;
