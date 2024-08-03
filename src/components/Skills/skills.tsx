import GridItem from "../../components/GridItem/gridItem";
import Typography from "././../../components/Typography/typography";
import React from "react";

const Skills: React.FC = () => {
  return (
    <GridItem xs={12} md={6} lg={4}>
      <div style={{ height: "393px", border: "1px solid red" }}>
        <Typography component={"h2"}>Skills</Typography>
      </div>
    </GridItem>
  );
};

export default Skills;
