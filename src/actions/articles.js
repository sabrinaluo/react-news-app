import fetch from "isomorphic-fetch";

import { API_ROOT } from "../constants";
import { timeoutPromise } from "../utils";

export const FETCH_ARTICLES_REQUEST = "FETCH_ARTICLES_REQUEST";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_ERROR = "FETCH_ARTICLES_ERROR";
export const INFINITE_LOADING_START = "INFINITE_LOADING_START";

export const fetchArticlesRequest = page => ({
  type: FETCH_ARTICLES_REQUEST,
  page
});

export const fetchArticlesSuccess = response => ({
  type: FETCH_ARTICLES_SUCCESS,
  response
});

export const fetchArticlesError = error => ({
  type: FETCH_ARTICLES_ERROR,
  error
});

export const infiniteLoadingStart = () => ({
  type: INFINITE_LOADING_START
});

export const fetchArticles = page => async (dispatch, getState) => {
  const _page = page || getState().articles.page || 1;
  dispatch(fetchArticlesRequest(_page));

  try {
    const data = await fetch(
      `${API_ROOT}/articles?page=${_page}`
    ).then(response => response.json());
    dispatch(fetchArticlesSuccess(data));
  } catch (e) {
    dispatch(fetchArticlesError(e));
  }
};

export const loadMoreHandler = () => async dispatch => {
  dispatch(infiniteLoadingStart());
  await timeoutPromise(2000);
  dispatch(fetchArticles());
};
