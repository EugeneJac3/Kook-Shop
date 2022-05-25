import React, { useState } from "react";

import Box from "@mui/material/Box";
import CoolSlider from "./coolSlider/coolSlider";
import CategoryCards from "./categoryCards/CategoryCards";

const ProductsList = () => {
  return (
    <Box>
      <CoolSlider />
      <CategoryCards />
    </Box>
  );
};
export default ProductsList;
