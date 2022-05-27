import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./ModalContent.css";
import { useCart } from "react-use-cart";
import { CartContext } from "../../helper/Context";

const ModalContent = ({ product }) => {
  const { addItem, totalItems } = useCart();
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box className="imgContainer">
        <img src={product.imgURL} alt={product.name} />
      </Box>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Brand: {product.brand}
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Price: ${product.price}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            Details: {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              addItem(product);
              setCartItems(totalItems);
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ModalContent;
