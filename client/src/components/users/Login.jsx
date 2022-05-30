import React, { useState,useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "../../helper/UserContext";

export default function Login() {
	const [cookies] = useCookies([])
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		if (cookies.jwt) {
		  navigate("/");
		}
	  }, [cookies, navigate]);


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
			const { data } = await axios.post("http://localhost:8080/api/login", {
				...values,
				
			},{
				withCredentials: true,}
				);
			if (data) {
				if (data.errors) {
				 const {email, password} = data.errors;
				 if(email) generateError(email);
				 else if (password) generateError(password);
				}  else {
					setUser(data.user)
					console.log("data.user", data.user)
					console.log("setUser", user)
					navigate("/")
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="logBody">
		<div className="Usercontainer">
			<h2>Login Account</h2>
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
				<button type="submit">Submit</button>
				<span>
					Already have an account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
		</div>
	);
}
