import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type ButtonProps = {
  color?: string;
  square?: boolean;
  children?: React.ReactNode;
  pill?: boolean;
  outlined?: boolean;
  pallette?: "dark" | "light";
  type?: "primary" | "success" | "error";
  liftOnHover?: boolean;
  elevation?: number;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const handleBackgroundColor = (props: ButtonProps) => {
  if (props.outlined) {
    return "#fff";
  }

  return handleButtonColorization(props);
};

const handleBorder = (props: ButtonProps) => {
  if (props.outlined) {
    return handleButtonColorization(props);
  }

  return "transparent";
};

const handleButtonTextColor = (props: ButtonProps) => {
  if (props.outlined) {
    return handleButtonColorization(props);
  }

  return "white";
};

const handleButtonColorization = (props: ButtonProps) => {
  if (props.color) {
    return props.color;
  }

  const pallette = props.pallette || "main";

  const type = props.type || "primary";

  if (type === "primary") return theme.colors.blue[pallette];
  if (type === "error") return theme.colors.red[pallette];
  if (type === "success") return theme.colors.green[pallette];
};

const handleLift = (props: ButtonProps) => {
  if (props.liftOnHover) {
    return "translateY(-7px)";
  }
};

const handleElevation = (props: ButtonProps) => {
  if (props.elevation) {
    return theme.elevation[props.elevation];
  }
  return "";
};

const StyledButton = styled.button`
  background-color: ${handleBackgroundColor};
  padding: 8px 1rem;
  color: ${handleButtonTextColor};
  border-radius: ${(props) =>
    props.square ? "0px" : props.pill ? "15px" : "5px"};
  border-color: ${handleBorder};
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  box-shadow: ${handleElevation};
  &:hover {
    opacity: 0.7;
    transform: ${handleLift};
  }
`;
