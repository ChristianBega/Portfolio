// components/HeroOrb/HeroOrb.tsx
import React from "react";
import { MediaQueries } from "utils/useMediaQueries/types";
import { StyledHeroOrb } from "./index.styles";
import useMediaQueries from "../../../../utils/useMediaQueries/useMediaQueries";

const HeroOrb: React.FC<MediaQueries> = (props) => {
  const { isMd, isSm, is400, is500, is600, is730, isXl, isXXl } = useMediaQueries();
  return <StyledHeroOrb is400={is400} is500={is500} is600={is600} is730={is730} isSm={isSm} isMd={isMd} isXl={isXl} isXXl={isXXl} {...props} />;
};

export default HeroOrb;
