import { MediaQueries } from "../../utils/useMediaQueries/types";
import styled from "styled-components";
import { GridItemProps } from "./types";

export const StyledGridItem = styled.section<GridItemProps & MediaQueries>`
  position: relative;
  grid-column: ${(props) => (props.xs ? `span ${props.xs}` : `span 12`)};
  order: ${(props) => props.order && `${props.order}`};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  padding-inline: ${(props) => (props.paddingX ? props.paddingX : "1rem")};
  ${({ isXs, xs }) =>
    isXs &&
    `
    grid-column: ${xs ? `span ${xs}` : `span 12`};
    `};

  ${({ isSm, sm, xs, paddingX }) =>
    isSm &&
    `
    padding-inline: ${paddingX ? paddingX : "2rem"};
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
