const mongoose = require("mongoose");
Schema = mongoose.Schema;
const CartSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	items: [
		{
			menu: {
				type: Schema.Types.ObjectId,
				ref: "Menu"
			},
			quantity: Number
		}
	]
});

module.exports = Cart = mongoose.model("Cart", CartSchema);
