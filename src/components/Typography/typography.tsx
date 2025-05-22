import styled from "styled-components";
import typographyStyles from "./typography.styles";
import { TypographyProps } from "./types";
import { ReactNode } from "react";
const StyledTypography = styled.div<TypographyProps>`
  ${typographyStyles}
`;

const Typography: React.FC<TypographyProps> = ({
  component = "p",
  variant,
  iconStart,
  iconEnd,
  href,
  route,
  children,
  keyWords,
  handleClose,
  disabled,
  ...props
}) => {
  const highlightKeywords = (text: string, keywords: string[]): ReactNode[] => {
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    return text.split(regex).map((part, index) =>
      keywords.includes(part.toLowerCase()) ? (
        <span key={index} style={{ color: "#fff", display: "inline" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const renderContent = (): ReactNode => {
    if (typeof children === "string" && keyWords) {
      return highlightKeywords(children, keyWords);
    }
    return children;
  };

  return (
    <StyledTypography
      disabled={disabled}
      onClick={disabled ? undefined : handleClose}
      href={disabled ? undefined : href && href}
      to={disabled ? undefined : route && route}
      as={component}
      component={component}
      variant={variant}
      // target={component === "a" ? "_blank" : undefined}
      // rel={component === "a" ? "noopener noreferrer" : undefined}
      {...props}
    >
      {iconStart && <span style={{ marginRight: ".5rem" }}>{iconStart}</span>}
      {renderContent()}
      {iconEnd && <span style={{ marginLeft: ".5rem" }}>{iconEnd}</span>}
    </StyledTypography>
  );
};

export default Typography;
