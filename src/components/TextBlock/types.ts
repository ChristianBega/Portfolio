import { ReactNode } from "react";

export interface TextBlockProps {
  img?: ReactNode;
  containerStyles?: object;
  children: ReactNode;
  mb?: string;
  mt?: string;
}

export interface TagProps {
  tag?: string[];
  techTag?: string[];
}

export interface ListProps {
  roles?: string[];
}

export type CombinedTextBlockProps = TextBlockProps & TagProps & ListProps;

export interface StyledTextBlockContainerProps {
  containerStyles?: object;
  mb?: string;
  mt?: string;
}
