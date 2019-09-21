import React from "react";
import HourlyWeatherItem from "./HourlyWeatherItem";

const HourlyWeatherList = props => {
	const { hourlyWeather } = props;

	const renderedList = hourlyWeather.data ? (
		hourlyWeather.data.map(weatherItem => {
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
	console.log(hourlyWeather.data);
	return <div>{renderedList}</div>;
};

export default HourlyWeatherList;