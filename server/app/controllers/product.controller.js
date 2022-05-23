const db = require("../models");
const jwt = require("jsonwebtoken");
const Product = db.products;
const User = db.users;
const bcrypt = require("bcrypt")
require("dotenv").config();
const saltRounds = bcrypt.genSaltSync(Number(process.env.SALT_FACTOR))
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
	return jwt.sign({ id }, process.env.KEY, {
		expiresIn: maxAge,
	});
};

const handleErrors = (err) => {
	let errors = {email:"", password:""};

	if(err.code===11000) {
		errors.email = "Email is already registered";
		return errors;
	}

	if(err.message.includes("Users valdiation failed")) {
		OBJECT.values(err.errors).forEach(({properties})=> {
			errors[properties.path] = properties.message;
		});
	}
	return errors;
};

// User Registration
exports.register = async (req, res, next) => {

	
	
	try {
		const { email, password } = req.body;
		const hash = bcrypt.hashSync(password, saltRounds)
		const user = await User.create({
			 email, 
			 password:hash 
			});
			console.log("registration user", user)
		
		res.status(201).json({ user: user._id, created: true });
	} catch (err) {
		console.log(err);
		const errors = handleErrors(err);
		res.json({errors, created: false});
	}
};

// User Login
exports.login = async (req, res, next) => {
	// console.log("user at the top of login", user)
	
	const { email, password} = req.body;
	const user = await User.findOne({
	  where: {
		email: email
	  }
	})
	console.log("user from database", user)
	console.log("incomning email", req.body.email)
	console.log("matched email", email)
	const comparePass = bcrypt.compareSync(password,user.password)
	console.log("user after compare", user)
	  if (comparePass) {
		  console.log("bcrypt", comparePass)
		const token = jwt.sign(
		  {
			id: user._id
		  },
		  process.env.KEY,
		  {expiresIn: "1h"}
		);
		res.cookie("token", token)
		console.log("user at the end with id", user.email)
		return user
		} else {
		  res.send('Sorry, wrong username/password')
		}
	
};
