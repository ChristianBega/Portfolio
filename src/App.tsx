import React from "react";
import Typography from "./components/Typography/typography";
import Button from "./components/Button/button";

const App: React.FC = () => {
  return (
    <>
      <Typography as="h1">Heading 1</Typography>
      <Typography as="h2">Heading 2</Typography>
      <Typography as="h3">Heading 3</Typography>
      <Typography as="h4">Heading 4</Typography>
      <Typography as="h5">Heading 5</Typography>
      <Typography as="h6">Heading 6</Typography>
      <Typography as="p">This is a paragraph.</Typography>
      <Typography as="span">This is a span.</Typography>
      <div style={{ marginTop: "2rem" }}>
        <Button variant="outlined" size="sm">
          Let's Talk
        </Button>
        <div style={{ marginTop: "2rem", display: "flex", gap: "2rem" }}></div>
        <Button variant="contained" size="lg">
          Contact Me
        </Button>
      </div>
    </>
  );
};

export default App;
