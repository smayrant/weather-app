import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHomepageWeatherStories } from "../../actions/homepageActions/getHomepageWeatherStories";
import { getHomepageTopHeadlines } from "../../actions/homepageActions/getHomepageTopHeadlines";
import { getHomepageBusinessArticles } from "../../actions/homepageActions/getHomepageBusinessArticles";
import { getHomepageTechnologyArticles } from "../../actions/homepageActions/getHomepageTechnologyArticles";
import NewsItemList from "../news-items/NewsItemList";
import NonWeatherNewsItemList from "../news-items/NonWeatherNewsItemList";
import BusinessNewsItemList from "../news-items/BusinessNewsItemList";
import TechnologyNewsItemList from "../news-items/TechnologyNewsItemList";
import Navbar from "../Navbar";

class HomepageNews extends Component {
	// ensure the action that retrieves data from the news API is run once the component mounts
	componentDidMount () {
		this.props.getHomepageWeatherStories();
		this.props.getHomepageTopHeadlines();
		this.props.getHomepageBusinessArticles();
		this.props.getHomepageTechnologyArticles();
	}
	render () {
		const { newsItems, topHeadlines, businessNews, technologyNews } = this.props;
		return (
			// If there is data returned, display the news items, otherwise display a loading message and spinner
			<div>
				<Navbar />
				{newsItems.length > 0 ? (
					<div>
						<div id="homepage-news-container" className="ui container">
							<div className="homepage-news-main-item">
								<Link to={`/weather-news/${newsItems[0].id}`} className="main-news-item">
									<img
										className="main-news-item-image"
										src={newsItems[0].urlToImage}
										alt="Main article"
									/>
									<h4 className="main-news-item-title ui container">{newsItems[0].title}</h4>
								</Link>
								<div id="main-news-item-divider" className="ui divider" />
							</div>
							<div className="homepage-news-list-container">
								<NewsItemList newsItems={newsItems} />
							</div>
						</div>
						<div className="ui container">
							<div id="top-headlines-divider" className="ui divider" />
							<h2>Top Headlines</h2>
							<div className="top-headlines">
								<NonWeatherNewsItemList newsItems={topHeadlines} />
							</div>
						</div>
						<div className="ui container">
							<div id="business-headlines-divider" className="ui divider" />
							<h2>Business</h2>
							<div className="business-headlines">
								<BusinessNewsItemList newsItems={businessNews} />
							</div>
						</div>
						<div className="ui container">
							<div id="technology-headlines-divider" className="ui divider" />
							<h2>Technology</h2>
							<div className="technology-headlines">
								<TechnologyNewsItemList newsItems={technologyNews} />
							</div>
						</div>
					</div>
				) : (
					<div className="ui segment">
						<div className="ui active inverted dimmer">
							<div className="ui text loader">Loading Content...</div>
						</div>
						<p />
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		newsItems: state.newsItems,
		topHeadlines: state.topHeadlines,
		businessNews: state.businessNews,
		technologyNews: state.technologyNews
	};
};

export default connect(mapStateToProps, {
	getHomepageWeatherStories,
	getHomepageTopHeadlines,
	getHomepageBusinessArticles,
	getHomepageTechnologyArticles
})(HomepageNews);
