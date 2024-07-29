import { Variants } from "framer-motion";

export const navigationLinkVariants: Variants = {
  closed: {
    display: "none",
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
  open: {
    display: "block",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const desktopNavigationLinkVariants: Variants = {
  closed: {
    display: "none",
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
  open: {
    display: "block",
    opacity: 1,
    // y: 0,
    // transition: {
    //   duration: 0.6,
    //   staggerChildren: 0.2,
    // },
  },
};
