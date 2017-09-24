import React from "react";
import { connect } from "react-redux";

import Logout from "../components/layout/Logout";
import { userLogout } from "../actions";

const LogoutContainer = props => <Logout {...props} />;

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { userLogout })(LogoutContainer);
