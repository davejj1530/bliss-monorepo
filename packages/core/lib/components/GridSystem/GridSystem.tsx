import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../bliss_system";

type GridProps = {
  children?: React.ReactNode;
  spacing?: number;
  center?: boolean;
};

type ItemProps = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children?: React.ReactNode;
  spacing?: number;
} & React.HTMLProps<HTMLDivElement>;

type GridContext = {
  spacing: number;
};

const SpacingContext = React.createContext<GridContext | null>(null);

export const Grid = (props: GridProps) => {
  const SpacingProvider = SpacingContext.Provider;
  return (
    <StyledGrid {...props}>
      <SpacingProvider value={{ spacing: props.spacing || 1 }}>
        {props.children}
      </SpacingProvider>
    </StyledGrid>
  );
};

export const Item = (props: ItemProps) => {
  const context = useContext(SpacingContext);
  return (
    <StyledItem {...props} spacing={context.spacing}>
      {props.children}
    </StyledItem>
  );
};

const handleCenterGrid = (props: GridProps) => {
  if (props.center) {
    return css`
      justify-content: center;
    `;
  }
};

const handleItemBreakPoints = (props: ItemProps) => {
  let breakPointStyles = [];

  Object.keys(breakpoints).forEach((key) => {
    if (props[key]) {
      const widthPercentage = (
        (props[key] / 12) *
        (100 - props.spacing * 2)
      ).toFixed(2);

      breakPointStyles.push(
        `@media (min-width: ${breakpoints[key]}){
                    width: ${widthPercentage}%;
                    margin: ${props.spacing * 2}px;
                }`
      );
    }
  });

  return css`
    ${breakPointStyles.join("\n")}
  `;
};

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${handleCenterGrid}
`;

const StyledItem = styled.div`
  ${handleItemBreakPoints}
`;
