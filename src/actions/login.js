import { userLogin } from "./user";
import { getStorage } from "../utils";

import * as types from "../constants/ActionTypes";

export const loginError = () => ({
  type: types.LOGIN_ERROR,
  error: "username / password did not match"
});

export const submitLoginForm = (username, password) => dispatch => {
  const users = getStorage("DB_USERS") || {};
  const pw = users[username];
  if (pw === password) {
    return dispatch(userLogin(username));
  } else {
    return dispatch(loginError());
  }
};
