import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type InputProps = {
  fullWidth?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef((props: InputProps, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

const handleFullWidth = (props: InputProps) => {
  if (props.fullWidth) {
    return css`
      width: 100%;
    `;
  }
};

const StyledInput = styled.input`
  padding: 10px 1rem;
  outline: none;
  background-color: #fefefe;
  border: 1px solid #eee;
  border-radius: 4px;
  ${handleFullWidth}
`;
