import React from "react";
import { TextBlockProps } from "./types";
import { StyledTextBlockContainer, StyledTextBlockTag, StyledTextBlockTagList } from "./textBlock.styles";
import Typography from "../../components/Typography/typography";

const TextBlock: React.FC<TextBlockProps> = ({ tag, img, containerStyles, children }) => {
  return (
    <StyledTextBlockContainer containerStyles={containerStyles}>
      {tag &&
        (Array.isArray(tag) ? (
          <StyledTextBlockTagList role="list">
            {tag.map((text, index) => (
              <StyledTextBlockTag key={index}>
                <Typography component={"span"} variant="tag_text">
                  {text}
                </Typography>
              </StyledTextBlockTag>
            ))}
          </StyledTextBlockTagList>
        ) : (
          <StyledTextBlockTag>{tag}</StyledTextBlockTag>
        ))}
      {img && img}
      {children}
    </StyledTextBlockContainer>
  );
};

export default TextBlock;
