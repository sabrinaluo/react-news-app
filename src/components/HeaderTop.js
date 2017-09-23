import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTop = () => (
  <div className="menu__top">
    <div className="wrapper">
      <div className="container">
        <div className="container float_right">
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/signup"> Sign Up </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderTop;
