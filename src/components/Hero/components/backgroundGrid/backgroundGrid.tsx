import React from "react";
import useMediaQueries from "../../../../utils/useMediaQueries/useMediaQueries";
import { StyledBackgroundGrid } from "./index.styles";

const BackgroundGrid: React.FC = () => {
  const { isMd } = useMediaQueries();
  return <StyledBackgroundGrid src={isMd ? "/grid-large.svg" : "/grid-small.svg"}></StyledBackgroundGrid>;
};

export default BackgroundGrid;
