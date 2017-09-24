import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const propTypes = {
  isLogin: PropTypes.bool,
  errorMessage: PropTypes.string,
  submitLoginForm: PropTypes.func
};

const defaultProps = {};

class LoginForm extends Component {
  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return <p className="error">{errorMessage}</p>;
    }
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { submitLoginForm } = this.props;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    submitLoginForm(username, password);
  }

  render() {
    const { errorMessage, isLogin } = this.props;

    if (isLogin) {
      return <Redirect to="/welcome" />;
    }

    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmitHandler.bind(this)} id="login">
          <label htmlFor="username"> Username </label>
          <input type="email" id="username" placeholder="username" required />
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            required
            minLength="8"
          />
          <input type="submit" />
        </form>
        {this.renderErrorMessage()}
      </div>
    );
  }
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
