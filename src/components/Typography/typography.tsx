import styled from "styled-components";
import typographyStyles from "./index.styles";
import { TypographyProps } from "./types";

const StyledTypography = styled.div<TypographyProps>`
  ${typographyStyles}
`;

const Typography: React.FC<TypographyProps> = ({ component = "p", variant, iconStart, iconEnd, children, ...props }) => {
  return (
    <StyledTypography as={component} component={component} variant={variant} {...props}>
      {/* <div style={{ display: "flex", alignItems: "center", gap: ".5rem", justifyContent: variant === "navigation_text" ? "center" : "none" }}> */}
      {iconStart && <span>{iconStart}</span>}
      {children}
      {iconEnd && <span>{iconEnd}</span>}
      {/* </div> */}
    </StyledTypography>
  );
};

export default Typography;
