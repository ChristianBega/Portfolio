import { StyledHeroSection, textBlockHeroStyles } from "./index.styles";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import Typography from "../../components/Typography/typography";
import Button from "../../components/Button/button";
import HeroOrb from "./components/backgroundOrb/backgroundOrb";
import TextBlock from "../TextBlock/textBlock";
import Image from "../../components/Image/image";

const Hero: React.FC = () => {
  const { isMd } = useMediaQueries();

  return (
    <StyledHeroSection id="hero-section" isMd={isMd}>
      {/* <BackgroundGrid /> */}
      <TextBlock
        containerStyles={textBlockHeroStyles}
        title={
          <Typography component="h1" justifyContent="center" mb="25px">
            Hey, I'm Christian
          </Typography>
        }
        img={<Image src="/profile-image.svg" height="145px" alt="Profile Emoji" mb="52px" />}
        paragraph={
          <Typography component="p" justifyContent="center" mb="">
            A full stack web developer, transforming your ideas into digital realities
          </Typography>
        }
        button={
          <Button mt="2rem" backgroundGradient="button_gradient" variant="contained" size="lg">
            Contact Me
          </Button>
        }
      />
      <HeroOrb></HeroOrb>
    </StyledHeroSection>
  );
};

export default Hero;
