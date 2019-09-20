import weatherAPI from "../../api-config/weatherAPI";
import store from "../../store/store";

export const getHourlyWeather = () => {
	const state = store.getState();

	return async dispatch => {
		try {
			const response = await weatherAPI.get("/forecast/hourly?", {
				params: {
					postal_code: state.userInput,
					key: process.env.REACT_APP_WEATHER_API_KEY,
					units: "I",
					hours: 48
				}
			});
			dispatch({ type: "GET_HOURLY_WEATHER", payload: response.data });
		} catch (error) {
			console.log(error);
		}
	};
};
