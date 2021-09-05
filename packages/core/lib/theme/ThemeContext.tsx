import React from "react";
import { Theme } from "./theme";

type ThemeContextProps = {
  theme: Theme;
};

export const ThemeContext = React.createContext<ThemeContextProps | null>(null);
export const ThemeProvider = ThemeContext.Provider;
