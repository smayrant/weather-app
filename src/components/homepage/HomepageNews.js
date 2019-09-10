import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomepageWeatherStories } from "../../actions/homepageActions/getHomepageWeatherStories";

class HomepageNews extends Component {
	componentDidMount () {
		this.props.getHomepageWeatherStories();
	}
	render () {
		console.log(this.props);
		return (
			// If there is data returned, display the news items, otherwise display a loading message
			<div>
				{this.props.newsItems.length > 0 ? (
					<div>
						<div
							style={{ backgroundImage: `url(${this.props.newsItems[0].urlToImage})` }}
							className="main-news-item-container"
						>
							<h4>{this.props.newsItems[0].title}</h4>
						</div>
					</div>
				) : (
					<div>Loading...</div>
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
