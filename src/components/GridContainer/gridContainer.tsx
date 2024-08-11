import { MediaQueries } from "utils/useMediaQueries/types";
import { StyledGridContainer } from "./gridContainer.styles";
import { GridContainerProps } from "./types";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";

const GridContainer: React.FC<GridContainerProps & MediaQueries> = ({ children, ...props }) => {
  const { isSm } = useMediaQueries();

  return (
    <StyledGridContainer isSm={isSm} {...props}>
      {children}
    </StyledGridContainer>
  );
};

export default GridContainer;
