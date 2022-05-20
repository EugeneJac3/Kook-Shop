const db = require("../models");
const Product = db.products;
const User = db.users;

console.log("User collection:", User);
// Create and Save a new Product
exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({ message: "Content can not be empty!" });
		return;
	}
	// Create a Product
	const product = new Product({
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false,
	});
	// Save Product in the database
	product
		.save(product)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Product.",
			});
		});
};
// Retrieve all Products from the database.
exports.findAll = (req, res) => {
	console.log(req.query);
	Product.find()
		.then((data) => {
			res.send(data);
			// console.log("retrieved all db:", data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving Products.",
			});
		});
};
// Find a single Product with an id
exports.findOne = (req, res) => {
	const id = req.params.id;
	Product.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: "Not found Product with id " + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: "Error retrieving Product with id=" + id });
		});
};
// Update a Product by the id in the request
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Data to update can not be empty!",
		});
	}
	const id = req.params.id;
	Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update Product with id=${id}. Maybe Product was not found!`,
				});
			} else res.send({ message: "Product was updated successfully." });
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Product with id=" + id,
			});
		});
};
