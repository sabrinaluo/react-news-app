import { LOGIN_ERROR, SIGNUP_ERROR } from "../actions";

function auth(state = {}, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}

export default auth;
