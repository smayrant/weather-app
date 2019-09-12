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
				<div>
					<h1>{newsItem[0].title}</h1>
					<div className="article-info-container">
						<p>Author: {newsItem[0].author}</p>
						<p>Source: {newsItem[0].source.name}</p>
					</div>
					<img className="news-item-image" src={newsItem[0].urlToImage} alt="main article" />
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
