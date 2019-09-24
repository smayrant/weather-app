import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./homepage/Home";
import NewsItemDetail from "../components/news-items/NewsItemDetail";
import TopHeadlineDetail from "../components/news-items/TopHeadlineDetail";
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
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
