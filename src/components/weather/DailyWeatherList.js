import React from "react";
import DailyWeatherItem from "./DailyWeatherItem";

const DailyWeatherList = props => {
	const { dailyWeatherList } = props;
	console.log(dailyWeatherList.data);

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
	return <div>{renderedList}</div>;
};

export default DailyWeatherList;
