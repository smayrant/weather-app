import currentWeatherAPI from "../../api-config/currentWeatherAPI";

export const getCurrentWeather = () => {
	return async dispatch => {
		try {
			const response = await currentWeatherAPI.get("/weather?", {
				params: {
					zip: 20745,
					appid: process.env.REACT_APP_WEATHER_API_KEY,
					units: "imperial"
				}
			});
			dispatch({ type: "GET_CURRENT_WEATHER", payload: response.data });
		} catch (error) {
			console.log(error);
		}
	};
};
