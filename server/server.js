const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

var corsOptions = {
	// origin: `http://localhost:${PORT}`,
	credentials: true,
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
app.use(cookieParser());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to our application." });
});

require("./app/routes/product.routes")(app);
app.use(express.static(path.join(__dirname, "/public")));
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.get("*", (req, res) =>{
	res.sendFile(path.join(__dirname + "/public/index.html"))
})
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to the database!");
	})
	.catch((err) => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});
