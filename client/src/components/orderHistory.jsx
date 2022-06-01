import React, { useState, useEffect } from "react";
import OrderDataService from "../services/ProductService";
import Box from "@mui/material/Box";
import OrderCards from "./orderCards";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";

const OrderHistory = () => {
	const [allOrders, setAllOrders] = useState([]);
	const [cookies] = useCookies(["jwt"]);
	const decoded = jwt_decode(cookies.jwt);
	const userID = decoded.id;

	useEffect(() => {
		retrieveOrders();
	}, []);

	const retrieveOrders = () => {
		OrderDataService.getAllOrders()
			.then((response) => {
				console.log("all orders", response.data);
				const allOrders = response.data;
				const userOrders = allOrders.filter((order) => order.userID === userID);

				setAllOrders(userOrders);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<Box>
			<OrderCards orders={allOrders} />
		</Box>
	);
};
export default OrderHistory;
