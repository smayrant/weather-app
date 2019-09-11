import baseAPINewsSearch from "../../api-config/baseAPINewsSearch";

export const getHomepageWeatherStories = () => {
	return async dispatch => {
		try {
			const response = await baseAPINewsSearch;
			dispatch({ type: "GET_HOMEPAGE_WEATHER_STORIES", payload: response.data.articles.slice(0, 7) });
		} catch (error) {
			console.log(error);
		}
	};
};
