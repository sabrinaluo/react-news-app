import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";

import * as actions from "../actions/articles";
import * as types from "../constants/ActionTypes";
import { API_ROOT } from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("should fetchArticlesRequest", () => {
  const page = 123;
  const expectedAction = {
    type: types.FETCH_ARTICLES_REQUEST,
    page: 123
  };
  expect(actions.fetchArticlesRequest(page)).toEqual(expectedAction);
});

it("should fetchArticlesSuccess", () => {
  const response = {};
  const expectedAction = {
    type: types.FETCH_ARTICLES_SUCCESS,
    response: {}
  };
  expect(actions.fetchArticlesSuccess(response)).toEqual(expectedAction);
});

describe("fetchArticles with page=1 nextPage=undefined", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should error", () => {
    nock(API_ROOT)
      .get("/articles?page=1")
      .reply(404, {
        message: "error"
      });

    const expectedActions = [
      {
        type: types.FETCH_ARTICLES_REQUEST,
        page: 1
      },
      {
        type: types.FETCH_ARTICLES_ERROR,
        error: {
          message: "error"
        }
      }
    ];

    const store = mockStore({
      articles: []
    });

    return store.dispatch(actions.fetchArticles(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("fetchArticles with page=undefined, nextPage=2", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should success", () => {
    nock(API_ROOT)
      .get("/articles?page=2")
      .reply(200, {
        articles: [{ a: 1 }]
      });

    const expectedActions = [
      {
        type: types.FETCH_ARTICLES_REQUEST,
        page: 2
      },
      {
        type: types.FETCH_ARTICLES_SUCCESS,
        response: {
          articles: [{ a: 1 }]
        }
      }
    ];

    const store = mockStore({
      articles: {
        nextPage: 2
      }
    });

    return store.dispatch(actions.fetchArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("loadMoreHandler", () => {
  it("should start infinite scroll", () => {
    nock(API_ROOT)
      .get("/articles?page=1")
      .reply(200, {
        articles: [{ a: 1 }]
      });

    const expectedActions = [
      {
        type: types.INFINITE_LOADING_START
      },
      {
        type: types.FETCH_ARTICLES_REQUEST,
        page: 1
      },
      {
        type: types.FETCH_ARTICLES_SUCCESS,
        response: {
          articles: [{ a: 1 }]
        }
      }
    ];

    const store = mockStore({
      articles: []
    });

    return store.dispatch(actions.loadMoreHandler()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
