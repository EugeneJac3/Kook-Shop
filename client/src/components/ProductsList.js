import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import ProductCards from "./productCards/ProductCards.jsx";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [checked, setChecked] = React.useState(true);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = () => {
		ProductDataService.getAll()
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const handleChange = (event) => {
		setChecked(event.target.checked);
		console.log(checked);
	};

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
		>
			<Grid item xs={2} className="filter">
				<h1>Filter Brands</h1>
				<Box>
					<Box
						sx={{
							display: "flex",
						}}
					>
						<Checkbox
							checked={checked}
							onChange={handleChange}
							inputProps={{ "aria-label": "controlled" }}
						/>
						<Typography variant="h5" component="p">
							Kook
						</Typography>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={10}>
				<ProductCards products={products} key={products._id} />
			</Grid>
		</Grid>
	);
};
export default ProductsList;
