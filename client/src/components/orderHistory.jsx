import React, { useState, useEffect } from "react";
import OrderDataService from "../services/ProductService";

import Box from "@mui/material/Box";
import OrderCards from "./orderCards";

const OrderHistory = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    retrieveOrders();
  }, []);

  const retrieveOrders = () => {
    OrderDataService.getAllOrders()
      .then((response) => {
        console.log("all orders", response.data);
        const allOrders = response.data;
        const userOrders = allOrders.filter((order) => order.userID === "123");

        setAllOrders(userOrders);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Box>
      <OrderCards orders={allOrders} />
    </Box>
  );
};
export default OrderHistory;
