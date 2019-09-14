import React, { Component } from "react";
import { connect } from "react-redux";
import Error from "../Error";

class NewsItemDetail extends Component {
	render () {
		const { newsItems } = this.props;

		// returns the news item with the id that matches the news_item_id parameter
		const newsItem = newsItems.filter(newsItem => {
			return newsItem.id === this.props.match.params.news_item_id;
		});

		// if newsItem has data, display the data, otherwise display the error component
		const renderNewsItem =
			newsItem.length > 0 ? (
				<div className="news-item-detail">
					<h1 className="ui container news-item-detail-title">{newsItem[0].title}</h1>
					<div className="ui container news-item-detail-info-container">
						<p>Author: {newsItem[0].author}</p>
						<p>Source: {newsItem[0].source.name}</p>
					</div>
					<img className="news-item-detail-image" src={newsItem[0].urlToImage} alt="main article" />
					<div className="news-item-detail-description ui container">
						<p>{newsItem[0].description}</p>
						<div className="ui divider" />
					</div>
					<div>
						<p>{newsItem[0].content}</p>
					</div>
					<div className="link-to-article">
						<a href={newsItem[0].url}>Read more here</a>
					</div>
				</div>
			) : (
				<Error />
			);
		return <div>{renderNewsItem}</div>;
	}
}

const mapStateToProps = state => {
	return {
		newsItems: state.newsItems
	};
};

export default connect(mapStateToProps)(NewsItemDetail);
