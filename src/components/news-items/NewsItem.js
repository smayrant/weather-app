import React from "react";

const NewsItem = ({ newsItem }) => {
	return (
		<div className="ui relaxed divided list">
			<div className="item">
				<img className="ui image" id="news-item-image" src={newsItem.urlToImage} alt="News Item" />
				<div className="content">
					<p className="description news-item-title">{newsItem.title}</p>
				</div>
			</div>
			<div className="ui divider" />
		</div>
	);
};

export default NewsItem;
