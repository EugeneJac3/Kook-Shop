import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const Buttons = ({ originalProducts, setProducts, productItems }) => {
  const filterProduct = (curcat) => {
    const newProduct = originalProducts.filter((newVal) => {
      console.log("curcat:", curcat);
      return newVal.brand === curcat;
      // comparing brand for displaying data
    });
    setProducts(newProduct);
  };

  const useStyles = makeStyles({
    // root: {
    //   display: "flex",
    // },
    buttons: {
      margin: "10px",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        {productItems.map((Val, id) => {
          return (
            <Button
              variant="contained"
              size="medium"
              className={classes.buttons}
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
