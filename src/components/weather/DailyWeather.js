import React from "react";
import DailyWeatherList from "./DailyWeatherList";

const DailyWeather = props => {
	const { dailyWeather } = props;

	return (
		<div className="ui container">
			<div className="daily-weather-list-container">
				<DailyWeatherList dailyWeatherList={dailyWeather} />
			</div>
		</div>
	);
};

export default DailyWeather;
