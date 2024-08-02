import React from "react";
import { TextBlockProps } from "./types";
import Typography from "../../components/Typography/typography";

const TextBlock: React.FC<TextBlockProps> = ({ title, paragraph, tag, button, img }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", marginTop: "100px", padding: "1rem" }}>
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
        <Typography component="p" justifyContent="center">
          {paragraph}
        </Typography>
      )}
      {button && <div>{button}</div>}
    </div>
  );
};

export default TextBlock;
