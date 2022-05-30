import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SurfingIcon from "@mui/icons-material/Surfing";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { CartContext } from "./../helper/Context";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([]);
  //   useEffect(()=> {
  // 	  const verifyUser = async () =>{
  // 		  if(!cookies.jwt){
  // 			  navigate("/login");
  // 		  } else {
  // 			const { data } = await axios.post(
  // 				"http://localhost:8080/api/",{}, {withCredentials:true}
  // 				);
  // 				if(!data.status){
  // 					removeCookie("jwt")
  // 					navigate("/login")
  // 				}
  // 		  }
  // 	  };
  // 	  verifyUser()
  //   }, [cookies,navigate,removeCookie])

  const logOut = () => {
    removeCookie("jwt");
    navigate("/register");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    setCartItems(totalItems);
  }, [totalItems]);
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#0e0b5c" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "chalkduster",
              fontSize: "30px",
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Kook Boards
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="home" onClick={handleCloseUserMenu}>
                <Typography textAlign="center" component="a" href="/">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem key="surf-boards" onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component="a" href="/surfboards">
                  Surfboards
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component="a" href="/boogie">
                  Boogie Boards
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component="a" href="/fins">
                  Surfboard Fins
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" component="a" href="/about-us">
                  About us
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "chalkduster",
              }}
              component="a"
              href="/surfboards"
            >
              Surfboards
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "chalkduster",
              }}
              component="a"
              href="/boogie"
            >
              Boogie Boards
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "chalkduster",
              }}
              component="a"
              href="/fins"
            >
              Surfboard Fins
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "chalkduster",
              }}
              component="a"
              href="/about-us"
            >
              About Us
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button href="/shopping-cart" onClick={handleCloseNavMenu}>
              <Badge badgeContent={cartItems} color="secondary">
                <ShoppingCartIcon
                  fontSize="large"
                  sx={{ color: "white", display: "block" }}
                ></ShoppingCartIcon>
              </Badge>
            </Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="K" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="login" onClick={handleCloseUserMenu}>
                <Typography textAlign="center" component="a" href="/login">
                  Login
                </Typography>
              </MenuItem>
              <MenuItem key="register" onClick={handleCloseUserMenu}>
                <Typography textAlign="center" component="a" href="/register">
                  Register
                </Typography>
              </MenuItem>
              <MenuItem key="orderhistory" onClick={handleCloseUserMenu}>
                <Typography textAlign="center" component="a" href="/orders">
                  Order History
                </Typography>
              </MenuItem>
              <MenuItem key="logout" onClick={logOut}>
                <Typography textAlign="center" component="a" href="/login">
                  Log Out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
