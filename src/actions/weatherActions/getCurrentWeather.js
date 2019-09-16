import currentWeatherAPI from "../../api-config/currentWeatherAPI";
import store from "../../store/store";

export const getCurrentWeather = () => {
	const state = store.getState();

	return async dispatch => {
		try {
			const response = await currentWeatherAPI.get("/weather?", {
				params: {
					zip: state.userInput,
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
