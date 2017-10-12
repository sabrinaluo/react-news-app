import * as types from "../constants/ActionTypes";

function auth(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    case types.SIGNUP_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}

export default auth;
