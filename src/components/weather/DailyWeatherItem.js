import React from "react";

const DailyWeatherItem = ({ weatherItem }) => {
	let date = new Date(weatherItem.valid_date.replace(/-/g, "/").replace(/T.+/, ""));
	const month = date.toLocaleString("default", { month: "short" });
	const weekday = date.toLocaleString("default", { weekday: "short" });
	const day = date.toLocaleString("default", { day: "numeric" });

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
					<div className="weather-item-date">{`${weekday}, ${month} ${day}`}</div>
					<div className="weather-item-temp">{Math.round(weatherItem.temp)}</div>
				</div>
			</div>
		</div>
	);
};

export default DailyWeatherItem;
