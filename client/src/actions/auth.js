import axios from "axios";
import { setAlert } from "./alert";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	AUTH_ERROR,
	USER_LOADED,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	CLEAR_PROFILE,
	LOGOUT
} from "./types";
// import setAuthToken from "../utils/setAuthToken";

//load user
// export const loadUser = () => async dispatch => {
// 	if (localStorage.token) {
// 		setAuthToken(localStorage.token);
// 	}
// 	try {
// 		const res = await axios.get("/api/auth");
// 		// console.log("action auth==", res.data);
// 		dispatch({
// 			type: USER_LOADED,
// 			payload: res.data
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: AUTH_ERROR
// 		});
// 	}
// };

///Register user action
export const register = ({ name, email, password }) => async dispatch => {
	// console.log("user details", name, email, password);

	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const body = JSON.stringify({ name, email, password });

	try {
		// const res = await axios("/api/user", body, config);
		const res = await axios.post("/api/user", body, config);
		// console.log("respo--", res.data);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
		// dispatch(loadUser());
	} catch (err) {
		console.log(err);
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach(error => {
				dispatch(setAlert(error.msg, "danger"));
			});
		}
		dispatch({
			type: REGISTER_FAIL
		});
	}
};

//LOgin user
// export const login = (email, password) => async dispatch => {
// 	// console.log("user details", name, email, password);

// 	const config = {
// 		headers: {
// 			"Content-Type": "application/json"
// 		}
// 	};
// 	const body = JSON.stringify({ email, password });

// 	try {
// 		// const res = await axios("/api/user", body, config);
// 		const res = await axios.post("/api/auth", body, config);
// 		// console.log("login respo--", res.data);
// 		dispatch({
// 			type: LOGIN_SUCCESS,
// 			payload: res.data
// 		});
// 		dispatch(loadUser());
// 	} catch (err) {
// 		console.log(err);
// 		const errors = err.response.data.errors;
// 		if (errors) {
// 			errors.forEach(error => {
// 				dispatch(setAlert(error.msg, "danger"));
// 			});
// 		}
// 		dispatch({
// 			type: LOGIN_FAIL
// 		});
// 	}
// };

//LOGOUT //CLEAr profile
// export const logout = () => dispatch => {
// 	dispatch({ type: CLEAR_PROFILE });
// 	dispatch({ type: LOGOUT });
// };
