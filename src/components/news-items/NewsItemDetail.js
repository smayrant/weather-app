import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomepageWeatherStories } from "../../actions/homepageActions/getHomepageWeatherStories";

class NewsItemDetail extends Component {
	state = {
		id: null
	};
	componentDidMount () {
		let id = this.props.match.params.news_item_id;
		this.setState({
			id: id
		});
	}
	render () {
		// const {newsItems} = this.props;

		return <div>{this.state.id}</div>;
	}
}

const mapStateToProps = state => {
	return {
		newsItems: state.newsItems
	};
};

export default connect(mapStateToProps, { getHomepageWeatherStories })(NewsItemDetail);
