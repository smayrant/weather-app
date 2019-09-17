export default (state = "", action) => {
	switch (action.type) {
		case "CLEAR_CURRENT_WEATHER":
			return state;

		default:
			return state;
	}
};
