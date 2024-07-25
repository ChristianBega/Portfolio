import { DefaultTheme, TypographyStyle } from "styled-components";
import { TypographyProps } from "./types";

export const getTypographyStyle = (theme: DefaultTheme, component: TypographyProps["component"]): TypographyStyle | undefined => {
  return theme.typography[component as keyof DefaultTheme["typography"]] as TypographyStyle;
};
