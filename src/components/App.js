import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./homepage/Home";
import NewsItemDetail from "../components/news-items/NewsItemDetail";
import TopHeadlineDetail from "../components/news-items/TopHeadlineDetail";
import BusinessItemDetail from "../components/news-items/BusinessItemDetail";
import TechnologyItemDetail from "../components/news-items/TechnologyItemDetail";
import MainWeather from "../components/weather/MainWeather";
import Footer from "../components/Footer";

function App () {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/weather" component={MainWeather} />
					<Route exact path="/headlines/:top_headline_id" component={TopHeadlineDetail} />
					<Route path="/weather-news/:news_item_id" component={NewsItemDetail} />
					<Route path="/business/:business_item_id" component={BusinessItemDetail} />
					<Route path="/technology/:technology_item_id" component={TechnologyItemDetail} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
