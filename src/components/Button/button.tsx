import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";
import buttonStyles from "./button.styles";
import Typography from "../../components/Typography/typography";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../utils/navigateTo/navigateTo.utils";

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

const Button: React.FC<ButtonProps> = ({ variant = "contained", size = "md", iconStart, iconEnd, navigationOptions, children, ...props }) => {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigationOptions && handleNavigation(navigate, navigationOptions)} variant={variant} size={size} {...props}>
      <div style={{ display: "flex", alignItems: "center", gap: variant !== "circular" ? ".5rem" : "0rem" }}>
        {iconStart && <span>{iconStart}</span>}
        <Typography component="p" variant="button_text">
          {children}
        </Typography>
        {iconEnd && <span>{iconEnd}</span>}
      </div>
    </StyledButton>
  );
};

export default Button;
