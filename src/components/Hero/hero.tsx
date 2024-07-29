import React from "react";
import { StyledHeroSection } from "./index.styles";
import BackgroundGrid from "./components/backgroundGrid/backgroundGrid";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import Typography from "../../components/Typography/typography";
import Button from "../../components/Button/button";

const Hero: React.FC = () => {
  const { isMd } = useMediaQueries();
  return (
    <StyledHeroSection id="hero-section" isMd={isMd}>
      <BackgroundGrid />
      <div style={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", marginTop: "100px" }}>
        <img src="/public/profile-image.svg" style={{ height: "145px", marginBottom: "52px" }}></img>
        <Typography component="h1">Hey, I'm Christian</Typography>
        <Typography component="p" color="text_light">
          A full stack web developer, transforming your ideas into digital realities
        </Typography>
        <div>
          <Button backgroundGradient="button_gradient" variant="contained" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
