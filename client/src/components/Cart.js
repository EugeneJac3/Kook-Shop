import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
	const {
		isEmpty,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	// if (isEmpty) return <h1>Your cart is empty</h1>;

	return (
		<div>
			<h1>Your total items: ({totalItems})</h1>
		</div>
	);
};

export default Cart;
