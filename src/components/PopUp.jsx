import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function PopUp({ selectedItem, quantity, price, onClose }) {
  const [popupQuantity, setPopupQuantity] = useState(quantity);
  const [popupPrice, setPopupPrice] = useState(price);
  const [orderType, setOrderType] = useState("");

  const navigate = useNavigate(); // Create navigate function instance

  const handleQuantity = (event) => {
    const newQuantity = parseInt(event.target.value) || 1;
    setPopupQuantity(newQuantity);
    if (selectedItem) {
      const newPrice = selectedItem.price * newQuantity;
      setPopupPrice(newPrice);
    }
  };

  const handleOrder = (event) => {
    setOrderType(event.target.value);
  };

  const handleAddOrder = () => {
    // Use navigate to go to OrderDetails with state
    navigate('/order-details', { state: { orderType, selectedItem, popupQuantity, popupPrice } });
    onClose(); // Optionally close the popup
  };

  return (
    <>
      {selectedItem && (
        <div className="popup">
          <div className="popup-content">
            <div>
              <h5>Total Price: {popupPrice} ฿</h5>
            </div>
            <div className="m-3">
              <label>{selectedItem.name}</label>
            </div>
            <div className="mt-3">
              <label>
                Quantity:
                <input
                  type="number"
                  value={popupQuantity}
                  onChange={handleQuantity}
                  min="1"
                />
              </label>
            </div>
            <div className="d-flex flex-column mt-3">
              <div className="d-flex align-items-center mb-3">
                <input
                  type="radio"
                  name="orderType"
                  value="dineIn"
                  id="dineIn"
                  onChange={handleOrder}
                />
                <label htmlFor="dineIn" className="ml-2">Dine in</label>
              </div>
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  name="orderType"
                  value="takeAway"
                  id="takeAway"
                  onChange={handleOrder}
                />
                <label htmlFor="takeAway" className="ml-2">Take away</label>
              </div>
            </div>
            <Button
              variant="outline-success"
              className="mt-3"
              onClick={handleAddOrder}>
              Add to order
            </Button>
          </div>
          <div className="popup-overlay" onClick={onClose}></div>
        </div>
      )}
    </>
  );
}

export default PopUp;
