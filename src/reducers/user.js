import * as types from "../constants/ActionTypes";

function user(state = {}, action) {
  switch (action.type) {
    case types.USER_LOGIN:
      return Object.assign({}, state, {
        isLogin: true,
        username: action.username
      });
    case types.USER_LOGOUT:
      return Object.assign({}, state, {
        isLogin: false,
        username: ""
      });
    default:
      return state;
  }
}

export default user;
