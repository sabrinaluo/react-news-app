import React from "react";
import { connect } from "react-redux";

import LoginForm from "../components/LoginForm";
import { submitLoginForm } from "../actions/login";

const LoginFormContainer = props => <LoginForm {...props} />;

const mapStateToProps = state => {
  const { user, auth } = state;
  return {
    isLogin: user.isLogin,
    errorMessage: auth.error
  };
};

export default connect(mapStateToProps, { submitLoginForm })(
  LoginFormContainer
);
