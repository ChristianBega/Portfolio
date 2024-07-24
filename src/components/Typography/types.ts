import { DefaultTheme } from "styled-components";

export interface TypographyProps {
  //! add extra - body1, body2, subtile 1-2
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  theme: DefaultTheme;
}
