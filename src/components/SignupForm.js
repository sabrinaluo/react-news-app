import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const propTypes = {
  isLogin: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitSignupForm: PropTypes.func
};

const defaultProps = {};

class SignupForm extends Component {
  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return <p className="error">{errorMessage}</p>;
    }
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { submitSignupForm } = this.props;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    submitSignupForm(username, password, password2);
  }

  render() {
    const { isLogin } = this.props;

    if (isLogin) {
      return <Redirect to="/welcome" />;
    }

    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmitHandler.bind(this)} id="singup">
          <div>
            <label htmlFor="username"> Username </label>
            <input type="email" id="username" placeholder="username" required />
          </div>
          <div>
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
              minLength="6"
              maxLength="12"
            />
          </div>
          <div>
            <label htmlFor="passowrd2"> Confirm password </label>
            <input
              type="password"
              id="password2"
              placeholder="confirm password"
              required
              minLength="6"
              maxLength="12"
            />
          </div>
          <input type="submit" />
        </form>
        {this.renderErrorMessage()}
      </div>
    );
  }
}

SignupForm.propTypes = propTypes;
SignupForm.defaultProps = defaultProps;

export default SignupForm;
