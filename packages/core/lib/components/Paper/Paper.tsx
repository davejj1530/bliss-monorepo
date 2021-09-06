import React from "react";
import styled, { css } from "styled-components";

type PaperProps = {
  children?: React.ReactNode;
  elevation?: number;
  square?: boolean;
};

export const Paper = (props: PaperProps) => {
  const { elevation = 1 } = props;
  return (
    <StyledPaper elevation={elevation} {...props}>
      {props.children}
    </StyledPaper>
  );
};

const handlePaperElevation = (props: PaperProps) => {
  return css`
    box-shadow: 0 ${props.elevation * 2}px ${props.elevation * 3}px -1px #777;
  `;
};

const handleSquareProps = (props: PaperProps) => {
  if (props.square) {
    return css`
      border-radius: 0px;
    `;
  }
  return css`
    border-radius: 5px;
  `;
};

const StyledPaper = styled.div`
  ${handleSquareProps}
  ${handlePaperElevation}
`;
