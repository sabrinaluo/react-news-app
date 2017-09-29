import React, { Component } from "react";

import LoginFormContainer from "../../containers/LoginFormContainer";

const propTypes = {};

const defaultProps = {};

class Login extends Component {
  render() {
    return (
      <section>
        <div className="wrapper">
          <LoginFormContainer />
        </div>
      </section>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
