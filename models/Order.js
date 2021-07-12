const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const OrderSchema = new Schema({
	total_amount: { type: Number, required: true },
	status: { type: String, required: true, default: "placed" },
	created_at: {
		type: Date,
		default: Date.now
	},
	menu: [{ type: Schema.ObjectId, ref: "Menu" }],
	user: { type: Schema.ObjectId, ref: "User" }
});

module.exports = Order = mongoose.model("Order", OrderSchema);
