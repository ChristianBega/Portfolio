// import { css, DefaultTheme, TypographyStyle } from "styled-components";

// const responsiveTypography = (breakpoint: keyof DefaultTheme["breakpoints"], element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span") => css`
//   @media (min-width: ${(props) => props.theme.breakpoints[breakpoint]}) {
//     font-size: ${(props) =>
//       (props.theme.typography[element] as TypographyStyle).responsive?.[breakpoint]?.fontSize ||
//       (props.theme.typography[element] as TypographyStyle).fontSize};
//   }
// `;

// export default responsiveTypography;

import { css, DefaultTheme, TypographyStyle } from "styled-components";
import { TypographyProps } from "../components/Typography/types"; // Adjust the import path based on your project structure

const responsiveTypography = (breakpoint: keyof DefaultTheme["breakpoints"], element: TypographyProps["component"]) => css`
  @media (min-width: ${(props) => props.theme.breakpoints[breakpoint]}) {
    font-size: ${(props) =>
      (props.theme.typography[element as keyof DefaultTheme["typography"]] as TypographyStyle).responsive?.[breakpoint]?.fontSize ||
      (props.theme.typography[element as keyof DefaultTheme["typography"]] as TypographyStyle).fontSize};
  }
`;

export default responsiveTypography;
