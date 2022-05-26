import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import ProductCards from "./productCards/productCards.jsx";
import Box from "@mui/material/Box";
import BrandFilter from "./brandFilter";

const SurfboardProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const productItems = [...new Set(allProducts.map((Val) => Val.brand))];
  const productPrices = ["< $500", "< $750", "< $1000"];

  useEffect(() => {
    retrieveProducts();
  }, []);

  const retrieveProducts = () => {
    ProductDataService.getAll()
      .then((response) => {
        const allItems = response.data;
        const categoryItems = allItems.filter(
          (item) => item.category === "surfboard"
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
export default SurfboardProducts;
