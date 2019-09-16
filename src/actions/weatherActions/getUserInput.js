import store from "../../store/store";

export const getUserInput = e => {
	const state = store.getState();
	console.log(state.userInput);

	return {
		type: "GET_USER_INPUT",
		payload: e.target.value
	};
};
