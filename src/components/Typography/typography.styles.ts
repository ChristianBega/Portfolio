import responsiveTypography from "../../utils/responsiveTypography";
import { getTypographyStyle } from "./getTypographyStyle";
import { TypographyProps } from "./types";
import { css } from "styled-components";

const typographyStyles = css<TypographyProps>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "flex-start")};
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : props.variant ? props.theme.typography[props.variant].cursor : "default")};
  font-size: ${(props) =>
    props.variant ? props.theme.typography[props.variant].fontSize : getTypographyStyle(props.theme, props.component)?.fontSize};
  text-transform: ${(props) => (props.variant ? props.theme.typography[props.variant].textTransform : "")};
  display: ${(props) => (props.variant ? props.theme.typography[props.variant].display : "")};
  font-weight: ${(props) => getTypographyStyle(props.theme, props.component)?.fontWeight};
  line-height: ${(props) => getTypographyStyle(props.theme, props.component)?.lineHeight};
  margin: ${(props) => getTypographyStyle(props.theme, props.component)?.margin};
  margin-bottom: ${(props) => (props.mb ? props.mb : "none")};
  padding: ${(props) => (props.variant ? `${props.theme.typography[props.variant].paddingHover}` : "none")};
  letter-spacing: ${(props) => (props.variant ? `${props.theme.typography[props.variant].letterSpacing}rem` : "")};
  color: ${(props) =>
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(props.component as string)
      ? props.theme.colors.text_secondary
      : props.variant
      ? props.theme.typography[props.variant].color
      : props.theme.colors.text_primary};
  font-family: ${(props) =>
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(props.component as string)
      ? props.theme.typography.fontFamilyHeader
      : props.variant
      ? props.theme.typography[props.variant].fontFamily
      : props.theme.typography.fontFamily};
  ${(props) => responsiveTypography("lg", props.component, props.variant)};
  transition: background-image 0.6s ease-in-out, color 0.3s ease-in-out, border-bottom 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  border-bottom: 1px solid ${(props) => props.theme.colors.transparent};
  background-image: ${(props) => props.theme.colors.transparent};
  &:hover {
    text-shadow: ${(props) => (props.variant ? `${props.theme.typography[props.variant].textShadowHover}` : "none")};
    border-bottom: ${(props) =>
      props.variant ? `${props.theme.typography[props.variant].borderBottomHover}` : `1px solid ${props.theme.colors.transparent}`};
    background-image: ${(props) => (props.variant ? props.theme.typography[props.variant].backgroundHover : "none")};
    color: ${(props) => (props.variant ? props.theme.typography[props.variant].colorHover : "")};
    img {
      filter: saturate(0);
    }
  }
`;

export default typographyStyles;
