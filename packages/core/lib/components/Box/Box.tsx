import React from "react";
import styled, { css } from "styled-components";
import { blissStyleProps, BlissStylePropTypes } from "../../bliss_system";

type BoxProps = {
  children?: React.ReactNode;
} & React.CSSProperties &
  BlissStylePropTypes;

export const Box = (props: BoxProps) => {
  return (
    <StyledBox style={{ ...props }} {...props}>
      {props.children}
    </StyledBox>
  );
};

const handleBlissStyleProps = (props: BoxProps) => {
  let blissStyles = [];
  Object.keys(blissStyleProps).forEach((key) => {
    if (props[key]) {
      if (Array.isArray(blissStyleProps[key])) {
        blissStyleProps[key].forEach((blissStyleProp) => {
          blissStyles.push(
            `${blissStyleProp}:${
              typeof props[key] === "string" ? props[key] : props[key] + "rem"
            };`
          );
        });
      } else {
        blissStyles.push(
          `${blissStyleProps[key]}:${
            typeof props[key] === "string" ? props[key] : props[key] + "rem"
          };`
        );
      }
    }
  });

  return css`
    ${blissStyles.join("\n")}
  `;
};

const StyledBox = styled.div`
  ${handleBlissStyleProps}
`;
