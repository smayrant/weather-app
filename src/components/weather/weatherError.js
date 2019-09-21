import React from "react";
import { Link } from "react-router-dom";
import mailman from "../../img/mailman.png";

const Error = () => {
	return (
		<div className="main-body">
			<div className="container">
				<div className="error-container">
					<img className="error-img" src={mailman} alt="Man looking on a map" />
					<h1>Please ensure you enter a valid zip code</h1>
					<h3>How about trying again?</h3>
					<Link className="home-link" to="/">
						Home
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Error;
