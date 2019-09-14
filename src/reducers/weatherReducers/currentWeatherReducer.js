export default (state = {}, action) => {
	switch (action.type) {
		case "GET_CURRENT_WEATHER":
			return action.payload;

		default:
			return state;
	}
};
