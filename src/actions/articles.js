import axios from "axios";

import { API_ROOT } from "../constants";
import * as types from "../constants/ActionTypes";
import { timeoutPromise } from "../utils";

export const fetchArticlesRequest = page => ({
  type: types.FETCH_ARTICLES_REQUEST,
  page
});

export const fetchArticlesSuccess = response => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  response
});

export const fetchArticlesError = error => ({
  type: types.FETCH_ARTICLES_ERROR,
  error
});

export const infiniteLoadingStart = () => ({
  type: types.INFINITE_LOADING_START
});

export const fetchArticles = page => async (dispatch, getState) => {
  const _page = page || getState().articles.nextPage || 1;
  dispatch(fetchArticlesRequest(_page));

  try {
    const response = await axios(`${API_ROOT}/articles`, {
      params: {
        page: _page
      }
    });
    dispatch(fetchArticlesSuccess(response.data));
  } catch (e) {
    dispatch(fetchArticlesError(e.response.data));
  }
};

export const loadMoreHandler = () => async dispatch => {
  dispatch(infiniteLoadingStart());
  await timeoutPromise(2000);
  return dispatch(fetchArticles()); //todo explain why need to return
};
