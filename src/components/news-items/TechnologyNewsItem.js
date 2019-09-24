import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../img/no-image.jpg";

const NewsItem = ({ newsItem }) => {
	return (
		<div id="technology-item" className="ui relaxed divided list">
			<Link to={`/technology/${newsItem.id}`} className="item">
				<div className="news-item-img-container">
					<img
						className="ui image"
						id="technology-item-image"
						src={newsItem.urlToImage ? newsItem.urlToImage : noImage}
						alt="News Item"
					/>
				</div>
				<div className="content">
					<p className="description news-item-title">{newsItem.title}</p>
				</div>
			</Link>
			<div id="technology-item-divider" className="ui divider" />
		</div>
	);
};

export default NewsItem;
