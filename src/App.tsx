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
        <Button variant="contained" size="lg">
          Contact Me
        </Button>
        <Button variant="outlined" size="sm">
          Let's Talk
        </Button>
        <Button variant="contained" size="md">
          View Project
        </Button>
        <Button variant="outlined" size="lg" borderColor="error" textColor="error">
          Delete
        </Button>
        <Button variant="contained" size="sm" backgroundColor="color_7" borderColor="color_7" textColor="error">
          Warning
        </Button>
      </div>
    </>
  );
};

export default App;
