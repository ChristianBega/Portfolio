import { Variants } from "framer-motion";

export const navigationWrapperVariants: Variants = {
  down: {
    y: "-400%",
    transition: {
      duration: 0.7,
    },
  },
  up: {
    y: "0%",
    transition: {
      duration: 0.7,
    },
  },
};
