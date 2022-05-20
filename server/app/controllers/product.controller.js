const db = require("../models");
const jwt = require("jsonwebtoken");
const Product = db.products;
const User = db.users;
console.log("user", User);
console.log("products", Product);

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
	Product.find()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving products.",
			});
		});
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
	return jwt.sign({ id }, "secret_key", {
		expiresIn: maxAge,
	});
};

exports.register = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.create({ email, password });
		const token = createToken(user._id);

		res.cookie("jwt", token, {
			withCredentials: true,
			httpOnly: false,
			maxAge: maxAge * 1000,
		});
		res.status(201).json({ user: user._id, created: true });
	} catch (err) {
		console.log(err);
	}
};
