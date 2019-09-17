export default (state = {}, action) => {
	switch (action.type) {
		case "GET_DAILY_WEATHER":
			return action.payload;

		default:
			return state;
	}
};
