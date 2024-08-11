import React from "react";
import { CombinedTextBlockProps, TagProps } from "./types";
import { StyledTextBlockContainer, StyledTextBlockTag, StyledTextBlockTagList } from "./textBlock.styles";
import Typography from "../../components/Typography/typography";

const renderTags: React.FC<TagProps> = ({ tag, techTag }) => {
  let tags = tag || techTag;
  return (
    <StyledTextBlockTagList role="list">
      {tags?.map((text, index) => (
        <StyledTextBlockTag key={index}>
          <Typography component={"span"} variant="tag_text">
            {text}
          </Typography>
        </StyledTextBlockTag>
      ))}
    </StyledTextBlockTagList>
  );
};

const TextBlock: React.FC<CombinedTextBlockProps> = ({ tag, techTag, img, mb, mt, containerStyles, children }) => {
  console.log(tag || techTag);
  return (
    <StyledTextBlockContainer mb={mb} mt={mt} containerStyles={containerStyles}>
      {tag && renderTags({ tag })}
      {img && img}
      {children}
      {techTag && renderTags({ techTag })}
    </StyledTextBlockContainer>
  );
};

export default TextBlock;
