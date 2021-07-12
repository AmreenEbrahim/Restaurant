const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const MenuSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true }
});

module.exports = Menu = mongoose.model("Menu", MenuSchema);
