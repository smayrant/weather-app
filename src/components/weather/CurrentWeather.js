import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherNavbar from "./WeatherNavbar";
import { getCurrentWeather } from "../../actions/weatherActions/getCurrentWeather";
import { getDailyWeather } from "../../actions/weatherActions/getDailyWeather";

class CurrentWeather extends Component {
	componentDidMount () {
		this.props.getCurrentWeather();
		// this.props.getDailyWeather();
	}

	render () {
		const { currentWeather } = this.props;
		// console.log(dailyWeather);
		console.log(currentWeather);
		// if the currentWeather object has data, such as the weather property, display the data, otherwise display a loading message
		const renderCurrentWeather = currentWeather.hasOwnProperty("weather") ? (
			<div className="current-weather-container ui container">
				<div className="current-weather-city">{currentWeather.city_name}</div>
				<div className="current-weather-summary-container">
					<div className="current-weather-summary-inner-container">
						<div className="current-weather-temperature">{Math.round(currentWeather.temp)}</div>
						<div className="current-weather-description">{currentWeather.weather.description}</div>
					</div>
					<img src={`https://www.weatherbit.io/static/img/icons/${currentWeather.weather.icon}.png`} alt="" />
				</div>
				<div className="current-weather-details">
					<div className="current-weather-feels-like">
						<div className="current-weather-feels-like-temp">{Math.round(currentWeather.app_temp)}</div>
						<p>Feels Like</p>
					</div>
					<div className="ui divider" />
					<div className="current-weather-wind-container">
						<div className="current-weather-wind-title">Wind</div>
						<div className="current-weather-wind">{currentWeather.wind_spd} mph</div>
					</div>
					<div className="ui divider" />
					<div className="current-weather-humidity-container">
						<div className="current-weather-humidity-title">humidity</div>
						<div className="current-weather-humidity">{currentWeather.rh}%</div>
					</div>
					<div className="ui divider" />
					<div className="current-weather-dewpt-container">
						<div className="current-weather-dewpt-title">Dew Point</div>
						<div className="current-weather-dewpt">{currentWeather.dewpt}</div>
					</div>
					<div className="ui divider" />
					<div className="current-weather-pressure-container">
						<div className="current-weather-pressure-title">Dew Point</div>
						<div className="current-weather-pressure">{Math.round(currentWeather.pres / 33.864)} in</div>
					</div>
					<div className="ui divider" />
					<div className="current-weather-visibility-container">
						<div className="current-weather-visibility-title">Visibility</div>
						<div className="current-weather-visibility">{currentWeather.vis} mi</div>
					</div>
				</div>
			</div>
		) : (
			<div>Loading...</div>
		);

		return (
			<div className="current-weather">
				<WeatherNavbar />
				{renderCurrentWeather}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentWeather: state.weatherInfo,
		dailyWeather: state.dailyInfo
	};
};

export default connect(mapStateToProps, { getCurrentWeather, getDailyWeather })(CurrentWeather);
