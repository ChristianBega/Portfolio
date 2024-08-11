import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import GridItem from "../../components/GridItem/gridItem";
import Typography from "././../../components/Typography/typography";
import React from "react";

const Skills: React.FC = () => {
  const { isMd } = useMediaQueries();
  return (
    <GridItem id="skills-section" mb={isMd ? "192px" : ""} xs={12} md={6} lg={4} order={isMd ? 1 : 0}>
      <div style={{ height: "393px", border: "1px solid red" }}>
        <Typography component={"h2"}>Skills</Typography>
      </div>
    </GridItem>
  );
};

export default Skills;
