import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails: React.FC = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>ProjectDetails</div>;
};

export default ProjectDetails;
