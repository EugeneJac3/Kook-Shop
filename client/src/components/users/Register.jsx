import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./User.css";

export default function Register() {
	const navigate = useNavigate();

	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const generateError = (err) =>
		toast.error(err, {
			position: "bottom-right",
		});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"/api/register",
				{
					...values,
				},
				{
					withCredentials: true,
				}
			);

			if (data) {
				if (data.errors) {
					console.log("data.errors", data.errors);
					const { email, password } = data.errors;
					if (email) generateError(email);
					else if (password) alert("Needs");
				} else {
					navigate("/login");
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="regBody">
			<div className="Usercontainer">
				<h2>Register Account</h2>

				<form onSubmit={(e) => handleSubmit(e)}>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							onChange={(e) =>
								setValues({ ...values, [e.target.name]: e.target.value })
							}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							onChange={(e) =>
								setValues({ ...values, [e.target.name]: e.target.value })
							}
						/>
					</div>
					<button className="userButton" type="submit">
						Submit
					</button>
					<span>
						Already have an account? <Link to="/login">Login</Link>
					</span>
				</form>

				<ToastContainer />
			</div>
		</div>
	);
}
