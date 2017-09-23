import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

const defaultProps = {
  items: []
};

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const HeaderNav = ({ items }) => (
  <nav className="menu__main">
    <div className="wrapper">
      <div className="menu__main__scroll">
        <ul className="menu__main_container float_left">
          {items.map((item, index) => (
            <li key={item.id} className="menu__main--tit">
              <NavLink to={item.path}> {item.text} </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

HeaderNav.propTypes = propTypes;
HeaderNav.defaultProps = defaultProps;

export default HeaderNav;
