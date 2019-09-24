import React from "react";
import TechnologyNewsItem from "./TechnologyNewsItem";

const TechnologyNewsItemList = ({ newsItems }) => {
	return (
		<div className="ui container" id="technology">
			{newsItems.map(newsItem => {
				return <TechnologyNewsItem key={newsItem.id} newsItem={newsItem} />;
			})}
		</div>
	);
};

export default TechnologyNewsItemList;
