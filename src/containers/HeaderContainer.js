import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import { enableHeaderSticky, disableHeaderSticky } from "../actions";

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = state => {
  const { header } = state;
  return {
    isSticky: header.isSticky
  };
};

export default connect(mapStateToProps, {
  enableHeaderSticky,
  disableHeaderSticky
})(HeaderContainer);
