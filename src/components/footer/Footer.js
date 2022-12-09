import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="p-5" style={{ backgroundColor: "#222222", height: 500 }}>
      <div
        style={{
          textAlign: "center",

          marginBottom: 40,
          color: "white",
        }}
      >
        <h1>
          Let us deliver your <br />
          package to its <br />
          destination
        </h1>
        {/* <Button variant="warning" style={{ borderRadius: "32px" }}>
          Learn More
        </Button> */}
      </div>
      <hr style={{ color: "white" }} />
      <div style={{ color: "white" }}>
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <Col style={{}}>
              <h5>Rapid Transport systems</h5>
              <h6 style={{}}>
                {" "}
                The faster,easiest way to book and manage your shipments.
              </h6>
            </Col>
            <Col style={{}}>
              <h6>Home</h6>
              <h6 style={{ marginTop: 20 }}>Service</h6>
              <h6 style={{ marginTop: 20 }}>About</h6>
              <h6 style={{ marginTop: 20 }}>FAQ</h6>
            </Col>
            <Col style={{}}>
              <h6>Licence</h6>
              <h6 style={{ marginTop: 20 }}>Privacy policies</h6>
              <h6 style={{ marginTop: 20 }}>Copyright</h6>
              <h6 style={{ marginTop: 20 }}>Email address</h6>
            </Col>
            <Col style={{}}>
              <h6>Get in Touch</h6>
              <h6 style={{ marginTop: 20 }}>Instagram</h6>
              <h6 style={{ marginTop: 20 }}>Facebook</h6>
              <h6 style={{ marginTop: 20 }}>Twitter</h6>
            </Col>
          </div>
        </Row>
        <hr style={{ color: "white", width: "870px", marginLeft: 150 }} />
        <p style={{ textAlign: "center" }}>
          &#169;2022 Rapid Transport By Vardhanworld. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
