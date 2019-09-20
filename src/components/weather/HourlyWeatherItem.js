import React from "react";

const HourlyWeatherItem = ({ hourlyWeatherItem }) => {
	const date = new Date(hourlyWeatherItem.timestamp_local);
	const time = date.toLocaleString("en-US", { hour: "numeric", hour12: true });

	return (
		<div>
			<div className="hourly-weather-item">
				<img
					className="weather-item-img"
					src={`https://www.weatherbit.io/static/img/icons/${hourlyWeatherItem.weather.icon}.png`}
					alt="weather icon"
				/>
				<div className="time-description">
					<div className="time">{time}</div>
					<div className="description">{hourlyWeatherItem.weather.description}</div>
				</div>
				<div className="weather-item-temp">{Math.round(hourlyWeatherItem.temp)}</div>
			</div>
		</div>
	);
};

export default HourlyWeatherItem;
