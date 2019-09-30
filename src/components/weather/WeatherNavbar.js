import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/weather.svg";

const weatherNavbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-content-container ui container">
				<Link to="/" className="navbar-logo">
					<div className="navbar-logo-title">
						<img src={logo} alt="logo" />
						<p className="navbar-title weather-navbar-title">React News</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default weatherNavbar;
