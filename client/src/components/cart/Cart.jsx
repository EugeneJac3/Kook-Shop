import {
	Button,
	ButtonGroup,
	Fab,
	TableCell,
	tableCellClasses,
	Typography,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { useCart } from "react-use-cart";
import * as React from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Cart() {
	const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
		useCart();
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	});

	if (isEmpty) return <p>Your cart is empty</p>;

	const handleCartSubmit = async (e) => {
		e.preventDefault();
		const newCartTotal = cartTotal.toFixed(2) * 100;
		console.log(newCartTotal);
		try {
			const data = await axios.post(
				"/api/create-checkout-session",
				{ newCartTotal },
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			const body = await data.data;
			window.location.href = body.url;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Typography variant="h3" sx={{ m: 4 }}>
				Your Cart
			</Typography>
			<TableContainer sx={{ ml: 3, mr: 3, maxWidth: 700 }}>
				<Table>
					<TableHead>
						<TableRow sx={{ fontWeight: "bold" }}>
							<TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
							<TableCell align="right" sx={{ fontWeight: "bold" }}>
								Quantity
							</TableCell>
							<TableCell align="right" sx={{ fontWeight: "bold" }}>
								Unit Price
							</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((item) => (
							<TableRow key={item.name}>
								<TableCell
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									<Avatar
										src={item.imgURL}
										sx={{ mr: 1 }}
										variant="square"
									></Avatar>

									{item.name}
								</TableCell>
								<TableCell align="right">{item.quantity}</TableCell>
								<TableCell align="right">${item.price}</TableCell>
								<TableCell align="left">
									<ButtonGroup>
										<Button
											size="small"
											sx={{ borderRadius: 10 }}
											onClick={() =>
												updateItemQuantity(item.id, item.quantity - 1)
											}
										>
											<Typography sx={{ fontWeight: "bold" }}>-</Typography>
										</Button>
										<Button
											sx={{ borderRadius: 10 }}
											onClick={() =>
												updateItemQuantity(item.id, item.quantity + 1)
											}
										>
											<Typography sx={{ fontWeight: "bold" }}>+</Typography>
										</Button>
									</ButtonGroup>
									<Fab
										sx={{
											bgcolor: "background.paper",
											ml: 2,
											fontSize: 6,
										}}
										size="small"
										onClick={() => removeItem(item.id)}
									>
										<DeleteIcon color="info" fontSize="small"></DeleteIcon>
									</Fab>
								</TableCell>
							</TableRow>
						))}

						<TableRow
							sx={{ [`& .${tableCellClasses.root}`]: { borderBottom: "none" } }}
						>
							<TableCell>
								<Button variant="text" href="/">
									<ArrowBackIosIcon fontSize="small" />
									Continue Shopping
								</Button>
							</TableCell>

							<TableCell colSpan={1} align="right" sx={{ fontWeight: "bold" }}>
								Total:
							</TableCell>
							<TableCell align="right">{formatter.format(cartTotal)}</TableCell>
							<TableCell>
								{/* <form
									onSubmit={handleCartSubmit} */}
								{/* // action="http://localhost:8080/api/create-checkout-session" //
								method="POST" */}
								{/* > */}
								<Button
									variant="text"
									type="submit"
									id="checkout-button"
									onClick={(e) => handleCartSubmit(e)}
								>
									Checkout
									<ArrowForwardIosIcon fontSize="small" sx={{ ml: 1 }} />
								</Button>
								{/* </form> */}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
