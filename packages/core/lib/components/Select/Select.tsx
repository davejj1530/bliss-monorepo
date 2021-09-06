import React, { SelectHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type SelectProps = {
  options?: Option[];
  fullWidth?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

type Option = {
  label: string;
  value: string;
};

export const Select = React.forwardRef((props: SelectProps, ref) => {
  const { options = [], ...rest } = props;
  return (
    <StyledSelect ref={ref} {...rest}>
      {props.options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        );
      })}
    </StyledSelect>
  );
});

const handleFullWidth = (props: SelectProps) => {
  if (props.fullWidth) {
    return css`
      width: 100%;
    `;
  }
};

const StyledSelect = styled.select`
  padding: 10px 6px;
  outline: none;
  border: 1px solid #eee;
  border-radius: 4px;
  ${handleFullWidth}
`;
