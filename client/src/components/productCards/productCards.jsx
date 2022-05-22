import React, { useContext } from "react";
import "./productCards.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useCart } from "react-use-cart";
import { CartContext } from "../../helper/Context";
import Box from "@mui/material/Box";

export default function ProductCards({ products }) {
  const { addItem, totalItems } = useCart();
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Box className="productCards">
      {products.map((product, index) => (
        <Card
          className="productCard"
          sx={{ maxWidth: 255, margin: "10px" }}
          key={product._id}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="400px"
              width="100%"
              image={product.imgURL}
              alt={product.name}
              onClick
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Brand: {product.brand}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Description: {product.description}
              </Typography> */}
              <Typography variant="body1" color="text.secondary">
                Price: ${product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
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
      ))}
    </Box>
  );
}
