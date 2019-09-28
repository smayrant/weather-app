import React from "react";
import DailyWeatherList from "./DailyWeatherList";

const DailyWeather = props => {
	const { dailyWeather } = props;

	return (
		<div className="ui container">
			<DailyWeatherList dailyWeatherList={dailyWeather} />
		</div>
	);
};

export default DailyWeather;
