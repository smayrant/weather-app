import React from "react";
import NonWeatherNewsItem from "./NonWeatherNewsItem";

const NonWeatherNewsItemList = ({ newsItems }) => {
	return (
		<div className="ui container" id="top-headlines">
			{newsItems.map(newsItem => {
				return <NonWeatherNewsItem key={newsItem.id} newsItem={newsItem} />;
			})}
		</div>
	);
};

export default NonWeatherNewsItemList;
