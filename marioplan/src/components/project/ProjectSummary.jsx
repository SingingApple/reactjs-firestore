import React from "react";
import { Links, Route } from "react-router-dom";
const ProjectSummary = () => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Project Title</span>
        <p>Posted by Apple</p>
        <p className="grey-text">20 November 2020</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
