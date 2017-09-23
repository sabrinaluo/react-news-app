import PropTypes from "prop-types";
import React, { Component } from "react";

import ArticleListContainer from "../../containers/ArticleListContainer";

const propTypes = {};

const defaultProps = {};

class Home extends Component {
  render() {
    return (
      <section>
        <div className="wrapper">
          <ArticleListContainer />
        </div>
      </section>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
