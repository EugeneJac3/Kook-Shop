import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const OrderDetailsModal = ({ order }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography variant="subtitle1" color="primary">
              Order ID: {order._id}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              Total Items: {order.totalItems}
            </Typography>
            <Typography variant="subtitle1" color="text.primary">
              Total Price: ${order.cartTotal}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <List
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {order.items.map((item, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt={item.name} src={item.imgURL} />
                  </ListItemAvatar>
                  <ListItemText id={item.id}>
                    {item.name} @ ${item.price} x {item.quantity}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default OrderDetailsModal;
