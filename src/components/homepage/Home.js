import React, { Component } from "react";
import HomepageNews from "./HomepageNews";
import { connect } from "react-redux";
import { clearUserInput } from "../../actions/weatherActions/clearUserInput";
import axios from "axios";

class Home extends Component {
	componentDidMount () {
		axios.get(
			`https://newsapi.org/v2/everything?q=weather&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
		);
		this.props.clearUserInput();
	}
	render () {
		return (
			<div className="main-content">
				<HomepageNews />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		currentWeather: state.weatherInfo
	};
};

export default connect(mapStateToProps, { clearUserInput })(Home);
