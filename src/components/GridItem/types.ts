import { ReactNode } from "react";

export interface GridItemProps {
  order?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: ReactNode;
  id: string;
  mb?: string;
  mt?: string;
  paddingX?: string;
}
