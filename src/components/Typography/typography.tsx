import styled from "styled-components";
import typographyStyles from "./index.styles";
import { TypographyProps } from "./types";

const StyledTypography = styled.div<TypographyProps>`
  ${typographyStyles}
`;

const Typography: React.FC<TypographyProps> = ({ component = "p", variant, children, ...props }) => {
  return (
    <StyledTypography as={component} component={component} variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
