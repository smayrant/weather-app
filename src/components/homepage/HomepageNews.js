import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHomepageWeatherStories } from "../../actions/homepageActions/getHomepageWeatherStories";
import NewsItemList from "../news-items/NewsItemList";
import Navbar from "../Navbar";

class HomepageNews extends Component {
	// ensure the action that retrieves data from the news API is run once the component mounts
	componentDidMount () {
		this.props.getHomepageWeatherStories();
	}
	render () {
		const { newsItems } = this.props;
		return (
			// If there is data returned, display the news items, otherwise display a loading message and spinner
			<div>
				<Navbar />
				{newsItems.length > 0 ? (
					<div>
						<Link to={`/${newsItems[0].id}`} className="main-news-item">
							<img className="main-news-item-image" src={newsItems[0].urlToImage} alt="Main article" />
							<h4 className="main-news-item-title ui container">{newsItems[0].title}</h4>
						</Link>
						<div className="ui divider" />
						<NewsItemList newsItems={newsItems} />
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
		newsItems: state.newsItems
	};
};

export default connect(mapStateToProps, { getHomepageWeatherStories })(HomepageNews);
