import axios from "axios";

export default axios
	.get(`https://newsapi.org/v2/everything?q=weather&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
	.then();

// export default axios.create({
// 	baseURL: "https://newsapi.org/v2/everything?",
// 	params: {
// 		q: "weather",
// 		apiKey: process.env.REACT_APP_NEWS_API_KEY
// 	}
// });
