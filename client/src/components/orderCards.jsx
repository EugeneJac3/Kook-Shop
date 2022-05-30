import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";

import CloseIcon from "@mui/icons-material/Close";
import OrderDetailsModal from "./orderDetailsModal";

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

export default function OrderCards({ orders }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  function openModal(order) {
    setSelectedOrder(order);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Box
      className="orders"
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      {orders.map((order, index) => (
        <Card className="orderCard" sx={{ minwidth: 275, margin: "20px" }}>
          <CardContent>
            <Typography variant="body1" component="h1">
              Order ID: {order._id}
            </Typography>
            <Typography variant="body1" component="p">
              Total Items: {order.totalItems}
            </Typography>
            <Typography variant="body1" component="p">
              Total Price: {order.cartTotal}
            </Typography>
            <Typography variant="body1" component="p">
              Time Ordered:{order.createdAt}
            </Typography>
          </CardContent>
          <CardActions onClick={() => openModal(order)}>
            <Button size="small">Order Details</Button>
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

        <OrderDetailsModal order={selectedOrder} />
      </Modal>
    </Box>
  );
}
