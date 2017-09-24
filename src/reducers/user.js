import { USER_LOGIN, USER_LOGOUT } from "../actions/user";

function user(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return Object.assign({}, state, {
        isLogin: true,
        username: action.username
      });
    case USER_LOGOUT:
      return Object.assign({}, state, {
        isLogin: false,
        username: ""
      });
    default:
      return state;
  }
}

export default user;
