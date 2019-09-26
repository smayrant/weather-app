import React from "react";
import HourlyWeatherList from "./HourlyWeatherList";

const HourlyWeather = ({ hourlyWeather }) => {
	return (
		<div className="ui container hourly-weather-container">
			<HourlyWeatherList hourlyWeather={hourlyWeather} />
		</div>
	);
};

export default HourlyWeather;
