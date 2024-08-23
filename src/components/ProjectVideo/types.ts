import { ReactNode } from "react";

export interface ProjectVideoProps {
  children?: ReactNode;
  videoUrl: {
    mobile: string;
    desktop: string;
  };
}
export interface ProjectVideoContainerProps {
  includeBgWrapper?: boolean;
  includeBgOrb?: boolean;
}

export type CombinedProjectVideoProps = ProjectVideoProps & ProjectVideoContainerProps;
