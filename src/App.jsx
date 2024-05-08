import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import MenuPage from "./components/MenuPage";
import SignupPage from "./components/SignupPage";
import OrderDetails from "./components/OrderDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/order-details" element={<OrderDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
