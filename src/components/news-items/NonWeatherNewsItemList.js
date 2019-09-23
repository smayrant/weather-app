import React from "react";
import NewsItem from "./NewsItem";

const NonWeatherNewsItemList = ({ newsItems }) => {
	return (
		<div className="ui container" id="top-headlines">
			{newsItems.map(newsItem => {
				return <NewsItem key={newsItem.id} newsItem={newsItem} />;
			})}
		</div>
	);
};

export default NonWeatherNewsItemList;
