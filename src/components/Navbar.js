import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-content-container">
				<div className="navbar-icon">React2Weather</div>
				<div className="navbar-right">
					<form className="ui transparent icon input">
						<input type="text" placeholder="Enter Location..." />
						<i className="search link icon" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
