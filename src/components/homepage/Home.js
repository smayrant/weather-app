import React, { Component } from "react";
import axios from "axios";
import HomepageNews from "./HomepageNews";

class Home extends Component {
	componentDidMount () {
		axios.get(`https://newsapi.org/v2/everything?q=weather&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
	}
	render () {
		return (
			<div>
				<HomepageNews />
			</div>
		);
	}
}

export default Home;
