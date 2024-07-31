import { useMediaQuery } from "react-responsive";
import { theme } from "../../styles/theme";
import { MediaQueries } from "./types";

const useMediaQueries = (): MediaQueries => {
  const isXs = useMediaQuery({ query: `(min-width: ${theme.breakpoints.xs})` });
  const isSm = useMediaQuery({ query: `(min-width: ${theme.breakpoints.sm})` });
  const isMd = useMediaQuery({ query: `(min-width: ${theme.breakpoints.md})` });
  const isLg = useMediaQuery({ query: `(min-width: ${theme.breakpoints.lg})` });
  const isXl = useMediaQuery({ query: `(min-width: ${theme.breakpoints.xl})` });
  const isXXl = useMediaQuery({ query: `(min-width: ${theme.breakpoints.xxl})` });

  const isNavigation = useMediaQuery({ query: `(min-width: ${theme.breakpoints.navigation})` });

  const is400 = useMediaQuery({ query: `(min-width: 400px` });
  const is500 = useMediaQuery({ query: `(min-width: 500px` });
  const is600 = useMediaQuery({ query: `(min-width: 600px` });
  const is730 = useMediaQuery({ query: `(min-width: 730px` });

  const isXsMax = useMediaQuery({ query: `(max-width: ${theme.breakpoints.xs})` });
  const isSmMax = useMediaQuery({ query: `(max-width: ${theme.breakpoints.sm})` });
  const isMdMax = useMediaQuery({ query: `(max-width: ${theme.breakpoints.md})` });
  const isLgMax = useMediaQuery({ query: `(max-width: ${theme.breakpoints.lg})` });
  const isXlMax = useMediaQuery({ query: `(max-width: ${theme.breakpoints.xl})` });

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXXl,
    isXsMax,
    isSmMax,
    isMdMax,
    isLgMax,
    isXlMax,
    isNavigation,
    is400,
    is500,
    is730,
    is600,
  };
};

export default useMediaQueries;
