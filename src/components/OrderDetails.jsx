import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Table, Container, Card, Button } from "react-bootstrap";

function OrderDetails() {
  const location = useLocation();
  const orders = location?.state.orders || [];

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h3">Order Summary</Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Order Type</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.selectedItem}</td>
                    <td>฿{order.price.toFixed(2)}</td>
                    <td>{order.quantity}</td>
                    <td>{order.orderType}</td>
                    <td>฿{order.totalPrice.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No orders placed.</td>
                </tr>
              )}
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
