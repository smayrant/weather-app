import React from "react";
import HourlyWeatherList from "./HourlyWeatherList";

const HourlyWeather = ({ hourlyWeather }) => {
	console.log(hourlyWeather);
	return (
		<div className="ui container">
			<HourlyWeatherList hourlyWeather={hourlyWeather} />
		</div>
	);
};

export default HourlyWeather;
