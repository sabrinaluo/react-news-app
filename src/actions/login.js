import { userLogin } from "./user";
import { getStorage } from "../utils";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginError = () => ({
  type: LOGIN_ERROR,
  error: "username / password did not match"
});

export const submitLoginForm = (username, password) => {
  return dispatch => {
    const users = getStorage("DB_USERS") || {};
    const pw = users[username];
    if (pw === password) {
      return dispatch(userLogin(username));
    } else {
      return dispatch(loginError());
    }
  };
};
