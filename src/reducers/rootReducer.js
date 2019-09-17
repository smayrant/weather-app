import { combineReducers } from "redux";
import newsReducer from "./homepageReducers/newsReducer";
import currentWeatherReducer from "./weatherReducers/currentWeatherReducer";
import dailyWeatherReducer from "./weatherReducers/dailyWeatherReducer";
import userInputReducer from "./weatherReducers/userInputReducer";
import clearInputReducer from "./weatherReducers/clearInputReducer";

const rootReducer = combineReducers({
	newsItems: newsReducer,
	weatherInfo: currentWeatherReducer,
	dailyInfo: dailyWeatherReducer,
	userInput: userInputReducer,
	clearInput: clearInputReducer
});

export default rootReducer;
