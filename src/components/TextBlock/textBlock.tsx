import React from "react";
import { TextBlockProps } from "./types";
import { StyledTextBlockContainer } from "./index.styles";

const TextBlock: React.FC<TextBlockProps> = ({ title, paragraph, tag, button, img, containerStyles }) => {
  return (
    <StyledTextBlockContainer containerStyles={containerStyles}>
      {tag && <div>Tag</div>}
      {img && img}
      {title}
      {Array.isArray(paragraph) ? (
        <>
          {paragraph.map((text, index) => (
            <React.Fragment key={index}>{text}</React.Fragment>
          ))}
        </>
      ) : (
        paragraph
      )}
      {button && <div>{button}</div>}
    </StyledTextBlockContainer>
  );
};

export default TextBlock;
