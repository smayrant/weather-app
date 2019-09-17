export const getUserInput = e => {
	return {
		type: "GET_USER_INPUT",
		payload: e.target.value
	};
};
