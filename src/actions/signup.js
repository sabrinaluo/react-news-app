import * as types from "../constants/ActionTypes";
import * as msg from "../constants/Message";
import { userLogin } from "./user";
import { getStorage, setStorage } from "../utils";
import { DB_USERS } from "../constants";

export const signupError = error => ({
  type: types.SIGNUP_ERROR,
  error
});

export const submitSignupForm = (username, password, password2) => {
  return dispatch => {
    const users = getStorage(DB_USERS) || {};
    const isUserExists = Boolean(users[username]);

    if (isUserExists) {
      return dispatch(signupError(msg.USERNAME_IS_TAKEN));
    }

    const passowrdReg = new RegExp(/^[a-zA-Z0-9]{6,12}$/);
    const isValidPassword = passowrdReg.test(password);

    if (!isValidPassword) {
      return dispatch(signupError(msg.PASSWORD_INVALID));
    }

    if (password !== password2) {
      return dispatch(signupError(msg.PASSWORD_NOT_EQAUL));
    }

    users[username] = password;
    setStorage(DB_USERS, users);
    return dispatch(userLogin(username));
  };
};
