import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import Secret from "./components/users/Secret";
import ResponsiveAppBar from "./components/navBar";
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const navigate = useNavigate();

	const logOut = () => {
		navigate("/register")
	}

	return (
		<div>
			<ResponsiveAppBar />

			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<ProductsList />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/secret" element={<Secret />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
