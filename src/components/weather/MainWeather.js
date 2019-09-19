import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherNavbar from "./WeatherNavbar";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import { getCurrentWeather } from "../../actions/weatherActions/getCurrentWeather";
import { getDailyWeather } from "../../actions/weatherActions/getDailyWeather";

class MainWeather extends Component {
	componentDidMount () {
		// this.props.getCurrentWeather();
		this.props.getDailyWeather();
	}

	// the rendered view is initially the current weather component
	state = {
		view: "daily"
	};

	// determine which forecast is
	selectView = view => {
		this.setState({
			view: view
		});
	};

	render () {
		const { currentWeather, dailyWeather } = this.props;
		let weather;
		if (this.state.view === "daily") {
			weather = <DailyWeather dailyWeather={dailyWeather} />;
		}

		if (this.state.view === "current") {
			weather = <CurrentWeather currentWeather={currentWeather} />;
		}

		if (this.state.view === "hourly") {
			weather = <HourlyWeather />;
		}
		return (
			<div className="main-weather main-content">
				<article>
					<main>
						<WeatherNavbar />
						<div className="forecast-type-strip">
							<div className="ui container" id="forecast-type-strip-container">
								<div onClick={() => this.selectView("current")}>
									<p className="forecast-type">Current</p>
								</div>
								<div onClick={() => this.selectView("hourly")}>
									<p className="forecast-type">Hourly</p>
								</div>
								<div onClick={() => this.selectView("daily")}>
									<p className="forecast-type">10 Day</p>
								</div>
							</div>
						</div>
						{weather}
					</main>
				</article>
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

export default connect(mapStateToProps, { getCurrentWeather, getDailyWeather })(MainWeather);
