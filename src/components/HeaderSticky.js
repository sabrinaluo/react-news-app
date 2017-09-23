import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const defaultProps = {
  items: [],
  isSticky: false
};

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isSticky: PropTypes.bool
};

const HeaderSticky = ({ items, isSticky }) => {
  const menuClassName = classNames("menu__main--fix", { sticky: isSticky });
  return (
    <nav className={menuClassName}>
      <div className="menu__main--inner">
        <div className="wrapper">
          <div className="menu__main--fix__logo">
            <a href="/">
              <img src="//cdn.hk01.com/assets/images/logo.png" alt="香港01" />
            </a>
          </div>
          <div className="menu__main--fix__scroll">
            <ul className="menu__main--fix_container float_left">
              {items.map((item, index) => (
                <li key={item.id} className="menu__main--fix--tit">
                  <NavLink to={item.path}> {item.text} </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="btn_member float_right" />
          <div className="btn_search float_right" />
          <div className="btn_more float_right">
            <div className="menu-toggle-btn">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

HeaderSticky.propTypes = propTypes;
HeaderSticky.defaultProps = defaultProps;

export default HeaderSticky;
