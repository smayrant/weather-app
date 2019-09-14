import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentWeather } from "../../actions/weatherActions/getCurrentWeather";

class CurrentWeather extends Component {
	componentDidMount () {
		this.props.getCurrentWeather();
	}

	render () {
		const { currentWeather } = this.props;
		console.log(currentWeather);
		const renderCurrentWeather = currentWeather ? (
			<div className="current-weather-container">
				<div className="current-weather-city">{currentWeather.name}</div>
				<div className="current-weather-description">
					{currentWeather.weather ? currentWeather.weather[0].description : "Weather loading..."}
				</div>
				<div className="current-weather-temperature">
					{currentWeather.main ? Math.round(currentWeather.main.temp) : "Weather loading..."}
				</div>
			</div>
		) : (
			<div>Loading...</div>
		);

		return <div className="current-weather">{renderCurrentWeather}</div>;
	}
}

const mapStateToProps = state => {
	return {
		currentWeather: state.weatherInfo
	};
};

export default connect(mapStateToProps, { getCurrentWeather })(CurrentWeather);
