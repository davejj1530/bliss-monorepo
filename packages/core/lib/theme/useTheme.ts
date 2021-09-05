import React, { useContext } from "react";

import { theme as defaultTheme } from "./theme";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  const themeToUse = context?.theme || defaultTheme;

  return { theme: themeToUse };
};
