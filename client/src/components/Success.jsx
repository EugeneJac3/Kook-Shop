import { Button, Container } from "@mui/material";
import axios from "axios";
import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useCart } from "react-use-cart";
import { UserContext } from "../helper/UserContext";

export default function Success() {
	const [orderSent] = useState(false);
	const { emptyCart, items, cartTotal, totalItems } = useCart();
	const { user } = useContext(UserContext);

	// const formatter = new Intl.NumberFormat("en-US", {
	// 	style: "currency",
	// 	currency: "USD",
	// 	minimumFractionDigits: 2,
	// });
	console.log("Success page user is", user);
	const orderData = JSON.stringify({
		userID: "123456",
		items: items,
		cartTotal: cartTotal,
		totalItems: totalItems,
	});

	console.log(items, cartTotal, totalItems);

	const orderPostConfig = {
		method: "post",
		url: "http://localhost:8080/api/place-order",
		headers: {
			"Content-Type": "application/json",
		},
		data: orderData,
	};

	useEffect(() => {
		if (orderSent === false) {
			async function postOrderData() {
				try {
					const response = await axios(orderPostConfig);
				} catch (e) {
					console.error(e);
				}
			}
			postOrderData();
			emptyCart();
		}
	}, [orderSent]);

	return (
		<div>
			<Container sx={{ m: 3 }}>
				<h3>
					Your order was successful. Thanks for shopping with Kook Surf! 🏄🏼‍♂️
				</h3>
				<Button variant="contained" sx={{ mt: 3 }} href="/">
					Return home
				</Button>
			</Container>
		</div>
	);
}
