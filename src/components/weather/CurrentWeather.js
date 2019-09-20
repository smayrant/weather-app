import React from "react";

const CurrentWeather = ({ currentWeather }) => {
	// if the currentWeather object has data, such as the weather property, display the data, otherwise display a loading message
	const renderCurrentWeather = currentWeather.hasOwnProperty("weather") ? (
		<div className="current-weather-container ui container">
			<div className="current-weather-summary-container">
				<div className="current-weather-summary-inner-container">
					<div className="current-weather-temperature">{Math.round(currentWeather.temp)}</div>
					<div className="current-weather-description">{currentWeather.weather.description}</div>
				</div>
				<img
					src={`https://www.weatherbit.io/static/img/icons/${currentWeather.weather.icon}.png`}
					alt="weather icon"
				/>
			</div>
			<div className="current-weather-details">
				<div className="current-weather-feels-like">
					<div className="current-weather-feels-like-temp">{Math.round(currentWeather.app_temp)}</div>
					<p>Feels Like</p>
				</div>
				<div className="ui divider" />
				<div className="current-weather-wind-container">
					<div className="current-weather-wind-title">Wind</div>
					<div className="current-weather-wind">{currentWeather.wind_spd} mph</div>
				</div>
				<div className="ui divider" />
				<div className="current-weather-humidity-container">
					<div className="current-weather-humidity-title">humidity</div>
					<div className="current-weather-humidity">{currentWeather.rh}%</div>
				</div>
				<div className="ui divider" />
				<div className="current-weather-dewpt-container">
					<div className="current-weather-dewpt-title">Dew Point</div>
					<div className="current-weather-dewpt">{currentWeather.dewpt}</div>
				</div>
				<div className="ui divider" />
				<div className="current-weather-pressure-container">
					<div className="current-weather-pressure-title">Dew Point</div>
					<div className="current-weather-pressure">{Math.round(currentWeather.pres / 33.864)} in</div>
				</div>
				<div className="ui divider" />
				<div className="current-weather-visibility-container">
					<div className="current-weather-visibility-title">Visibility</div>
					<div className="current-weather-visibility">{currentWeather.vis} mi</div>
				</div>
			</div>
		</div>
	) : (
		<div>Loading...</div>
	);

	return <div className="current-weather">{renderCurrentWeather}</div>;
};

export default CurrentWeather;
