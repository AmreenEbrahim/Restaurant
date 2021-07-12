import { combineReducers } from "redux";
import alert from "./alert";
import menu from "./menu";

export default combineReducers({
	alert,
	menu
});
