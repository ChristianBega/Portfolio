import { StyledGridContainer } from "./index.styles";
import { GridContainerProps } from "./types";

const GridContainer: React.FC<GridContainerProps> = ({ children, ...props }) => {
  return <StyledGridContainer {...props}>{children}</StyledGridContainer>;
};

export default GridContainer;
