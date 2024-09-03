import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import GridItem from "../../components/GridItem/gridItem";
import Typography from "././../../components/Typography/typography";
import React from "react";
import TextBlock from "../../components/TextBlock/textBlock";
import GridContainer from "../../components/GridContainer/gridContainer";

const Skills: React.FC = () => {
  const { isMd } = useMediaQueries();

  const skillsObject = [
    { name: "JavaScript", imageUrl: "/skills/javascript-skill.svg" },
    { name: "HTML", imageUrl: "/skills/html-skill.svg" },
    { name: "CSS", imageUrl: "/skills/css-skill.svg" },
    { name: "GitHub", imageUrl: "/skills/git-skill.svg" },
    { name: "AWS", imageUrl: "/skills/aws-skill.svg" },
    { name: "Express", imageUrl: "/skills/express-skill.svg" },
    { name: "Node.js", imageUrl: "/skills/node-skill.svg" },
    { name: "React", imageUrl: "/skills/react-skill.svg" },
    { name: "MongoDB", imageUrl: "/skills/mongoDB-skill.svg" },
    { name: "Figma", imageUrl: "/skills/figma-skill.svg" },
    { name: "Redux", imageUrl: "/skills/redux-skill.svg" },
    { name: "Firebase", imageUrl: "/skills/firebase-skill.svg" },
    { name: "GraphQL", imageUrl: "/skills/graphQl-skill.svg" },
  ];
  return (
    <GridItem id="skills-section" mb={isMd ? "192px" : "72px"} xs={12}>
      <GridContainer id="skills-grid-container" maxWidth="900px">
        <GridItem id="skills-content-section" xs={12} sm={isMd ? 12 : 6} paddingX={"0"}>
          <TextBlock>
            <Typography component="h3" mb="32px" textAlign={isMd ? "center" : "sss"}>
              My Skill
            </Typography>
            <Typography component="p" textAlign={isMd ? "center" : "sss"}>
              As a developer, my primary focus is on crafting user-friendly and intuitive front-end applications. I apply the fundamentals of HTML,
              CSS, JavaScript, and React JS with a mobile-first approach, ensuring my projects are responsive, efficient, and widely accessible.
              Occasionally, I enhance these applications with animations, component libraries, and emerging technologies for the most optimal user
              experience.
            </Typography>
          </TextBlock>
        </GridItem>
        <GridItem id="skills-icons-section" xs={12} sm={isMd ? 12 : 6} paddingX="0">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", maxWidth: "550px", margin: "auto" }}>
            {skillsObject.map(({ name, imageUrl }) => (
              <>
                {/* <>{name}</> */}
                <img style={{ width: "60px", height: "60px", objectFit: "contain" }} src={imageUrl} alt="" />
              </>
            ))}
          </div>
        </GridItem>
      </GridContainer>
      {/* <Typography component={"h2"} mb="48px">
        Skills
      </Typography> */}
    </GridItem>
  );
};

export default Skills;
