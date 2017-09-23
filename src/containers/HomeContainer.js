import React from "react";
import { connect } from "react-redux";

import Home from "../components/layout/Home";

const HomeContainer = props => <Home {...props} />;

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(HomeContainer);
