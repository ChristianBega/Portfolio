import { ReactNode } from "react";

export interface ProjectImageProps {
  children?: ReactNode;
  imageUrl: string;
}
export interface ProjectImageContainerProps {
  includeBgWrapper?: boolean;
  includeBgOrb?: boolean;
}

export type CombinedProjectImageProps = ProjectImageProps & ProjectImageContainerProps;
