import styled, { css, DefaultTheme, TypographyStyle } from "styled-components";
import responsiveTypography from "../../utils/responsiveTypography";

interface TypographyProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  theme: DefaultTheme;
}

const getTypographyStyle = (theme: DefaultTheme, as: TypographyProps["as"]) => {
  return theme.typography[as] as TypographyStyle;
};

const typographyStyles = css<TypographyProps>`
  font-size: ${(props) => getTypographyStyle(props.theme, props.as).fontSize};
  font-weight: ${(props) => getTypographyStyle(props.theme, props.as).fontWeight};
  line-height: ${(props) => getTypographyStyle(props.theme, props.as).lineHeight};
  margin: ${(props) => getTypographyStyle(props.theme, props.as).margin};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) =>
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(props.as) ? props.theme.typography.fontFamilyHeader : props.theme.typography.fontFamily};
  ${(props) => responsiveTypography("sm", props.as)}
  ${(props) => responsiveTypography("md", props.as)}
  ${(props) => responsiveTypography("lg", props.as)}
  ${(props) => responsiveTypography("xl", props.as)}
`;

const Typography = styled.div<TypographyProps>`
  ${typographyStyles}
`;

Typography.defaultProps = {
  as: "p",
};

export default Typography;
