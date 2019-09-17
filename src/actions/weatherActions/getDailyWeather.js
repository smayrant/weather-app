import weatherAPI from "../../api-config/weatherAPI";
import store from "../../store/store";

export const getDailyWeather = () => {
	const state = store.getState();

	return async dispatch => {
		try {
			const response = await weatherAPI.get("/forecast/daily?", {
				params: {
					postal_code: state.userInput,
					key: process.env.REACT_APP_WEATHER_API_KEY,
					units: "I",
					days: 5
				}
			});
			dispatch({ type: "GET_DAILY_WEATHER", payload: response });
		} catch (error) {
			console.log(error);
		}
	};
};
