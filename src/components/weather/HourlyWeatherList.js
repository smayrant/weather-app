import React from "react";
import HourlyWeatherItem from "./HourlyWeatherItem";

const HourlyWeatherList = props => {
	const { hourlyWeather } = props;

	const renderedList = hourlyWeather ? (
		hourlyWeather.map(weatherItem => {
			return <HourlyWeatherItem key={weatherItem.timestamp_local} hourlyWeatherItem={weatherItem} />;
		})
	) : (
		<div className="ui segment">
			<div className="ui active inverted dimmer">
				<div className="ui text loader">Loading Content...</div>
			</div>
			<p />
		</div>
	);

	return <div className="hourly-weather-container">{renderedList}</div>;
};

export default HourlyWeatherList;
