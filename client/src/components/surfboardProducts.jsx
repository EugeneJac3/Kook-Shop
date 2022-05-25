import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import ProductCards from "./productCards/productCards.jsx";
import Box from "@mui/material/Box";
import DropdownFilter from "./dropdownFilter";

const SurfboardProducts = () => {
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
    <Box>
      <Box>
        <DropdownFilter
          originalProducts={allProducts}
          setProducts={setProducts}
          productItems={productItems}
        />
      </Box>
      <Box>
        <Box>
          <ProductCards products={products} key={products._id} />
        </Box>
      </Box>
    </Box>
  );
};
export default SurfboardProducts;
