import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
const ProjectDetails = (props) => {
  const { project } = props;
  console.log(props);
  let id = props.match.params.id;
  if (!props.auth.uid) {
    return <Redirect to="/signin"></Redirect>;
  } else {
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>{props.project.firstName}</div>
              <div>20 November 2020</div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div> Loading</div>;
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectDetails);
