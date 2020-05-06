import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
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
  return {
    projects: state.project.projects,
  };
};
export default connect(mapStateToProps)(Dashboard);
