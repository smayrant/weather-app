import baseAPINewsSearch from "../../api-config/baseAPINewsSearch";
import uuid from "uuid";

export const getHomepageTopHeadlines = () => {
	return async dispatch => {
		try {
			const response = await baseAPINewsSearch.get("/top-headlines", {
				params: {
					apiKey: process.env.REACT_APP_NEWS_API_KEY,
					country: "us"
				}
			});
			const responseWithId = response.data.articles.map(article => {
				//ensures each news item will have a unique id by adding an id property
				article.id = uuid.v4();
				return article;
			});

			dispatch({ type: "GET_HOMEPAGE_TOP_HEADLINES", payload: responseWithId.slice(0, 6) });
		} catch (error) {
			console.log(error);
		}
	};
};
