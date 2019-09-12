import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./homepage/Home";
import NewsItemDetail from "../components/news-items/NewsItemDetail";

function App () {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route path="/:news_item_id" component={NewsItemDetail} />
			</div>
		</BrowserRouter>
	);
}

export default App;
