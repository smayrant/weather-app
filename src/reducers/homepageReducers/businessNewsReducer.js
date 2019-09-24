export default (state = [], action) => {
	switch (action.type) {
		case "GET_HOMEPAGE_BUSINESS_ARTICLES":
			return action.payload;

		default:
			return state;
	}
};
