import React from "react";
import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({ src, height, width, alt, mb }) => {
  return <img alt={alt} height={height} width={width} src={src} style={{ height: height, marginBottom: mb }}></img>;
};

export default Image;
