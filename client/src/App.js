import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import ProductsList from "./components/ProductsList";
import ResponsiveAppBar from "./components/navBar";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
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
