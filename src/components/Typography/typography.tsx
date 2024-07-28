import styled from "styled-components";
import typographyStyles from "./index.styles";
import { TypographyProps } from "./types";

const StyledTypography = styled.div<TypographyProps>`
  ${typographyStyles}
`;

const Typography: React.FC<TypographyProps> = ({ component = "p", variant, iconStart, iconEnd, href, route, children, ...props }) => {
  return (
    <StyledTypography href={href && href} route={route && route} as={component} component={component} variant={variant} {...props}>
      {iconStart && <span>{iconStart}</span>}
      {children}
      {iconEnd && <span style={{ marginLeft: ".5rem" }}>{iconEnd}</span>}
    </StyledTypography>
  );
};

export default Typography;
