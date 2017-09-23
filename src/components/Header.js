import PropTypes from "prop-types";
import React, { Component } from "react";
import HeaderTop from "./HeaderTop";
import HeaderMid from "./HeaderMid";
import HeaderNav from "./HeaderNav";
import HeaderSticky from "./HeaderSticky";

const defaultProps = {
  items: []
};

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isSticky: PropTypes.bool,
  enableHeaderSticky: PropTypes.func,
  disableHeaderSticky: PropTypes.func
};

class Header extends Component {
  componentDidMount() {
    const { enableHeaderSticky, disableHeaderSticky } = this.props;
    window.onscroll = () => {
      if (window.scrollY > 80) {
        enableHeaderSticky();
      } else if (window.scrollY < 90) {
        disableHeaderSticky();
      }
    };
  }
  render() {
    const { items, isSticky } = this.props;
    return (
      <header>
        <HeaderTop />
        <HeaderMid />
        <HeaderNav items={items} />
        <HeaderSticky items={items} isSticky={isSticky} />
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
