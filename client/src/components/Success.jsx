import { Button, Container } from "@mui/material";
import axios from "axios";
import * as React from "react";

export default function Success() {
	useEffect(async () => {
		await axios("http://localhost:8080/api/place-order")
			.then(function (result) {
				console.log(result);
				return result.json();
			})
			.then(function (result) {
				setData(result);
				console.log(data);
				setLoading(false);
			});
	}, []);

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
