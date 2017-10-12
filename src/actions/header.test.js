import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "../actions/header";
import * as types from "../constants/ActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("enable sticky", () => {
  it("should enable sticky, if currently not sticky", () => {
    const expectedActions = [
      {
        type: types.ENABLE_HEADER_STICKY
      }
    ];
    const store = mockStore({
      header: {
        isSticky: false
      }
    });
    store.dispatch(actions.enableHeaderSticky());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should do nothing, if currenty sticky", () => {
    const expectedActions = [];
    const store = mockStore({
      header: {
        isSticky: true
      }
    });
    store.dispatch(actions.enableHeaderSticky());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("disable sticky", () => {
  it("should disable sticky, if currently sticky", () => {
    const store = mockStore({
      header: {
        isSticky: true
      }
    });
    const expectedActions = [
      {
        type: types.DISABLE_HEADER_STICKY
      }
    ];
    store.dispatch(actions.disableHeaderSticky());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should do nothing, if currently not sticky", () => {
    const store = mockStore({
      header: {
        isSticky: false
      }
    });
    const expectedActions = [];
    store.dispatch(actions.disableHeaderSticky());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
