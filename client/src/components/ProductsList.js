import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import { Link } from "react-router-dom";
import ProductCards from "./productCards/productCards.jsx";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");

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

	const findByTitle = () => {
		ProductDataService.findByTitle(searchTitle)
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<div>
			<ProductCards products={products} />
		</div>
	);
};
export default ProductsList;
