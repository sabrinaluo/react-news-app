import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "../actions/signup";
import * as types from "../constants/ActionTypes";
import * as msg from "../constants/Message";

import { getStorage, setStorage } from "../utils";
import { DB_USERS } from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("should signup error", () => {
  const error = "error";
  const expectedAction = {
    type: types.SIGNUP_ERROR,
    error
  };
  expect(actions.signupError(error)).toEqual(expectedAction);
});

const username = "test@test.com";
const password = "abc12345";

describe("submitSignupForm success", () => {
  it("should signup success", () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: types.USER_LOGIN,
        username
      }
    ];

    store.dispatch(actions.submitSignupForm(username, password, password));
    expect(store.getActions()).toEqual(expectedActions);
    const db = getStorage(DB_USERS);
    expect(db[username]).toEqual(password);
  });
});

describe("submitSignupForm error", () => {
  beforeEach(() => {
    localStorage.clear();
    setStorage(DB_USERS, { [username]: password });
  });

  it("should username is taken", () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: types.SIGNUP_ERROR,
        error: msg.USERNAME_IS_TAKEN
      }
    ];
    store.dispatch(actions.submitSignupForm(username, password, password));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should password invalid", () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: types.SIGNUP_ERROR,
        error: msg.PASSWORD_INVALID
      }
    ];
    const uname = "qq@qq.com";
    const pw = "asdf!@#$";
    store.dispatch(actions.submitSignupForm(uname, pw, pw));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should password not equal", () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: types.SIGNUP_ERROR,
        error: msg.PASSWORD_NOT_EQAUL
      }
    ];
    const uname = "qq@qq.com";
    store.dispatch(actions.submitSignupForm(uname, "abc1234", "abc12345"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
