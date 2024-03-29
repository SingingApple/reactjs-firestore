import React from "react";
import moment from "moment";
import { Links, Route } from "react-router-dom";
const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        Posted by<p>{project.authorFirstName}</p>
        <p className="grey-text">
          Date: {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
