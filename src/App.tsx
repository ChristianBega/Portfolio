import React from "react";
import Typography from "./components/Typography/typography";
import Button from "./components/Button/button";
import Icon from "./components/Icon/icon";
import Navigation from "./components/Navigation/navigation";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Typography component="h1">Heading 1</Typography>
      <Typography component="h2">Heading 2</Typography>
      <Typography component="h3">Heading 3</Typography>
      <Typography component="h4">Heading 4</Typography>
      <Typography component="h5">Heading 5</Typography>
      <Typography component="h6">Heading 6</Typography>
      <Typography component="p">This is a paragraph.</Typography>
      <Typography component="p" variant="navigation_text" iconEnd={<Icon src="arrow-icon.svg" alt="Example Icon" />}>
        This is a paragraph.
      </Typography>
      <Typography component="span">This is a span.</Typography>
      <Typography component="p" variant="button_text">
        button text
      </Typography>
      <div style={{ marginTop: "2rem" }}>
        <Button variant="outlined" size="sm" iconEnd={<Icon src="arrow-icon.svg" alt="Example Icon" />}>
          Let's Talk
        </Button>
        <div style={{ marginTop: "2rem", display: "flex", gap: "2rem" }}></div>
        <Button
          variant="contained"
          size="lg"
          // iconStart={<Icon src="arrow-icon.svg" alt="Example Icon" />}
          // iconEnd={<Icon src="arrow-icon.svg" alt="Example Icon" />}
        >
          Contact Me
        </Button>
      </div>
    </>
  );
};

export default App;
