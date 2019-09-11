import React from "react";

const NewsItem = ({ newsItem }) => {
	return (
		<div className="ui relaxed divided list">
			<div className="item">
				<img className="ui image" src={newsItem.urlToImage} alt="" />
				<div className="content">
					<div className="description">{newsItem.title}</div>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
