import React from "react";
import DailyWeatherItem from "./DailyWeatherItem";

const DailyWeatherList = props => {
	const { dailyWeatherList } = props;

	const renderedList = dailyWeatherList.data ? (
		dailyWeatherList.data.map(weatherItem => {
			return <DailyWeatherItem key={weatherItem.valid_date} weatherItem={weatherItem} />;
		})
	) : (
		<div className="ui segment">
			<div className="ui active inverted dimmer">
				<div className="ui text loader">Loading Content...</div>
			</div>
			<p />
		</div>
	);
	return <div className="daily-weather-list-container">{renderedList}</div>;
};

export default DailyWeatherList;
