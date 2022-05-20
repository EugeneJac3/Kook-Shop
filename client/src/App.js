import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import { CartProvider, useCart } from "react-use-cart";
import Cart from "./components/Cart";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

function App() {
	const { totalItems } = useCart();
	const [itemCount, setItemCount] = useState("");

	console.log(totalItems);
	useEffect(() => {
		setItemCount(
			JSON.parse(window.localStorage.getItem("react-use-cart")).totalItems
		);
	}, [itemCount]);

	return (
		<div>
			<CartProvider>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<a href="/" className="navbar-brand">
						Kook Boards
					</a>
					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={"/"} className="nav-link">
								Surfboards
							</Link>
						</li>

						<li className="nav-item">
							<Link to={"/add"} className="nav-link">
								About Us Page
							</Link>
						</li>
						<li className="nav-item mr-auto">
							<Link to={"/cart"} className="nav-link mr-auto">
								<Badge badgeContent={itemCount} color="secondary">
									<ShoppingCart />
								</Badge>
							</Link>
						</li>
					</div>
				</nav>
				<div className="container mt-3">
					<Routes>
						<Route path="/" element={<ProductsList />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</div>
			</CartProvider>
		</div>
	);
}

export default App;
