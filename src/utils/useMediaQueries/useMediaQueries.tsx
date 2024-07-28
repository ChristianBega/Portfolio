import { useMediaQuery } from "react-responsive";
import { theme } from "../../styles/theme";
import { MediaQueries } from "./types";

const useMediaQueries = (): MediaQueries => {
  const isXs = useMediaQuery({ query: `(min-width: ${theme.breakpoints.xs})` });
  const isSm = useMediaQuery({ query: `(min-width: ${theme.breakpoints.sm})` });
  const isMd = useMediaQuery({ query: `(min-width: ${theme.breakpoints.md})` });
  const isLg = useMediaQuery({ query: `(min-width: ${theme.breakpoints.lg})` });
  const isXl = useMediaQuery({ query: `(min-width: ${theme.breakpoints.xl})` });

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
  };
};

export default useMediaQueries;
