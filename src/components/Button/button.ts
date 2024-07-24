import styled from "styled-components";
import { ButtonProps } from "./types";
import buttonStyles from "./index.styles";

const Button = styled.button<ButtonProps>`
  ${buttonStyles}
`;

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
