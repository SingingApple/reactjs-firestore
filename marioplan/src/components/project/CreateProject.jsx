import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject } from "../../store/actions/projectActions";
class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(e);
  };
  handleSubmit = (e) => {
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    if (!this.props.auth.uid) {
      return <Redirect to="/signin"></Redirect>;
    } else {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create new project</h5>
            <div className="input-field">
              <label htmlFor="title">Tite</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea
                className="materialize-textarea"
                id="content"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
          </form>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
