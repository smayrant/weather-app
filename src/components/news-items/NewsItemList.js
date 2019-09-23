import React from "react";
import NewsItem from "./NewsItem";

const NewsItemList = ({ newsItems }) => {
	// removes the first item from the array since it has already been displayed as the main news item
	const firstNewsItemRemoved = newsItems.filter((newsItem, index) => {
		return index > 0;
	});

	return (
		<div className="ui container">
			{firstNewsItemRemoved.map(newsItem => {
				return <NewsItem key={newsItem.id} newsItem={newsItem} />;
			})}
		</div>
	);
};

export default NewsItemList;
