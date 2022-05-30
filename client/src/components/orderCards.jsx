import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OrderCards({ orders }) {
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
          <CardActions>
            <Button size="small">Order Details</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
