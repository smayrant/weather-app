import React from "react";
import BusinessNewsItem from "./BusinessNewsItem";

const BusinessNewsItemList = ({ newsItems }) => {
	return (
		<div className="ui container" id="business">
			{newsItems.map(newsItem => {
				return <BusinessNewsItem key={newsItem.id} newsItem={newsItem} />;
			})}
		</div>
	);
};

export default BusinessNewsItemList;
