export const USER_LOGIN = "USER_LOGIN";
export const USER_SIGN_UP = "USER_SIGN_UP";
export const USER_LOGOUT = "USER_LOGOUT";

export const userLogin = username => dispatch => {
  dispatch({
    type: USER_LOGIN,
    username
  });
};

export const userLogout = () => dispatch => {
  dispatch({
    type: USER_LOGOUT
  });
};
