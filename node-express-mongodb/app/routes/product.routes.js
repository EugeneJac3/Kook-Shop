module.exports = (app) => {
	const products = require("../controllers/product.controller.js");

	var router = require("express").Router();
	// Create a new Product
	router.post("/", products.create);
	// Retrieve all Products
	router.get("/", products.findAll);
	// Retrieve all published Products
	router.get("/:id", products.findOne);
	// Update a Product with id
	app.use("/api/products", router);
};
