import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";
import buttonStyles from "./index.styles";
import Typography from "../../components/Typography/typography";

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

const Button: React.FC<ButtonProps> = ({ iconStart, iconEnd, children, ...props }) => {
  return (
    <StyledButton {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        {iconStart && <span>{iconStart}</span>}
        <Typography component="p">{children}</Typography>
        {iconEnd && <span>{iconEnd}</span>}
      </div>
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "contained",
  size: "md",
  // backgroundColor: "",
  // backgroundColorHover: "",
  // backgroundGradient: "",
  // textColor: "",
  // borderColor: "",
  // borderColorHover: ""
};

export default Button;
