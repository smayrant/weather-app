export default (state = "", action) => {
	switch (action.type) {
		case "GET_USER_INPUT":
			return action.payload;

		default:
			return state;
	}
};
