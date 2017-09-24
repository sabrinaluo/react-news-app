import React from "react";
import { connect } from "react-redux";

import SignupForm from "../components/SignupForm";
import { submitSignupForm } from "../actions";

const SignupFormContainer = props => <SignupForm {...props} />;

const mapStateToProps = state => {
  const { user, auth } = state;
  return {
    isLogin: user.isLogin,
    errorMessage: auth.error
  };
};

export default connect(mapStateToProps, { submitSignupForm })(
  SignupFormContainer
);
