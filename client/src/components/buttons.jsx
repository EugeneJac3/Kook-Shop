import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Buttons = ({ originalProducts, setProducts, productItems }) => {
	const filterProduct = (curcat) => {
		const newProduct = originalProducts.filter((newVal) => {
			console.log("curcat:", curcat);
			return newVal.brand === curcat;
			// comparing brand for displaying data
		});
		setProducts(newProduct);
	};

	return (
		<>
			<Box className="buttonContainer">
				{productItems.map((Val, id) => {
					return (
						<Button
							variant="contained"
							size="medium"
							className="brandButton"
							onClick={() => filterProduct(Val)}
							key={id}
						>
							{Val}
						</Button>
					);
				})}

				<Button
					variant="contained"
					size="medium"
					className="allBrandsButton"
					onClick={() => setProducts(originalProducts)}
				>
					All Brands
				</Button>
			</Box>
		</>
	);
};
export default Buttons;
