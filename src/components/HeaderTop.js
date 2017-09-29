import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HeaderTop extends Component {
  renderNav() {
    const { isLogin } = this.props;
    if (isLogin) {
      return (
        <div className="container float_right">
          <NavLink to="/logout"> Logout </NavLink>
        </div>
      );
    }

    return (
      <div className="container float_right">
        <NavLink to="/login"> Login </NavLink>
        <NavLink to="/signup"> Sign Up </NavLink>
      </div>
    );
  }

  renderHello() {
    const { username, isLogin } = this.props;
    if (isLogin) {
      return (
        <div className="container float_left">
          Hello <NavLink to="/welcome"> {username} </NavLink>:)
        </div>
      );
    }
  }
  render() {
    return (
      <div className="menu__top">
        <div className="wrapper">
          <div className="container">
            {this.renderHello()}
            {this.renderNav()}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
