import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { CartProvider } from "react-use-cart";
import ProductsList from "./components/ProductsList";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import Secret from "./components/users/Secret";
import ResponsiveAppBar from "./components/navBar";
import { CartContext } from "./helper/Context";
import Cart from "./components/cart/Cart";
import SurfboardProducts from "./components/surfboardProducts";
import FinProducts from "./components/finProducts";
import BoogieProducts from "./components/boogieProducts";

function App() {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/register");
  };

  const [cartItems, setCartItems] = useState("");

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <CartProvider>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/surfboards" element={<SurfboardProducts />} />
          <Route path="/fins" element={<FinProducts />} />
          <Route path="/boogie" element={<BoogieProducts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </CartProvider>
    </CartContext.Provider>
  );
}

export default App;
