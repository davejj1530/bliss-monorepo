import { theme, Theme } from "./theme";

export const createTheme = (customTheme: Theme) => {
  return { ...theme, customTheme };
};
