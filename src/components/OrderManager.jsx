import React, { useState } from "react";
import PopUp from "./PopUp";
import OrderDetails from "./OrderDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function OrderManager() {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/menu">Menu</Link> |{" "}
          <Link to="/order-details">Order Details</Link>
        </nav>
        <Routes>
          <Route
            path="/menu"
            element={
              <PopUp
                selectedItem={selectedItem}
                quantity={1}
                price={10}
                addOrder={addOrder}
                onClose={() => console.log("Popup closed")}
              />
            }
          />
          <Route
            path="/order-details"
            element={<OrderDetails orders={orders} />}
          />

          <Route path="/menu" element={<MenuPage addOrder={addOrder} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default OrderManager;
