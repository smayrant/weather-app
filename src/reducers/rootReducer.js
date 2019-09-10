import { combineReducers } from "redux";
import newsReducer from "./homepageReducers/newsReducer";

const rootReducer = combineReducers({ newsItems: newsReducer });

export default rootReducer;
