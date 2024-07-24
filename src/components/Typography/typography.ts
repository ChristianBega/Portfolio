import styled from "styled-components";
import typographyStyles from "./index.styles";
import { TypographyProps } from "./types";

const Typography = styled.div<TypographyProps>`
  ${typographyStyles}
`;

Typography.defaultProps = {
  component: "p",
};

export default Typography;
