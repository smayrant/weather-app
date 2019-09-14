import axios from "axios";

export default axios.get(`https://newsapi.org/v2/everything?q=weather&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
