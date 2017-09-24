import { combineReducers } from "redux";
import header from "./header";
import articles from "./articles";
import user from "./user";
import auth from "./auth";

const rootReducer = combineReducers({
  user,
  auth,
  header,
  articles
});

export default rootReducer;
