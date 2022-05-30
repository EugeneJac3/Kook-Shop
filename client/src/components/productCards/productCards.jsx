import React, { useContext, useState } from "react";
import "./productCards.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useCart } from "react-use-cart";
import { CartContext } from "../../helper/Context";
import Box from "@mui/material/Box";
import Modal from "react-modal";
import ModalContent from "../modalContent/ModalContent.jsx";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
  },
};

export default function ProductCards({ products }) {
  const { addItem, totalItems } = useCart();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState({});

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(product) {
    setSelectedProduct(product);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className="productCards">
        {products.map((product, index) => (
          <Card
            className="productCard"
            sx={{ maxWidth: 255, margin: "10px", marginBottom: "20px" }}
            key={product._id}
          >
            <CardActionArea onClick={() => openModal(product)}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={product.imgURL}
                alt={product.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: "bradley hand",
                    fontSize: "30px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontFamily: "arial" }}
                >
                  Brand: {product.brand}
                </Typography>

                <Typography
                  variant="body1"
                  color="secondary"
                  sx={{ fontFamily: "arial" }}
                >
                  Price: ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="medium"
                color="primary"
                variant="outlined"
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

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Box className="modalContainer">
            <CloseIcon className="modalClose" onClick={closeModal} />
          </Box>

          <ModalContent product={selectedProduct} />
        </Modal>
      </Box>
    </ThemeProvider>
  );
}
