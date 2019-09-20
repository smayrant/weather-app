import { combineReducers } from "redux";
import newsReducer from "./homepageReducers/newsReducer";
import currentWeatherReducer from "./weatherReducers/currentWeatherReducer";
import dailyWeatherReducer from "./weatherReducers/dailyWeatherReducer";
import hourlyWeatherReducer from "./weatherReducers/hourlyWeatherReducer";
import userInputReducer from "./weatherReducers/userInputReducer";
import clearInputReducer from "./weatherReducers/clearInputReducer";

const rootReducer = combineReducers({
	newsItems: newsReducer,
	weatherInfo: currentWeatherReducer,
	dailyInfo: dailyWeatherReducer,
	hourlyInfo: hourlyWeatherReducer,
	userInput: userInputReducer,
	clearInput: clearInputReducer
});

export default rootReducer;
