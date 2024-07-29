import React from "react";
import { StyledHeroSection } from "./index.styles";
import BackgroundGrid from "./components/backgroundGrid/backgroundGrid";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";

const Hero: React.FC = () => {
  const { isMd } = useMediaQueries();
  return (
    <StyledHeroSection isMd={isMd}>
      <BackgroundGrid />
    </StyledHeroSection>
  );
};

export default Hero;
