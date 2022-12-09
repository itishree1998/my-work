import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Breadcrumb } from "../../components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div style={{ background: "#141414", color: "#fff", height: 1500 }}>
      <Breadcrumb title="Contact" />
      <Row>
        <Col style={{ marginLeft: 70 }}>
          <h1>Get In Touch And We'll</h1>
          <h1>Help Your Business</h1>
          <h3 style={{ marginTop: 20, color: "orange" }}>Get In Touch</h3>
          <h4 style={{ marginTop: 15 }}>Phone</h4>
          <h6>+91 9876543210</h6>
          <h6>+91 9865321470</h6>
          <h4 style={{ marginTop: 15, marginBottom: 10 }}>Email</h4>
          <h6>hello@unity.com</h6>
          <h6>business@unity.com</h6>
          <h6>support@unity.com</h6>
          <h4 style={{ marginTop: 15 }}> Office Address</h4>
          <h6>Digital Agency Network 20</h6>
          <h6>Eastbourne Terrace</h6>
          <h6>London W2 6G</h6>
        </Col>
        <Col>
          <Card
            style={{
              height: 500,
              width: 450,
              marginTop: 60,
              background: "#333838",
              padding: 20,
            }}
          >
            <Form style={{ marginLeft: 20, marginRight: 20 }}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Type email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                <Form.Label> Phone Number</Form.Label>
                <Form.Control
                  type="phonenumber"
                  placeholder="Type Phone Number"
                />
              </Form.Group>
              <Button
                style={{
                  borderRadius: "32px",
                  border: "none",
                  width: " 100px",
                  background:
                    "linear-gradient(90.59deg, #8E2DE2 0.51%, #4A00E0 99.56%)",
                }}
              >
                Send
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
