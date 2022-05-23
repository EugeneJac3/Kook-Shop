import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import ProductCards from "./productCards/productCards.jsx";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CoolSlider from "./coolSlider/coolSlider";
import DropdownFilter from "./dropdownFilter";

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

  const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    filterSection: {
      margin: "10px",
      position: "sticky",
      top: 0,
      display: "flex",
      justifyContent: "flex-start",
    },
  });

  const classes = useStyles();

  return (
    <Box>
      <CoolSlider />
      <Box className={classes.filterSection}>
        <DropdownFilter
          originalProducts={allProducts}
          setProducts={setProducts}
          productItems={productItems}
        />
      </Box>
      <Box className={classes.root}>
        <Box className={classes.main}>
          <ProductCards products={products} key={products._id} />
        </Box>
      </Box>
    </Box>
  );
};
export default ProductsList;
