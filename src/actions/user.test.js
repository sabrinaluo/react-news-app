import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../actions/user";
import * as types from "../constants/ActionTypes";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("shoud login", () => {
  const store = mockStore({});
  const username = "testuer";
  const expectedActions = [
    {
      type: types.USER_LOGIN,
      username
    }
  ];
  store.dispatch(actions.userLogin(username));
  expect(store.getActions()).toEqual(expectedActions);
});

it("should logout", () => {
  const store = mockStore({});
  const expectedActions = [
    {
      type: types.USER_LOGOUT
    }
  ];
  store.dispatch(actions.userLogout());
  expect(store.getActions()).toEqual(expectedActions);
});
