import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ newsItem }) => {
	return (
		<div className="ui relaxed divided list">
			<Link to={`/${newsItem.id}`} className="item">
				<img className="ui image" id="news-item-image" src={newsItem.urlToImage} alt="News Item" />
				<div className="content">
					<p className="description news-item-title">{newsItem.title}</p>
				</div>
			</Link>
			<div className="ui divider" />
		</div>
	);
};

export default NewsItem;
