export default (state = [], action) => {
	switch (action.type) {
		case "GET_HOMEPAGE_TECHNOLOGY_ARTICLES":
			return action.payload;

		default:
			return state;
	}
};
