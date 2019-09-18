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
					<div>
						<form className="ui focus icon input">
							<input
								onChange={props.getUserInput}
								id="search-input"
								type="text"
								placeholder="Enter Zip Code"
								pattern="[0-9]+"
							/>
							<Link to="/weather">
								{/* <i onClick={props.getCurrentWeather} id="search-icon" className="search link icon" /> */}
								<button className="ui icon button">
									<i className="search icon" />
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		userInput: state.userInput
	};
};

export default connect(mapStateToProps, { getUserInput, getCurrentWeather })(Navbar);
