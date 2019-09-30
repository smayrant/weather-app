import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherNavbar from "../weather/WeatherNavbar";
import Error from "../Error";
import noImage from "../../img/no-image-lg.jpg";

class TopHeadlineDetail extends Component {
	render () {
		const { newsItems } = this.props;
		// returns the news item with the id that matches the news_item_id parameter
		const newsItem = newsItems.filter(newsItem => {
			return newsItem.id === this.props.match.params.top_headline_id;
		});
		console.log(newsItem);
		// if newsItem has data, display the data, otherwise display the error component
		const renderNewsItem =
			newsItem.length > 0 ? (
				<div className="ui container main-content news-item-detail">
					<h2 className="ui container news-item-detail-title">{newsItem[0].title}</h2>
					<div className="ui container news-item-detail-info-container">
						<p className="news-item-detail-author">
							Author: {newsItem[0].author ? newsItem[0].author : "Not provided"}
						</p>
						<p className="news-item-detail-source">
							Source: {newsItem[0].source.name ? newsItem[0].source.name : "Not provided"}
						</p>
					</div>
					<img
						className="news-item-detail-image"
						src={newsItem[0].urlToImage ? newsItem[0].urlToImage : noImage}
						alt="news article"
					/>
					<div className="news-item-detail-description ui container">
						<p>{newsItem[0].description}</p>
						<div className="ui divider" />
					</div>
					<div>
						{/* display the content preview if it is available, removing the text that displays the amount of characters left, otherwise display a content unavailable message */}
						<p>
							{newsItem[0].content ? (
								newsItem[0].content.replace(/\[.*?\]/, "")
							) : (
								"Content preview not available."
							)}
						</p>
					</div>
					<div className="link-to-article">
						<a target="_blank" rel="noopener noreferrer" href={newsItem[0].url}>
							Read more here
						</a>
					</div>
				</div>
			) : (
				<Error />
			);
		return (
			<div>
				<WeatherNavbar />
				{renderNewsItem}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		newsItems: state.topHeadlines
	};
};

export default connect(mapStateToProps)(TopHeadlineDetail);
