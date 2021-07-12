const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Cart = require("../models/Cart");
//get all cart items
router.get("/", auth, (req, res) => {
	Cart.findOne({ user: req.user.id })
		.populate("items.product")
		.exec((err, cart) => {
			if (!cart) {
				return res.send(null);
			}

			res.send(cart);
		});
});
