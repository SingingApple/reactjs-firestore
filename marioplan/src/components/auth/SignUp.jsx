import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(e);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/"></Redirect>;
    } else {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="firstname">FirstName</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Lastname</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">SignUp</button>
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
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
