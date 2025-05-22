import { NavigateFunction } from "react-router-dom";
import { NavigationOptions } from "./types";

export const handleNavigation = (navigate: NavigateFunction, options: NavigationOptions) => {
  const { path, data } = options;

  navigate(path, { state: { ...data } });
};

export const handleScrollTo = (id: string, topOffset: number = 20) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - topOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
