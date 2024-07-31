import { StyledHeroOrb, StyledHeroSection } from "./index.styles";
import BackgroundGrid from "./components/backgroundGrid/backgroundGrid";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import Typography from "../../components/Typography/typography";
import Button from "../../components/Button/button";

const Hero: React.FC = () => {
  const { isMd, isSm, is400, is500, is600, is730, isXl, isXXl } = useMediaQueries();

  return (
    <StyledHeroSection id="hero-section" isMd={isMd}>
      <BackgroundGrid />
      <div style={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", marginTop: "100px", padding: "1rem" }}>
        <img src="/public/profile-image.svg" style={{ height: "145px", marginBottom: "52px" }}></img>

        <Typography component="h1" justifyContent="center" mb="25px">
          Hey, I'm Christian
        </Typography>
        <Typography component="p" justifyContent="center" mb="">
          A full stack web developer, transforming your ideas into digital realities
        </Typography>
        <div>
          <Button mt="2rem" backgroundGradient="button_gradient" variant="contained" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
      <StyledHeroOrb is400={is400} is500={is500} is600={is600} is730={is730} isSm={isSm} isMd={isMd} isXl={isXl} isXXl={isXXl}></StyledHeroOrb>
    </StyledHeroSection>
  );
};

export default Hero;
