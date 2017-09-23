import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
  imageLink: PropTypes.string,
  tag: PropTypes.string,
  time: PropTypes.string
};

const defaultProps = {};

const ArticleListItem = ({
  id,
  title,
  content,
  link,
  imageLink,
  tag,
  time
}) => (
  <div className="blog_listing__item">
    <NavLink to={`/article/${id}`}>
      <div className="blog_listing__item__img ">
        <img src={imageLink} alt={title} />
      </div>
      <div className="blog_listing__item__content">
        <div className="blog_listing__item__content__tag">
          <tag>{tag}</tag>
        </div>
        <div className="blog_listing__item__content__tit">
          <h3>{title}</h3>
        </div>
        <div className="blog_listing__item__content__caption">{content}</div>
        <div className="blog_listing__item__content__time">
          <span className="clock">{time}</span>
        </div>
      </div>
    </NavLink>
  </div>
);

ArticleListItem.propTypes = propTypes;
ArticleListItem.defaultProps = defaultProps;

export default ArticleListItem;
