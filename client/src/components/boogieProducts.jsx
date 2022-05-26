import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import ProductCards from "./productCards/productCards.jsx";
import Box from "@mui/material/Box";
import BrandFilter from "./brandFilter";

const BoogieProducts = () => {
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
        const allItems = response.data;
        const categoryItems = allItems.filter(
          (item) => item.category === "boogie"
        );
        setProducts(categoryItems);
        setAllProducts(categoryItems);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Box>
      <Box>
        <BrandFilter
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
export default BoogieProducts;
