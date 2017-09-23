import React from "react";
import { connect } from "react-redux";

import ArticleList from "../components/ArticleList";
import { loadMoreHandler } from "../actions/articles";

const ArticleListContainer = props => <ArticleList {...props} />;

const mapStateToProps = state => {
  const { articles } = state;
  return {
    items: articles.items,
    isFetching: articles.isFetching,
    nextPage: articles.nextPage
  };
};

export default connect(mapStateToProps, { loadMoreHandler })(
  ArticleListContainer
);
