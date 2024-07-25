import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";
import buttonStyles from "./index.styles";
import Typography from "../../components/Typography/typography";

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  size = "md",
  // backgroundColor = "",
  // backgroundColorHover = "",
  // backgroundGradient = "",
  // textColor = "",
  // borderColor = "",
  // borderColorHover = "",
  iconStart,
  iconEnd,
  children,
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        {iconStart && <span>{iconStart}</span>}
        <Typography component="p" variant="button_text">
          {children}
        </Typography>
        {iconEnd && <span>{iconEnd}</span>}
      </div>
    </StyledButton>
  );
};

// Removed defaultProps

export default Button;
