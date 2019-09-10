import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomepageWeatherStories } from "../../actions/homepageActions/getHomepageWeatherStories";

class HomepageNews extends Component {
	componentDidMount () {
		this.props.getHomepageWeatherStories();
	}
	render () {
		return <div>home page news</div>;
	}
}

const mapStateToProps = state => {
	console.log(state);
};

export default connect(mapStateToProps, { getHomepageWeatherStories })(HomepageNews);
