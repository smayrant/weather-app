import { combineReducers } from "redux";
import newsReducer from "./homepageReducers/newsReducer";
import currentWeatherReducer from "./weatherReducers/currentWeatherReducer";
import userInputReducer from "./weatherReducers/userInputReducer";

const rootReducer = combineReducers({
	newsItems: newsReducer,
	weatherInfo: currentWeatherReducer,
	userInput: userInputReducer
});

export default rootReducer;
