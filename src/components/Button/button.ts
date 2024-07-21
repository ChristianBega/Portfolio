import styled, { css, DefaultTheme } from "styled-components";

interface ButtonProps {
  variant: "contained" | "outlined";
  backgroundColor?: keyof DefaultTheme["colors"];
  backgroundGradient?: keyof DefaultTheme["gradients"];
  textColor?: keyof DefaultTheme["colors"];
  borderColor?: keyof DefaultTheme["colors"];
  size: "sm" | "md" | "lg";
}

const getButtonStyles = (props: ButtonProps & { theme: DefaultTheme }) => {
  const { theme, variant, backgroundColor, textColor, borderColor, backgroundGradient } = props;
  const defaultStyles = theme.buttons[variant];

  return {
    background:
      variant === "outlined"
        ? "transparent"
        : backgroundGradient
        ? theme.gradients[backgroundGradient]
        : backgroundColor
        ? theme.colors[backgroundColor]
        : theme.colors[defaultStyles.backgroundColor],
    color: textColor ? theme.colors[textColor] : theme.colors[defaultStyles.color],
    borderColor: borderColor
      ? theme.colors[borderColor]
      : variant === "outlined" && defaultStyles.borderColor
      ? theme.colors[defaultStyles.borderColor]
      : "transparent",
  };
};

const buttonStyles = css<ButtonProps>`
  background: ${(props) => getButtonStyles(props).background};
  color: ${(props) => getButtonStyles(props).color};
  border: ${(props) => (props.variant === "outlined" ? `1px solid ${getButtonStyles(props).borderColor}` : "none")};
  padding: ${(props) => (props.size === "sm" ? "10px 14px" : props.size === "md" ? "13px 16px" : "12px 24px")};
  border-radius: ${(props) => (props.size === "sm" ? "19px" : props.size === "md" ? "12px" : "100px")};
  font-size: ${(props) => (props.size === "sm" ? "14px" : props.size === "md" ? "16px" : "24px")};
  cursor: pointer;
  font-family: ${(props) => props.theme.typography.fontFamilyButton};
  text-transform: capitalize;
  line-height: 1;
  transition: all 4s ease;

  &:hover {
    background: ${(props) =>
      props.variant === "contained"
        ? "transparent"
        : props.backgroundGradient
        ? props.theme.gradients[props.backgroundGradient]
        : getButtonStyles({ ...props, variant: "contained" }).background};
    color: ${(props) =>
      props.variant === "contained"
        ? getButtonStyles({ ...props, variant: "outlined" }).color
        : getButtonStyles({ ...props, variant: "contained" }).color};
    border: ${(props) => (props.variant === "contained" ? `1px solid ${getButtonStyles({ ...props, variant: "outlined" }).borderColor}` : "none")};
  }
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
