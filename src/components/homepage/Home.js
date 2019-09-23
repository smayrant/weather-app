import React, { Component } from "react";
import HomepageNews from "./HomepageNews";
import { connect } from "react-redux";
import { clearUserInput } from "../../actions/weatherActions/clearUserInput";
import { clearCurrentWeather } from "../../actions/weatherActions/clearCurrentWeather";
import { clearDailyWeather } from "../../actions/weatherActions/clearDailyWeather";
import { clearHourlyWeather } from "../../actions/weatherActions/clearHourlyWeather";

class Home extends Component {
	componentDidMount () {
		// clear user input once the user has searched and navigates back to the home page
		if (this.props.userInput.length > 0) {
			this.props.clearUserInput();
		}
		// ensure weather-related state has been cleared so previous weather info is not displayed if the user tries to search without inputting a proper zip code
		if (this.props.currentWeather.hasOwnProperty("weather")) {
			this.props.clearCurrentWeather();
		}
		if (this.props.dailyWeather.hasOwnProperty("data")) {
			this.props.clearDailyWeather();
		}
		if (this.props.hourlyWeather.hasOwnProperty("data")) {
			this.props.clearHourlyWeather();
		}
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
	return {
		currentWeather: state.weatherInfo,
		dailyWeather: state.dailyInfo,
		hourlyWeather: state.hourlyInfo,
		userInput: state.userInput
	};
};

export default connect(mapStateToProps, { clearUserInput, clearCurrentWeather, clearHourlyWeather, clearDailyWeather })(
	Home
);
