import React from "react";
import { Link } from "react-router-dom";

const weatherNavbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-content-container ui container">
				<Link to="/" className="navbar-logo">
					Weather
				</Link>
			</div>
		</div>
	);
};

export default weatherNavbar;
