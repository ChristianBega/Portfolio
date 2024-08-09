import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import GridItem from "../../components/GridItem/gridItem";
import TextBlock from "../../components/TextBlock/textBlock";
import Typography from "../Typography/typography";
import React from "react";

const AboutMe: React.FC = () => {
  const { isMd } = useMediaQueries();

  return (
    <GridItem xs={12} md={6} lg={8} order={isMd ? 0 : 1}>
      <TextBlock>
        <Typography component="h2" mb="48px">
          About Me
        </Typography>
        <Typography
          component="p"
          mb="1rem"
          keyWords={[
            "crafting user-friendly and intuitive front-end applications.",
            " ensuring my projects are responsive, efficient, and widely accessible.",
          ]}
        >
          As a developer, my primary focus is on crafting user-friendly and intuitive front-end applications. I apply the fundamentals of HTML, CSS,
          JavaScript, and React JS with a mobile-first approach, ensuring my projects are responsive, efficient, and widely accessible. Occasionally,
          I enhance these applications with animations, component libraries, and emerging technologies for the most optimal user experience.
        </Typography>
        <Typography
          component="p"
          keyWords={["seamless integration of 3rd party APIs", " build robust, scalable solutions tailored to complex business needs"]}
        >
          My full-stack development knowledge enables seamless integration of 3rd party APIs into front-end platforms and the development of small to
          medium RESTful APIs. This expertise allows me to build robust, scalable solutions tailored to complex business needs while ensuring a smooth
          and engaging front-end experience.
        </Typography>
      </TextBlock>
    </GridItem>
  );
};

export default AboutMe;
