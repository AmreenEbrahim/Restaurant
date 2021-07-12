const express = require("express");
const app = express();
const connectDB = require("./config/db");

//connect to database
connectDB();
//Initialise mddle ware
app.use(express.json({ extended: false }));
//initialise end point
app.get("/", (req, res) => res.send("API running"));

//defining routes

app.use("/api/user", require("./routes/api/user"));
app.use("/api/menu", require("./routes/api/menu"));
// app.use("/api/order", require("./routes/api/order"));
// app.use("/api/bill", require("./routes/api/bill"));

//initialise port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
