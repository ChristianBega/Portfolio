import { css, DefaultTheme } from "styled-components";

const responsiveTypography = (breakpoint: keyof DefaultTheme["breakpoints"], key: keyof DefaultTheme["typography"]) => css`
  @media (min-width: ${(props) => props.theme.breakpoints[breakpoint]}) {
    font-size: ${(props) => props.theme.typography[key].responsive[breakpoint].fontSize};
  }
`;

export default responsiveTypography;
