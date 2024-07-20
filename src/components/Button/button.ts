import styled, { css, DefaultTheme } from "styled-components";

interface ButtonProps {
  variant: "contained" | "outlined";
  backgroundColor?: keyof DefaultTheme["colors"];
  textColor?: keyof DefaultTheme["colors"];
  borderColor?: keyof DefaultTheme["colors"];
  size: "sm" | "md" | "lg";
}

const getButtonStyles = (props: ButtonProps & { theme: DefaultTheme }) => {
  const { theme, variant, backgroundColor, textColor, borderColor } = props;
  const defaultStyles = theme.buttons[variant];

  return {
    backgroundColor:
      variant === "outlined" ? "transparent" : backgroundColor ? theme.colors[backgroundColor] : theme.colors[defaultStyles.backgroundColor],
    color: textColor ? theme.colors[textColor] : theme.colors[defaultStyles.color],
    borderColor: borderColor
      ? theme.colors[borderColor]
      : variant === "outlined" && defaultStyles.borderColor
      ? theme.colors[defaultStyles.borderColor]
      : "transparent",
  };
};

const buttonStyles = css<ButtonProps>`
  background-color: ${(props) => getButtonStyles(props).backgroundColor};
  color: ${(props) => getButtonStyles(props).color};
  border: ${(props) => (props.variant === "outlined" ? `1px solid ${getButtonStyles(props).borderColor}` : "none")};
  padding: ${(props) => (props.size === "sm" ? "10px 14px" : props.size === "md" ? "13px 16px" : "12px 24px")};
  border-radius: ${(props) => (props.size === "sm" ? "19px" : props.size === "md" ? "12px" : "100px")};
  font-size: ${(props) => (props.size === "sm" ? "14px" : props.size === "md" ? "16px" : "24px")};
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.fontFamilyButton};
  text-transform: capitalize;
  line-height: 1;
`;

const Button = styled.button<ButtonProps>`
  ${buttonStyles}
`;

Button.defaultProps = {
  variant: "contained",
  backgroundColor: "primary",
  textColor: "text",
  size: "md",
};

export default Button;
