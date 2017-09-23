import { combineReducers } from "redux";
import header from "./header";
import articles from "./articles";

const rootReducer = combineReducers({
  header,
  articles
});

export default rootReducer;
