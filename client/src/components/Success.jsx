import { Button, Container } from "@mui/material";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

export default function Success() {
	const [orderSent, setOrderSent] = useState(false);

	const { emptyCart, items, cartTotal, totalItems } = useCart();

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
