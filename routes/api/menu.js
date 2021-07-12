const express = require("express");
const router = express.Router();

const Menu = require("../../models/Menu");
const User = require("../../models/User");

//@route Get api/menu
//@desc get all meu tems
//@access publis

router.get("/", async (req, res) => {
	try {
		const menu = await Menu.find().sort({ date: -1 });
		// console.log("menu--", menu);

		res.json(menu);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}
});
// router.get("/menu", (req, res) => res.send("menu route"));
module.exports = router;
