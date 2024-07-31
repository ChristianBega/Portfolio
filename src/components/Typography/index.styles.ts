import responsiveTypography from "../../utils/responsiveTypography";
import { getTypographyStyle } from "./getTypographyStyle";
import { TypographyProps } from "./types";
import { css } from "styled-components";

const typographyStyles = css<TypographyProps>`
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "flex-start")};
  cursor: ${(props) => (props.variant ? props.theme.typography[props.variant].cursor : "default")};
  font-size: ${(props) =>
    props.variant ? props.theme.typography[props.variant].fontSize : getTypographyStyle(props.theme, props.component)?.fontSize};
  text-transform: ${(props) => (props.variant ? props.theme.typography[props.variant].textTransform : "")};
  display: ${(props) => (props.variant ? props.theme.typography[props.variant].display : "flex")};
  font-weight: ${(props) => getTypographyStyle(props.theme, props.component)?.fontWeight};
  line-height: ${(props) => getTypographyStyle(props.theme, props.component)?.lineHeight};
  margin: ${(props) => getTypographyStyle(props.theme, props.component)?.margin};
  margin-bottom: ${(props) => (props.mb ? props.mb : "none")};
  color: ${(props) => (props.variant ? props.theme.typography[props.variant].color : props.theme.colors.text)};
  padding: ${(props) => (props.variant ? `${props.theme.typography[props.variant].paddingHover}` : "none")};
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
    color: ${(props) => (props.variant ? props.theme.typography[props.variant].colorHover : props.theme.colors.text)};
    img {
      filter: saturate(0);
    }
  }
`;

export default typographyStyles;
