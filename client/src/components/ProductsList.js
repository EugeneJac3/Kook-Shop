import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import ProductCards from "./productCards/productCards.jsx";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Buttons from "./buttons";
import { makeStyles } from "@mui/styles";
import Slider from "./slider/Slider";

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
      height: "100%",
    },
    sidebar: {
      top: "0",
      position: "-webkit-sticky",
      position: "sticky",
      height: "50vh",
      marginTop: "50px",
      marginLeft: "20px",
      marginRight: "50px",
      width: "15vh",
    },
    box: {
      color: "white",
    },
  });

  const classes = useStyles();

  return (
    <Box>
      <Slider />
      <Box className={classes.root}>
        <Box className={classes.sidebar}>
          <Box className={classes.box}>
            <Typography variant="h4" component="div" gutterBottom>
              Filter Brands
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" component="div" gutterBottom>
              Filter Brands
            </Typography>
          </Box>
          <Box>
            <Buttons
              originalProducts={allProducts}
              setProducts={setProducts}
              productItems={productItems}
            />
          </Box>
        </Box>
        <Box className={classes.main}>
          <ProductCards products={products} key={products._id} />
        </Box>
      </Box>
    </Box>
  );
};
export default ProductsList;
