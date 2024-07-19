import styled from "styled-components";
import responsiveTypography from "../../utils/responsiveTypography";

const H1 = styled.h1`
  font-size: ${(props) => props.theme.typography.h1.fontSize};
  font-weight: ${(props) => props.theme.typography.h1.fontWeight};
  line-height: ${(props) => props.theme.typography.h1.lineHeight};
  margin: ${(props) => props.theme.typography.h1.margin};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamilyHeader};
  ${responsiveTypography("lg", "h1")}
`;

const H2 = styled.h2`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  margin: ${(props) => props.theme.typography.h2.margin};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily};
  ${responsiveTypography("lg", "h2")}
`;

const H3 = styled.h3`
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  font-weight: ${(props) => props.theme.typography.h3.fontWeight};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  margin: ${(props) => props.theme.typography.h3.margin};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const H4 = styled.h4`
  font-size: ${(props) => props.theme.typography.h4.fontSize};
  font-weight: ${(props) => props.theme.typography.h4.fontWeight};
  line-height: ${(props) => props.theme.typography.h4.lineHeight};
  margin: ${(props) => props.theme.typography.h4.margin};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const H5 = styled.h5`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.h5.fontWeight};
  line-height: ${(props) => props.theme.typography.h5.lineHeight};
  margin: ${(props) => props.theme.typography.h5.margin};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const H6 = styled.h6`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.h6.fontWeight};
  line-height: ${(props) => props.theme.typography.h6.lineHeight};
  margin: ${(props) => props.theme.typography.h6.margin};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

export { H1, H2, H3, H4, H5, H6 };
