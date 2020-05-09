import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";
const ProjectList = (props) => {
  return (
    <div className="project-list section">
      {props.projects &&
        props.projects.map((project) => {
          return (
            <Link key={project.id} to={"/projects/" + project.id}>
              <ProjectSummary project={project}></ProjectSummary>
            </Link>
          );
        })}
    </div>
  );
};
export default ProjectList;
