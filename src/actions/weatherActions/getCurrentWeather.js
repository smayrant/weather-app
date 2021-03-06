import weatherAPI from "../../api-config/weatherAPI";
import store from "../../store/store";

export const getCurrentWeather = () => {
	const state = store.getState();

	return async dispatch => {
		try {
			const response = await weatherAPI.get("/current?", {
				params: {
					postal_code: state.userInput,
					key: process.env.REACT_APP_WEATHER_API_KEY,
					units: "imperial"
				}
			});
			dispatch({ type: "GET_CURRENT_WEATHER", payload: response.data.data[0] });
		} catch (error) {
			console.log(error);
		}
	};
};
