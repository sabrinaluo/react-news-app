import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
  INFINITE_LOADING_START
} from "../actions/articles";

const initialState = {
  isFetching: false,
  items: [],
  page: 1
};

function articles(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        page: action.page + 1
      });
    case FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.response.articles],
        nextPage: action.response.nextPage
      });
    case FETCH_ARTICLES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: []
      });
    case INFINITE_LOADING_START:
      return Object.assign({}, state, {
        isFetching: true
      });

    default:
      return state;
  }
}

export default articles;
