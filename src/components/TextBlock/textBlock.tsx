import React from "react";
import { CombinedTextBlockProps, ListProps, TagProps } from "./types";
import { StyledRoleItem, StyledRolesList, StyledTextBlockContainer, StyledTextBlockTag, StyledTextBlockTagList } from "./textBlock.styles";
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

const renderList: React.FC<ListProps> = ({ roles }) => {
  return (
    <StyledRolesList role="list">
      {roles?.map((role, index) => (
        <StyledRoleItem key={index}>
          <Typography component={"p"}>{role}</Typography>
        </StyledRoleItem>
      ))}
    </StyledRolesList>
  );
};
const TextBlock: React.FC<CombinedTextBlockProps> = ({ tag, techTag, img, mb, mt, roles, containerStyles, children }) => {
  return (
    <StyledTextBlockContainer mb={mb} mt={mt} containerStyles={containerStyles}>
      {tag && renderTags({ tag })}
      {img && img}
      {children}
      {techTag && renderTags({ techTag })}
      {roles && renderList({ roles })}
    </StyledTextBlockContainer>
  );
};

export default TextBlock;
