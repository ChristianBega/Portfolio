import styled from "styled-components";
import typographyStyles from "./typography.styles";
import { TypographyProps } from "./types";
import { ReactNode } from "react";

const StyledTypography = styled.div<TypographyProps>`
  ${typographyStyles}
`;

const Typography: React.FC<TypographyProps> = ({ component = "p", variant, iconStart, iconEnd, href, route, children, keyWords, ...props }) => {
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
    <StyledTypography href={href && href} route={route && route} as={component} component={component} variant={variant} {...props}>
      {iconStart && <span>{iconStart}</span>}
      {renderContent()}
      {iconEnd && <span style={{ marginLeft: ".5rem" }}>{iconEnd}</span>}
    </StyledTypography>
  );
};

export default Typography;
