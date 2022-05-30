import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import "./CategoryCards.css";
import Link from "@mui/material/Link";

export default function CategoryCards() {
  return (
    <Box
      className="categoryContainer"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Link href="/surfboards">
        <Card sx={{ maxWidth: 345, margin: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1652564053/surf%20boards/olena-sergienko-ALJjgXxFSLo-unsplash_kohwpl.jpg"
              alt="shop-surfboards"
              to="/surfboards"
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "70px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "bradley hand",
                  fontSize: "35px",
                }}
              >
                Surfboards
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link href="/boogie">
        <Card sx={{ maxWidth: 345, margin: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653513575/boogie%20boards/tim-davies-SHDcX3wX-rY-unsplash_oklhhx.jpg"
              alt="shop-boogieboards"
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "70px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "bradley hand",
                  fontSize: "35px",
                }}
              >
                Boogie Boards
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link href="/fins">
        <Card sx={{ maxWidth: 345, margin: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653438236/surf%20boards/michael-olsen-wJZ2Uyljhfo-unsplash_xloitm.jpg"
              alt="shop-fins"
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "70px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "bradley hand",
                  fontSize: "35px",
                }}
              >
                Surfboard Fins
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  );
}
