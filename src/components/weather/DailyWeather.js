import React from "react";
import DailyWeatherList from "./DailyWeatherList";

const DailyWeather = props => {
	const { dailyWeather } = props;
	console.log(dailyWeather);
	return (
		<div className="ui container">
			<div className="daily-weather-city">{dailyWeather.city_name}</div>
			<div className="daily-weather-list-container">
				<DailyWeatherList dailyWeatherList={dailyWeather} />
			</div>
		</div>
	);
};

export default DailyWeather;
