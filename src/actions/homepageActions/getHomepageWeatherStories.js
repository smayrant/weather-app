import baseAPINewsSearch from "../../api-config/baseAPINewsSearch";
import uuid from "uuid";

export const getHomepageWeatherStories = () => {
	return async dispatch => {
		try {
			const response = await baseAPINewsSearch;
			const responseWithId = response.data.articles.map(article => {
				//ensures each news item will have a unique id by adding an id property
				article.id = uuid.v4();
				return article;
			});

			dispatch({ type: "GET_HOMEPAGE_WEATHER_STORIES", payload: responseWithId.slice(0, 7) });
		} catch (error) {
			console.log(error);
		}
	};
};
