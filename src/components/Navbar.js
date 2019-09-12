import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-content-container ui container">
				<Link to="/" className="navbar-logo">
					Weather
				</Link>
				<div className="navbar-right">
					<form className="ui transparent icon input">
						<input type="text" placeholder="Enter Location..." />
						<i className="search link icon" />
					</form>
				</div>
				<i id="menu-icon" className="bars icon" />
			</div>
		</div>
	);
};

export default Navbar;
