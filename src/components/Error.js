import React from "react";
import { Link } from "react-router-dom";
import mailman from "../img/mailman.png";

const Error = () => {
	return (
		<div className="main-body">
			<div className="container">
				<div className="error-container">
					<img className="error-img" src={mailman} alt="Man looking on a map" />
					<h1>Sorry, but this page isn't on the map :(</h1>
					<h3>How about heading back home?</h3>
					<Link className="home-link" to="/">
						Home
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Error;
