export default (state = {}, action) => {
	switch (action.type) {
		case "CLEAR_CURRENT_WEATHER":
			return action.payload;
		case "CLEAR_DAILY_WEATHER":
			return action.payload;
		case "CLEAR_HOURLY_WEATHER":
			return action.payload;
		default:
			return state;
	}
};
