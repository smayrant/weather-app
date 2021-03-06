import { combineReducers } from "redux";
import newsReducer from "./homepageReducers/newsReducer";
import businessNewsReducer from "./homepageReducers/businessNewsReducer";
import technologyNewsReducer from "./homepageReducers/technologyNewsReducer";
import topHeadlinesReducer from "./homepageReducers/topHeadlinesReducer";
import currentWeatherReducer from "./weatherReducers/currentWeatherReducer";
import dailyWeatherReducer from "./weatherReducers/dailyWeatherReducer";
import hourlyWeatherReducer from "./weatherReducers/hourlyWeatherReducer";
import userInputReducer from "./weatherReducers/userInputReducer";

const rootReducer = combineReducers({
	newsItems: newsReducer,
	topHeadlines: topHeadlinesReducer,
	businessNews: businessNewsReducer,
	technologyNews: technologyNewsReducer,
	weatherInfo: currentWeatherReducer,
	dailyInfo: dailyWeatherReducer,
	hourlyInfo: hourlyWeatherReducer,
	userInput: userInputReducer
});

export default rootReducer;
