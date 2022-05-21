import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import ProductCards from "./productCards/productCards.jsx";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { ButtonBase, Typography } from "@mui/material";
import Buttons from "./buttons";

const ProductsList = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [products, setProducts] = useState([]);

	const productItems = [...new Set(allProducts.map((Val) => Val.brand))];
	console.log("initial productItems:", productItems);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = () => {
		ProductDataService.getAll()
			.then((response) => {
				setProducts(response.data);
				setAllProducts(response.data);
				// console.log("retrieved products:", response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<Grid
			container
			direction="row"
			//   justifyContent="center"
			//   alignItems="flex-start"
		>
			<Grid item xs={2} className="filter">
				<Typography variant="h4" component="div" gutterBottom>
					Filter Brands
				</Typography>
				<Box>
					<Buttons
						originalProducts={allProducts}
						setProducts={setProducts}
						productItems={productItems}
					/>
				</Box>
			</Grid>
			<Grid item xs={10}>
				<ProductCards products={products} key={products._id} />
			</Grid>
		</Grid>
	);
};
export default ProductsList;
