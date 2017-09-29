import { userLogin } from "./user";
import { getStorage, setStorage } from "../utils";
import { DB_USERS } from "../constants";

export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const signupError = error => ({
  type: SIGNUP_ERROR,
  error
});

export const submitSignupForm = (username, password, password2) => {
  return dispatch => {
    const users = getStorage(DB_USERS) || {};
    const isUserExists = Boolean(users[username]);

    if (isUserExists) {
      return dispatch(signupError("username has been taken!"));
    }

    const passowrdReg = new RegExp(/^[a-zA-Z0-9]{6,12}$/);
    const isValidPassword = passowrdReg.test(password);

    if (!isValidPassword) {
      return dispatch(
        signupError(
          "password is invalid, should be 6-12 characters (number, letter) "
        )
      );
    }

    if (password !== password2) {
      return dispatch(signupError("password should be the same"));
    }

    users[username] = password;
    setStorage(DB_USERS, users);
    return dispatch(userLogin(username));
  };
};
