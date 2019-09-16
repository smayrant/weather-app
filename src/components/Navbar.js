import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInput } from "../actions/weatherActions/getUserInput";
import { getCurrentWeather } from "../actions/weatherActions/getCurrentWeather";

const Navbar = props => {
	return (
		<div className="navbar">
			<div className="navbar-content-container ui container">
				<Link to="/" className="navbar-logo">
					Weather
				</Link>
				<div className="navbar-right">
					<form className="ui transparent icon input">
						<input
							onChange={props.getUserInput}
							className="search-input"
							type="text"
							placeholder="Enter Zip Code"
						/>
						<Link to="/currentweather">
							<i onClick={props.getCurrentWeather} id="search-icon" className="search link icon" />
						</Link>
					</form>
				</div>
				<i id="menu-icon" className="bars icon" />
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	console.log(state);
	return {
		userInput: state.userInput
	};
};

export default connect(mapStateToProps, { getUserInput, getCurrentWeather })(Navbar);
