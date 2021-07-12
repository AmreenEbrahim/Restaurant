const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const config = require("config");
const jwt = require("jsonwebtoken");

router.post(
	"/",
	[
		check("name", "Name is Required")
			.not()
			.isEmpty(),
		check("email", "Email is not valid").isEmail(),
		check(
			"password",
			"Please enter Password with minimum 6 charactres"
		).isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "user already exists" }] });
			}

			user = new User({
				name,
				email,

				password
			});
			let salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
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
