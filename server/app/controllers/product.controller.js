const db = require("../models");
const jwt = require("jsonwebtoken");
const Product = db.products;
const User = db.users;
const Order = db.orders;
const bcrypt = require("bcrypt");
const stripe = require("stripe")(
	"sk_test_51L0VFOBKL98zZMtXBazjGvk1OCQSkxb38tGnumDnIXGQRNliyNW9Xt4Pp2o8KSkEaxsxVWOMbQt5da3YdXma7Qlh00avylUTBA"
);
require("dotenv").config();
const saltRounds = bcrypt.genSaltSync(Number(process.env.SALT_FACTOR));
console.log("user", User);
console.log("products", Product);
console.log("order", Order);

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

// const createToken = (id) => {
// 	return jwt.sign({ id }, process.env.KEY, {
// 		expiresIn: maxAge,
// 	});
// };

const handleErrors = (err) => {
	let errors = { email: "", password: "" };

	if (err.message === "incorrect Email")
		errors.email = "That email is not registered";
	if (err.message === "incorrect password")
		errors.password = "That password is incorrect";

	if (err.code === 11000) {
		errors.email = "Email is already registered";
		return errors;
	}

	if (err.message.includes("Users valdiation failed")) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}
	return errors;
};

// User Registration
exports.register = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (password) {
			// Look at middleware example to fix
			const hash = bcrypt.hashSync(password, saltRounds);
			const user = await User.create({
				email,
				password: hash,
			});
			console.log("registration user", user);

			res.status(201).json({ user: user._id, created: true });
		} else {
			//figure this out
			console.log("password required");
		}
	} catch (err) {
		console.log(err);
		const errors = handleErrors(err);
		res.json({ errors, created: false });
	}
};

// User Login
exports.login = async (req, res, next) => {
	// console.log("user at the top of login", user)

	const { email, password } = req.body;
	const user = await User.findOne({
		email: email,
	});
	const comparePass = bcrypt.compareSync(password, user.password);

	if (comparePass) {
		//   console.log("bcrypt", comparePass)
		const token = jwt.sign(
			{
				email,
				id: user._id,
			},
			process.env.KEY,
			{ expiresIn: "3h" }
		);
		console.log("token user", user._id);
		res.cookie("jwt", token, { httpOnly: false });
		res.status(200).json({ user: user._id, status: true });
		console.log("token", token);
	} else {
		res.send("Sorry, wrong username/password");
	}
};

exports.checkout = async (req, res) => {
	const { cartTotal } = req.body;
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
				price_data: {
					currency: "usd",
					product_data: {
						name: "Grand Total",
					},
					unit_amount_decimal: cartTotal * 100,
				},
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: `http://localhost:8081/successful`,
		cancel_url: `http://localhost:8081/shopping-cart`,
	});

	res.json({ url: session.url });
};

exports.placeOrder = async (req, res, next) => {
	try {
		const { userID, items, cartTotal, totalItems } = req.body;
		if (items) {
			const order = await Order.create({
				userID,
				items,
				cartTotal,
				totalItems,
			});
			console.log("Your order info is", order);

			res.status(200).end();
		}
	} catch (err) {
		console.log(err);
	}
};
