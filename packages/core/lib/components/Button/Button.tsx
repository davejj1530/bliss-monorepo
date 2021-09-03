import React from "react";
import styled from "styled-components";

type Props =
  | {
      color?: string;
      square?: boolean;
      error?: boolean;
      children?: React.ReactNode;
      pill?: boolean;
    }
  | React.HTMLProps<HTMLButtonElement>;

export const Button = (props: Props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${(props) => (props.error ? "red" : "#000")};
  padding: 8px 1rem;
  color: white;
  border-radius: ${(props) =>
    props.square ? "0px" : props.pill ? "15px" : ""};
`;
