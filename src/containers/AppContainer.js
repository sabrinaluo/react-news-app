import React from "react";
import { connect } from "react-redux";

import App from "../components/App";

const AppContainer = props => <App {...props} />;

const mapStateToProps = state => {
  return {};
};

export default connect(null)(AppContainer);
