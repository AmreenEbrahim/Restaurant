import { MENU_ERROR, GET_MENU } from "../actions/types";

const initialState = {
	posts: [],
	post: null,
	loading: true,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_MENU:
			return {
				...state,
				menu: payload,
				loading: false
			};

		case MENU_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};

		default:
			return state;
	}
}
