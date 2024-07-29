import { Variants } from "framer-motion";

export const navigationVariants: Variants = {
  closed: {
    height: "60px",
    borderRadius: "44px",

    // borderRadius: "100px",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.5,
    },
  },
  open: {
    borderRadius: "34px",
    height: "350px",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};
export const desktopNavigationVariants: Variants = {
  closed: {
    height: "60px",
    borderRadius: "44px",
    // borderRadius: "100px",
    // transition: {
    //   ease: "easeInOut",
    //   duration: 0.5,
    //   delay: 0.5,
    // },
  },
  // open: {
  //   borderRadius: "34px",
  //   height: "350px",
  //   transition: {
  //     ease: "easeInOut",
  //     duration: 0.5,
  //   },
  // },
};
