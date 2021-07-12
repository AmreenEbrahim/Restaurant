const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const connnectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
		console.log("mongodb connected");
	} catch (error) {
		console.error(error.message);
		//exit process when failed
		process.exit(1);
	}
};

module.exports = connnectDB;
