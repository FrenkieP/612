import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import PopUp from "./PopUp";

function MenuPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setPrice(item.price);
    setShowPopUp(true);
  };

  const handleQuantity = (event) => {
    const newQuantity = parseInt(event.target.value) || 1;
    setQuantity(newQuantity);
    if (selectedItem) {
      setPrice(selectedItem.price * newQuantity);
    }
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
    setQuantity(1);
    setPrice(0);
  };
  const menuItems = [
    {
      name: "Fried Pork with Basil",
      price: 59,
      img: "Thai-basil-pork-from-above.jpg",
    },
    { name: "Steak", price: 99, img: "Sirloin-Steak-24.jpg" },
    {
      name: "Seafood Fried Noodles",
      price: 69,
      img: "Shrimp-Chow-Mein-18-Edit.jpg",
    },
    { name: "Thai-style omelet with rice", price: 39, img: "Kai-Jeow-10.jpg" },
    { name: "Shrimp fried rice", price: 69, img: "Shrimp-Fried-Rice-f.jpg" },
    { name: "Seafood Suki", price: 69, img: "raum-hero.webp" },
  ];

  return (
    <>
      <div className="logoutContainer">
        <Button variant="outline-danger" as={Link} to="/">
          Logout
        </Button>{" "}
      </div>
      <div className="menuContainer ">
        <Row className="justify-content-center">
          {menuItems.map((item, index) => (
            <Col key={index} xs={12} md={3} className="menuItem ">
              <img src={item.img} alt={item.name} className="menuItemImage" />
              <Button
                className="menuInfo"
                variant="outline-success"
                onClick={() => handleCardClick(item)}>
                {item.name} {item.price} ฿
              </Button>
              {showPopUp && (
                <PopUp
                  selectedItem={selectedItem}
                  price={price}
                  quantity={quantity}
                  onClose={handleClosePopup}
                />
              )}
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default MenuPage;
