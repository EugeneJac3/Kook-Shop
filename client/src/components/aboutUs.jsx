import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

export default function AboutUs() {
  return (
    <Box
      className="dev-container"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardMedia
          component="img"
          height="300"
          image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653747134/Brody-Passionate-Politics-Black-Panther_qyh33q.webp"
          alt="eugene-pic"
        />
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Eugene Jackson
          </Typography>
        </CardContent>
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-20px",
            }}
          >
            <CardActions>
              <Button
                variant="outlined"
                href="https://github.com/EugeneJac3"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/eugene-jackson-87b24090/"
                target="_blank"
              >
                LinkedIn
              </Button>
            </CardActions>
          </Box>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardMedia
          component="img"
          height="300"
          image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653747134/chan_a_al0ik3.webp"
          alt="kevin-pic"
        />
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Kevin Nguyen
          </Typography>
        </CardContent>
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-20px",
            }}
          >
            <CardActions>
              <Button
                variant="outlined"
                href="https://github.com/kpnguyen9"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/kpnguyen9/"
                target="_blank"
              >
                LinkedIn
              </Button>
            </CardActions>
          </Box>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardMedia
          component="img"
          height="300"
          image="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653747134/mario-hero_goc8kc.webp"
          alt="alex-pic"
        />
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Alex Degregori
          </Typography>
        </CardContent>
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-20px",
            }}
          >
            <CardActions>
              <Button
                variant="outlined"
                href="https://github.com/alexdevregori"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/alexdegregori/"
                target="_blank"
              >
                LinkedIn
              </Button>
            </CardActions>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
}
