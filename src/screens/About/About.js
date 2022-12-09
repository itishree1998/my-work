import React from "react";
import { Breadcrumb } from "../../components";
import { Card, Col, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div style={{ background: "#141414", color: "#fff", height: 1200 }}>
      <Breadcrumb title="About" />
      <Row>
        <Col style={{ marginLeft: 70 }}>
          <h1 style={{ paddingTop: 30 }}>Mission & Vision</h1>
          <h1 style={{ marginTop: 30 }}>Mission</h1>
          <p style={{ marginTop: 30 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.{" "}
          </p>
          <h1 style={{ marginTop: 30 }}>Vision</h1>
          <p style={{ marginTop: 30 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.{" "}
          </p>
        </Col>
        <Col>
          <Card
            style={{
              height: 400,
              width: 350,
              marginLeft: 200,
              marginTop: 60,
              background: "#333838",
              padding: 20,
            }}
          >
            <h1>About Company</h1>
            <hr
              style={{ border: " none", height: " 5px", background: "#ddd" }}
            />
            <div style={{ marginTop: 20 }}>
              <p>
                We Are Commited To Be
                <br />
                The Leading Logistic
                <br />
                Solutions Provider To
                <br />
                Our Customer.We
                <br />
                Continually Improving
                <br />
                & Implement To Achieve
                <br />
              </p>
            </div>
          </Card>
        </Col>
      </Row>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "grey",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <h2 style={{ marginTop: "50px" }}>
          Reach Your Destination 100% Sure And Safe
        </h2>
        <h3 style={{ marginBottom: "50px" }}>
          {" "}
          We will care of your cargo deliver them safe and on time
        </h3>
        <Button
          variant="warning"
          style={{ borderRadius: "32px", marginBottom: "30px" }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default About;
