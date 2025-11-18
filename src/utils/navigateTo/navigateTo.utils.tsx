import { NavigateFunction } from "react-router-dom";
import { NavigationOptions } from "./types";

export const handleNavigation = (navigate: NavigateFunction, options: NavigationOptions) => {
  const { path, data } = options;

  navigate(path, { state: { ...data } });
};

export const handleScrollTo = (id: string, topOffset: number = 20) => {
  let element = document.getElementById(id);

  // If contact section not found, try the success variant
  if (!element && id === "contact-section") {
    element = document.getElementById("contact-section-success");
  }

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - topOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
