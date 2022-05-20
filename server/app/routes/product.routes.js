module.exports = (app) => {
	const products = require("../controllers/product.controller.js");

	var router = require("express").Router();

	//Register route
	router.post("/register", products.register);
	// Retrieve all Products
	router.get("/products", products.findAll);

	app.use("/api", router);
};
