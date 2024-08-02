import { ReactNode } from "react";

export interface TextBlockProps {
  title: ReactNode;
  paragraph: ReactNode | ReactNode[];
  tag?: string;
  button?: ReactNode;
  img?: ReactNode;
}
