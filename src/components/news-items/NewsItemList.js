import React from "react";
import NewsItem from "./NewsItem";
import uuid from "uuid";

const NewsItemList = ({ newsItems }) => {
	// removes the first item from the array since it has already been displayed as the main news item
	const firstNewsItemRemoved = newsItems.filter((newsItem, index) => {
		return index > 0;
	});
	return (
		<div>
			{firstNewsItemRemoved.map(newsItem => {
				return <NewsItem key={uuid.v4()} newsItem={newsItem} />;
			})}
		</div>
	);
};

export default NewsItemList;
