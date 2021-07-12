import axios from "axios";
// import { setAlert } from "./alert";
import { GET_MENU, MENU_ERROR } from "./types";

//get mmenu items
export const getMenu = () => async dispatch => {
	try {
		const res = await axios.get("/api/menu");
		console.log("menu item", res.data);

		dispatch({
			type: GET_MENU,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: MENU_ERROR,
			payload: {
				msg: error.response.statusText,
				status: error.response.status
			}
		});
	}
};

export const addOrder = () => async dispatch => {};
