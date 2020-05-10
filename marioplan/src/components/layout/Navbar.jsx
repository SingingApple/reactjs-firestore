import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {auth.uid ? (
          <SignedInLinks initial={props.initials}></SignedInLinks>
        ) : (
          <SignedOutLinks></SignedOutLinks>
        )}
      </div>
    </nav>
  );
};
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    initials: state.firebase.profile.initials,
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Navbar);
