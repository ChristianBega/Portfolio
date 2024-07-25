import { css, DefaultTheme, TypographyStyle } from "styled-components";
import { TypographyProps } from "../components/Typography/types"; // Adjust the import path based on your project structure

const responsiveTypography = (
  breakpoint: keyof DefaultTheme["breakpoints"],
  component: TypographyProps["component"],
  variant?: TypographyProps["variant"]
) => css`
  @media (min-width: ${(props) => props.theme.breakpoints[breakpoint]}) {
    font-size: ${(props) => {
      const typographyStyle = props.theme.typography[variant || (component as keyof DefaultTheme["typography"])] as TypographyStyle;
      return typographyStyle.responsive?.[breakpoint]?.fontSize || typographyStyle.fontSize;
    }};
  }
`;

export default responsiveTypography;
