import React from "react";
import { TextBlockProps } from "./types";
import { StyledTextBlockContainer, StyledTextBlockTag, StyledTextBlockTagList } from "./index.styles";
import Typography from "../../components/Typography/typography";

const TextBlock: React.FC<TextBlockProps> = ({ title, paragraph, tag, button, img, containerStyles, icons }) => {
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
      {icons && (
        <>
          {Array.isArray(icons) ? (
            <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
              {icons.map((icon, index) => (
                <React.Fragment key={index}>{icon}</React.Fragment>
              ))}
            </div>
          ) : (
            icons
          )}
        </>
      )}
    </StyledTextBlockContainer>
  );
};

export default TextBlock;
