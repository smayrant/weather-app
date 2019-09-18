import React, { Component } from "react";
import HomepageNews from "./HomepageNews";
import axios from "axios";

class Home extends Component {
	componentDidMount () {
		axios.get(
			`https://newsapi.org/v2/everything?q=weather&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
		);
	}
	render () {
		return (
			<div className="main-content">
				<HomepageNews />
			</div>
		);
	}
}

export default Home;
