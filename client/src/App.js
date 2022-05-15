import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import ProductsList from "./components/ProductsList";

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
            <Link to={"/add"} className="nav-link">
              About Us
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          {/* <Route path="/tutorials" element={<TutorialsList />} /> */}
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
