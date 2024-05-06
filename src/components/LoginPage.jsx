import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import SignupPage from "./SignupPage";
import { Button, Form, Row, Col, Container, Card } from "react-bootstrap";

function LoginPage({ onChange }) {
  const [isSignUp, setIsSignUp] = useState(false);
  
  function handleSignUp() {
    setIsSignUp(true);
  }

  return (
    <>
      <Container fluid className="container">
        <Card className="card-custom">
          <Card.Title className="my-4">
            <h1>612 Restaurant</h1>
          </Card.Title>
          <Card.Body>
            {" "}
            <Row>
              <Col className="d-flex justify-content-center mt-2">
                <Form.Group className="loginname">
                  <Form.Label>
                    <h4>Username</h4>
                  </Form.Label>
                  <Form.Control size="md" type="text" placeholder="Username" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center  mt-2">
                <Form.Group className="loginpass">
                  <Form.Label>
                    <h4>Password</h4>
                  </Form.Label>
                  <Form.Control
                    size="md"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="mt-4">
              <Button variant="secondary" type="submit" as={Link} to="/menu">
                Login
              </Button>{" "}
            </div>
            <div>
              <Row>
                <Col className="d-flex justify-content-center  mt-2">
                  <Link to="/signup">Sign up here</Link> {" "}
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default LoginPage;
