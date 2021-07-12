const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//@route Get api/users
//@desc Test route
//@access Public
router.get("/", async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server  Error");
	}
});

//@route post api/auth
//@desc authenticate and get token
//@access Public
router.post(
	"/",
	[
		// check("name", "Name is Requires")
		// 	.not()
		// 	.isEmpty(),
		check("email", "Email is not valid").isEmail(),
		check("password", "Password is Required ").exists()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			// console.log("user===", email, password);
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials" }] });
			}
			const isMatchh = await bcrypt.compare(password, user.password);
			if (!isMatchh) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid credentials" }] });
			}

			const payload = {
				user: {
					id: user.id
				}
			};
			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{
					expiresIn: 360000
				},
				(errors, token) => {
					if (errors) throw errors;
					res.json({ token });
				}
			);
		} catch (error) {
			console.log(error.message);
			res.status(400).send("Serer Error");
		}
	}
);
module.exports = router;
