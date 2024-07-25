import React from "react";
import { IconProps } from "./types";
import { StyledIcon } from "./index.styles";

const Icon: React.FC<IconProps> = ({ src, size, alt, ...props }) => {
  return <StyledIcon src={src} alt={alt} size={size} {...props} />;
};

export default Icon;
