const {checkUser} = require("../middleware/AuthMiddleware")

module.exports = (app) => {
	const products = require("../controllers/product.controller.js");

	var router = require("express").Router();


	// //Credentials route
	// router.post("/", checkUser)
	//Register route
	router.post("/register", products.register);
	//Register route
	router.post("/login", products.login);
	// Retrieve all Products
	router.get("/products", products.findAll);

	app.use("/api", router);
};
