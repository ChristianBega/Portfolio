import styled from "styled-components";
import typographyStyles from "./index.styles";
import { TypographyProps } from "./types";

const StyledTypography = styled.div<TypographyProps>`
  ${typographyStyles}
`;

const Typography: React.FC<TypographyProps> = ({ component, children, ...props }) => {
  return (
    <StyledTypography component={component} {...props}>
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  component: "p",
};

export default Typography;
