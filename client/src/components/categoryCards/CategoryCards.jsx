import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import "./CategoryCards.css";

export default function CategoryCards() {
  return (
    <Box className="container" sx={{ display: "flex" }}>
      <Card sx={{ maxWidth: 345, margin: "30px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1652564053/surf%20boards/olena-sergienko-ALJjgXxFSLo-unsplash_kohwpl.jpg"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "30px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653438006/surf%20boards/susan-flynn-wqaEwf35Bl8-unsplash_wsencz.jpg"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "30px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653438236/surf%20boards/michael-olsen-wJZ2Uyljhfo-unsplash_xloitm.jpg"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </Box>
  );
}
