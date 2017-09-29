import reducer from "./articles";
import * as types from "../constants/ActionTypes";

describe("article reducer", () => {
  it("should have initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      items: [],
      isFetching: false,
      page: 1
    });
  });

  it("should set isFetching to true", () => {
    expect(
      reducer(
        {},
        {
          type: types.INFINITE_LOADING_START
        }
      )
    ).toEqual({
      isFetching: true
    });
  });

  it("should page+1", () => {
    expect(
      reducer(
        {},
        {
          type: types.FETCH_ARTICLES_REQUEST,
          page: 666
        }
      )
    ).toEqual({
      isFetching: true,
      nextPage: 667
    });
  });

  it("should concat articles", () => {
    expect(
      reducer(
        { items: [{ a: 1 }] },
        {
          type: types.FETCH_ARTICLES_SUCCESS,
          response: { articles: [{ b: 2 }, { c: 3 }], nextPage: 1 }
        }
      )
    ).toEqual({
      isFetching: false,
      nextPage: 1,
      items: [{ a: 1 }, { b: 2 }, { c: 3 }]
    });
  });

  it("should not update articles", () => {
    expect(
      reducer(
        { items: [{ a: 1 }] },
        {
          type: types.FETCH_ARTICLES_ERROR,
          error: "ERROR"
        }
      )
    ).toEqual({
      isFetching: false,
      items: [{ a: 1 }]
    });
  });
});
