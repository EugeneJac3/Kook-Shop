import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import Secret from "./components/users/Secret";
import ResponsiveAppBar from "./components/navBar";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Kook Boards
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Surfboards
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Shopping Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              About Us
            </Link>
          </li>
        </div>
      </nav>
      <ResponsiveAppBar />

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
