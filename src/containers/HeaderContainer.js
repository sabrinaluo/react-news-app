import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import { enableHeaderSticky, disableHeaderSticky } from "../actions";

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = state => {
  const { header, user } = state;
  return {
    isSticky: header.isSticky,
    isLogin: user.isLogin,
    username: user.username
  };
};

export default connect(mapStateToProps, {
  enableHeaderSticky,
  disableHeaderSticky
})(HeaderContainer);
