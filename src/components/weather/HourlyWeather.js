import React, { Component } from "react";
import HourlyWeatherList from "./HourlyWeatherList";

class HourlyWeather extends Component {
	state = {
		hourlyWeatherSetCount: 0
	};

	increaseCount = () => {
		this.setState({
			hourlyWeatherSetCount: this.state.hourlyWeatherSetCount + 1
		});
	};

	render () {
		const { hourlyWeather } = this.props;
		// the large, hourly array of data is divided into smaller 8 hour interval sets of data
		const hourlyWeatherSet1 = hourlyWeather.data.slice(0, 8);
		const hourlyWeatherSet2 = hourlyWeather.data.slice(8, 16);
		const hourlyWeatherSet3 = hourlyWeather.data.slice(16, 24);
		const hourlyWeatherSet4 = hourlyWeather.data.slice(24, 32);
		const hourlyWeatherSet5 = hourlyWeather.data.slice(32, 40);
		const hourlyWeatherSet6 = hourlyWeather.data.slice(40, 48);

		return (
			<div className="ui container">
				<HourlyWeatherList hourlyWeather={hourlyWeatherSet1} />
				{this.state.hourlyWeatherSetCount >= 1 && <HourlyWeatherList hourlyWeather={hourlyWeatherSet2} />}
				{this.state.hourlyWeatherSetCount >= 2 && <HourlyWeatherList hourlyWeather={hourlyWeatherSet3} />}
				{this.state.hourlyWeatherSetCount >= 3 && <HourlyWeatherList hourlyWeather={hourlyWeatherSet4} />}
				{this.state.hourlyWeatherSetCount >= 4 && <HourlyWeatherList hourlyWeather={hourlyWeatherSet5} />}
				{this.state.hourlyWeatherSetCount >= 5 && <HourlyWeatherList hourlyWeather={hourlyWeatherSet6} />}
				{this.state.hourlyWeatherSetCount >= 5 ? null : (
					<div className="btn-container">
						<button className="ui button" id="show-more-btn" onClick={this.increaseCount}>
							Next 8 Hours
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default HourlyWeather;
