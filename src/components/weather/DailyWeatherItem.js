import React from "react";

const DailyWeatherItem = props => {
	const { weatherItem } = props;
	return (
		<div>
			<div className="weather-item">
				<div className="weather-item-description">{weatherItem.weather.description}</div>
				<div className="weather-item-info">
					<img
						className="weather-item-img"
						src={`https://www.weatherbit.io/static/img/icons/${weatherItem.weather.icon}.png`}
						alt="weather icon"
					/>
					<div className="weather-item-date">{weatherItem.datetime}</div>
					<div className="weather-item-temp">{Math.round(weatherItem.temp)}</div>
				</div>
			</div>
		</div>
	);
};

export default DailyWeatherItem;
