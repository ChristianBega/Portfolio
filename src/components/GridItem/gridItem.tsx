import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import { StyledGridItem } from "./index.styles";
import { GridItemProps } from "./types";

const GridItem: React.FC<GridItemProps> = ({ children, ...props }) => {
  const { isXs, isSm, isMd, isLg, isXl } = useMediaQueries();

  return (
    <StyledGridItem isXs={isXs} isSm={isSm} isMd={isMd} isLg={isLg} isXl={isXl} {...props}>
      {children}
    </StyledGridItem>
  );
};

export default GridItem;
