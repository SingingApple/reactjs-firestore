import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <div className="container dashboard">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects}></ProjectList>
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications></Notifications>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(Dashboard);
