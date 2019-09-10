export default (state = [], action) => {
	switch (action.type) {
		case "GET_HOMEPAGE_WEATHER_STORIES":
			return action.payload;

		default:
			return state;
	}
};
