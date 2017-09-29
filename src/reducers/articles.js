import * as types from "../constants/ActionTypes";

const initialState = {
  isFetching: false,
  items: [],
  page: 1
};

function articles(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        nextPage: action.page + 1
      });
    case types.FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.response.articles],
        nextPage: action.response.nextPage
      });
    case types.FETCH_ARTICLES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items]
      });
    case types.INFINITE_LOADING_START:
      return Object.assign({}, state, {
        isFetching: true
      });

    default:
      return state;
  }
}

export default articles;
