import responsiveTypography from "../../utils/responsiveTypography";
import { getTypographyStyle } from "./getTypographyStyle";
import { TypographyProps } from "./types";
import { css } from "styled-components";

const typographyStyles = css<TypographyProps>`
  font-size: ${(props) =>
    props.variant ? props.theme.typography[props.variant].fontSize : getTypographyStyle(props.theme, props.component)?.fontSize};
  text-transform: ${(props) => (props.variant ? props.theme.typography[props.variant].textTransform : "")};
  display: ${(props) => (props.variant ? props.theme.typography[props.variant].display : "block")};
  font-weight: ${(props) => getTypographyStyle(props.theme, props.component)?.fontWeight};
  line-height: ${(props) => getTypographyStyle(props.theme, props.component)?.lineHeight};
  margin: ${(props) => getTypographyStyle(props.theme, props.component)?.margin};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => (props.variant ? `${props.theme.typography[props.variant].paddingHover}` : "none")};
  font-family: ${(props) =>
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(props.component as string)
      ? props.theme.typography.fontFamilyHeader
      : props.variant
      ? props.theme.typography[props.variant].fontFamily
      : props.theme.typography.fontFamily};
  ${(props) => responsiveTypography("lg", props.component, props.variant)}
  &:hover {
    border-bottom: ${(props) => (props.variant ? `${props.theme.typography[props.variant].borderBottomHover}` : "none")};
    padding: ${(props) => (props.variant ? `${props.theme.typography[props.variant].paddingHover}` : "none")};
    background-image: ${(props) => (props.variant ? props.theme.typography[props.variant].backgroundHover : "none")};
  }
`;

export default typographyStyles;
