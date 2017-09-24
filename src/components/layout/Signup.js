import PropTypes from "prop-types";
import React, { Component } from "react";

import SignupFormContainer from "../../containers/SignupFormContainer";

const propTypes = {};

const defaultProps = {};

class Signup extends Component {
  render() {
    return (
      <section>
        <div className="wrapper">
          <SignupFormContainer />
        </div>
      </section>
    );
  }
}

Signup.propTypes = propTypes;
Signup.defaultProps = defaultProps;

export default Signup;
