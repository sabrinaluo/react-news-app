import * as types from "../constants/ActionTypes";

export const userLogin = username => dispatch => {
  dispatch({
    type: types.USER_LOGIN,
    username
  });
};

export const userLogout = () => dispatch => {
  dispatch({
    type: types.USER_LOGOUT
  });
};
