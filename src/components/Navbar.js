import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-content-container ui container">
				<div className="navbar-icon">Weather</div>
				<div className="navbar-right">
					<form className="ui transparent icon input">
						<input type="text" placeholder="Enter Location..." />
						<i className="search link icon" />
					</form>
				</div>
				<i id="menu-icon" class="bars icon" />
			</div>
		</div>
	);
};

export default Navbar;
