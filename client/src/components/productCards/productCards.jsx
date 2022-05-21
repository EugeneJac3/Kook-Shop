import * as React from "react";
import "./productCards.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";

export default function ProductCards({ products }) {
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
              height="100%"
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
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
