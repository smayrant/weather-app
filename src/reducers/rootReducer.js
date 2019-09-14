import { combineReducers } from "redux";
import newsReducer from "./homepageReducers/newsReducer";
import currentWeatherReducer from "./weatherReducers/currentWeatherReducer";

const rootReducer = combineReducers({ newsItems: newsReducer, weatherInfo: currentWeatherReducer });

export default rootReducer;
