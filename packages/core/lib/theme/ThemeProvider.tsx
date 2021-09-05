import React from "react";
import { Theme } from ".";
import { theme as defaultTheme } from "./theme";
import { ThemeProvider as BlissTheme } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Theme;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <BlissTheme
      value={{
        theme: props.theme ? { ...defaultTheme, ...props.theme } : defaultTheme,
      }}
    >
      {props.children}
    </BlissTheme>
  );
};
