import { MediaQueries } from "../../utils/useMediaQueries/types";
import styled from "styled-components";
import { GridItemProps } from "./types";

export const StyledGridItem = styled.div<GridItemProps & MediaQueries>`
  grid-column: ${(props) => (props.xs ? `span ${props.xs}` : `span 12`)};

  ${({ isXs, xs }) =>
    isXs &&
    `
    border: 1px solid pink;
    grid-column: ${xs ? `span ${xs}` : `span 12`};
    `};

  ${({ isSm, sm, xs }) =>
    isSm &&
    `
    border: 1px solid pink;
    grid-column: ${sm ? `span ${sm}` : xs ? `span ${xs}` : `span 12`};
    `};

  ${({ isMd, md, sm, xs }) =>
    isMd &&
    `
    grid-column: ${md ? `span ${md}` : sm ? `span ${sm}` : xs ? `span ${xs}` : `span 12`};
    border: 1px solid pink;
    `};

  ${({ isLg, lg, md, sm, xs }) =>
    isLg &&
    `
    border: 1px solid pink;
    grid-column: ${lg ? `span ${lg}` : md ? `span ${md}` : sm ? `span ${sm}` : xs ? `span ${xs}` : `span 12`};
    `};

  ${({ isXl, xl, lg, md, sm, xs }) =>
    isXl &&
    `
    grid-column: ${xl ? `span ${xl}` : lg ? `span ${lg}` : md ? `span ${md}` : sm ? `span ${sm}` : xs ? `span ${xs}` : `span 12`};
    border: 1px solid pink;
    `};
`;
