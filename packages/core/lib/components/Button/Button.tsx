import React from "react";
import styled from "styled-components";
import { Theme } from "../../theme";
import { useTheme } from "../../theme/useTheme";

type ButtonProps = {
  color?: string;
  square?: boolean;
  children?: React.ReactNode;
  pill?: boolean;
  outlined?: boolean;
  pallette?: "dark" | "light" | "main";
  themeColor?: "primary" | "secondary" | "tertiary";
  liftOnHover?: boolean;
  elevation?: number;
  theme?: Theme;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = ({
  type = "primary",
  elevation = 0,
  ...props
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <StyledButton theme={theme} type={type} elevation={elevation} {...props}>
      {props.children}
    </StyledButton>
  );
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

  const themeColor = props.themeColor || "primary";

  if (themeColor === "primary") return props.theme.colors.primary[pallette];
  if (themeColor === "secondary") return props.theme.colors.secondary[pallette];
  if (themeColor === "tertiary") return props.theme.colors.tertiary[pallette];
};

const handleLift = (props: ButtonProps) => {
  if (props.liftOnHover) {
    return "translateY(-7px)";
  }
};

const handleElevation = (props: ButtonProps) => {
  if (props.elevation) {
    return props.theme.elevation[props.elevation];
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
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:hover {
    &:not([disabled]) {
      opacity: 0.7;
      transform: ${handleLift};
    }
  }
`;
