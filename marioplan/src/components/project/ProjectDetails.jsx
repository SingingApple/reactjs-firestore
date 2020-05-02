import React from "react";
const ProjectDetails = (props) => {
  let id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
            eveniet.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the net ninja</div>
          <div>20 November 2020</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
