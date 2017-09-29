import React from "react";
import { NavLink } from "react-router-dom";

const HeaderMid = () => (
  <div className="menu__mid">
    <div className="wrapper">
      <NavLink to="/">
        <div className="float_left" id="logo">
          <img src="//cdn.hk01.com/assets/images/logo.png" alt="香港01" />
        </div>
      </NavLink>
    </div>
  </div>
);

export default HeaderMid;
