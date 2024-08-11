import { NavigateFunction } from "react-router-dom";
import { NavigationOptions } from "./types";

export const handleNavigation = (navigate: NavigateFunction, options: NavigationOptions) => {
  const { path, data } = options;

  navigate(path, { state: { ...data } });
};
