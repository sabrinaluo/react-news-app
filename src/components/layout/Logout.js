import PropTypes from "prop-types";
import React, { Component } from "react";

const propTypes = {
  userLogout: PropTypes.func
};

const defaultProps = {};

class Logout extends Component {
  componentDidMount() {
    const { userLogout } = this.props;
    userLogout();
  }
  render() {
    return (
      <section>
        <div className="wrapper">logout successfully!</div>
      </section>
    );
  }
}

Logout.propTypes = propTypes;
Logout.defaultProps = defaultProps;

export default Logout;
