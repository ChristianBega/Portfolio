import { MediaQueries } from "../../utils/useMediaQueries/types";
import styled from "styled-components";
import { GridItemProps } from "./types";

export const StyledGridItem = styled.section<GridItemProps & MediaQueries>`
  grid-column: ${(props) => (props.xs ? `span ${props.xs}` : `span 12`)};
  order: ${(props) => props.order && `${props.order}`};
  padding: 1rem;
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};

  ${({ isXs, xs }) =>
    isXs &&
    `
    grid-column: ${xs ? `span ${xs}` : `span 12`};
    `};

  ${({ isSm, sm, xs }) =>
    isSm &&
    `
    grid-column: ${sm ? `span ${sm}` : xs ? `span ${xs}` : `span 12`};
    `};

  ${({ isMd, md, sm, xs }) =>
    isMd &&
    `
    grid-column: ${md ? `span ${md}` : sm ? `span ${sm}` : xs ? `span ${xs}` : `span 12`};
    `};

  ${({ isLg, lg, md, sm, xs }) =>
    isLg &&
    `
    grid-column: ${lg ? `span ${lg}` : md ? `span ${md}` : sm ? `span ${sm}` : xs ? `span ${xs}` : `span 12`};
    `};

  ${({ isXl, xl, lg, md, sm, xs }) =>
    isXl &&
    `
    grid-column: ${xl ? `span ${xl}` : lg ? `span ${lg}` : md ? `span ${md}` : sm ? `span ${sm}` : xs ? `span ${xs}` : `span 12`};
    `};
`;
