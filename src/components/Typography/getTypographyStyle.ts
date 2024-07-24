import { DefaultTheme, TypographyStyle } from "styled-components";
import { TypographyProps } from "./types";

export const getTypographyStyle = (theme: DefaultTheme, component: TypographyProps["component"]) => {
  return theme.typography[component] as TypographyStyle;
};
