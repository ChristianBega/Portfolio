import { Variants } from "framer-motion";

export const navigationVariants: Variants = {
  closed: {
    height: "60px",
    borderRadius: "100px",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.5,
    },
  },
  open: {
    borderRadius: "24px",
    height: "304px",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};
