import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin"></Redirect>;
    else {
      return (
        <div>
          <div className="container dashboard">
            <div className="row">
              <div className="col s12 m6">
                <ProjectList projects={projects}></ProjectList>
              </div>
              <div className="col s12 m5 offset-m1">
                <Notifications
                  notifications={this.props.notifications}
                ></Notifications>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
    {
      collection: "notifications",
      limit: 3,
      orderBy: ["time", "desc"],
    },
  ])
)(Dashboard);
