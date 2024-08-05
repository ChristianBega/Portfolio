import React, { ReactNode } from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";
import buttonStyles from "./index.styles";
import Typography from "../../components/Typography/typography";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

const Button: React.FC<ButtonProps> = ({ variant = "contained", size = "md", data, component, iconStart, iconEnd, children, ...props }) => {
  const navigate = useNavigate();
  const handleNavigation = (data: object | undefined, component: ReactNode) => {
    if (component === "link") {
      navigate(`/project-details`, { state: { ...data } });
    }
    return;
  };
  return (
    <StyledButton onClick={() => handleNavigation(data, component)} variant={variant} size={size} {...props}>
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

export default Button;
