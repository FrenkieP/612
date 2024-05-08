import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Table, Container, Card, Button } from "react-bootstrap";

function OrderDetails() {
  const location = useLocation();
  const { orderType, selectedItem, popupQuantity, popupPrice } = location.state;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h3">Order Summary</Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <tbody>
              <tr>
                <td>Item:</td>
                <td>{selectedItem ? selectedItem.name : "No item selected"}</td>
              </tr>
              <tr>
                <td>Price per Item:</td>
                <td>{selectedItem ? `$${selectedItem.price}` : "$0"}</td>
              </tr>
              <tr>
                <td>Quantity:</td>
                <td>{popupQuantity}</td>
              </tr>
              <tr>
                <td>Order Type:</td>
                <td>{orderType}</td>
              </tr>
              <tr className="table-success">
                {" "}
                {/* Using Bootstrap contextual class for emphasis */}
                <td>Total Price:</td>
                <td>{`$${popupPrice.toFixed(2)}`}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <div className="logoutContainer">
        <Button variant="outline-danger" as={Link} to="/">
          Logout
        </Button>{" "}
      </div>
    </Container>
  );
}

export default OrderDetails;
