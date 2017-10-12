import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "../actions/login";
import * as types from "../constants/ActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("should login error", () => {
  const expectedAction = {
    type: types.LOGIN_ERROR,
    error: "username / password did not match"
  };
  expect(actions.loginError()).toEqual(expectedAction);
});

describe("submit login form", () => {
  let store;
  beforeEach(() => {
    localStorage.clear();
    store = mockStore({
      user: {
        isLogin: false
      }
    });
  });
  it("should failed", () => {
    const username = "test_user";
    const password = "test_pw_error";
    const expectedActions = [
      {
        type: types.LOGIN_ERROR,
        error: "username / password did not match"
      }
    ];

    store.dispatch(actions.submitLoginForm(username, password));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should login", () => {
    const username = "test_user";
    const password = "test_pw_ok";
    const expectedActions = [
      {
        type: types.USER_LOGIN,
        username: username
      }
    ];

    localStorage.setItem("DB_USERS", JSON.stringify({ [username]: password }));

    store.dispatch(actions.submitLoginForm(username, password));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
