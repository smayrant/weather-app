import React from "react";
import Home from "./homepage/Home";
import { BrowserRouter, Route } from "react-router-dom";
import NewsItemDetail from "../components/news-items/NewsItemDetail";

function App () {
	return (
		<BrowserRouter>
			<div className="App">
				<Home />
				<Route path="/:news_item_id" component={NewsItemDetail} />
			</div>
		</BrowserRouter>
	);
}

export default App;
