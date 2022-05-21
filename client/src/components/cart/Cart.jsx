import { Button, Typography } from "@mui/material";
import { useCart } from "react-use-cart";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function Cart() {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		cartTotal,
		updateItemQuantity,
		removeItem,
	} = useCart();

	if (isEmpty) return <p>Your cart is empty</p>;

	return (
		<>
			<Typography variant="h3" sx={{ m: 3 }}>
				Your Cart
			</Typography>

			{items.map((item) => (
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				>
					<ListItem sx={{ width: 600 }}>
						<ListItemAvatar>
							<Avatar src={item.imgURL}></Avatar>
						</ListItemAvatar>
						<ListItemText sx={{ display: "block" }}>
							<Typography noWrap="true" sx={{ display: "block" }}>
								{item.name} x {item.quantity} @ ${item.price} each
							</Typography>
						</ListItemText>
						<Button
							size="small"
							sx={{ borderRadius: 28 }}
							onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
						>
							-
						</Button>
						<Button
							sx={{ borderRadius: 28 }}
							onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
						>
							+
						</Button>
						<Button onClick={() => removeItem(item.id)}>Remove</Button>
					</ListItem>
				</List>
			))}
			<Typography variant="h4" sx={{ m: 3 }}>
				Total: ${cartTotal}
			</Typography>
		</>
	);
}
