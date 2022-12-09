import React from "react";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import "./styles.css";
import { MdAnchor } from "react-icons/md";
import { FiSend } from "react-icons/fi";
const Form = () => {
  return (
    <div>
      <Row>
        <Col>
          <img
            src="./group.jpg"
            alt="production image"
            height="450"
            width="450"
          />
        </Col>
        <Col>
          <h1 style={{ color: "#FE6714" }}>About Us</h1>
          <h2>
            Safe,Reliable And Express
            <br />
            Freight Transport Solutions
            <br />
            That Saves Your Time!
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.{" "}
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.{" "}
          </p>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col>
          <h1 style={{ color: "#FE6714" }}>What We Do</h1>
          <h2>
            Explore Our Main Goals
            <br />
            For Business
          </h2>
          <h3 style={{ color: "#FE6714" }}>
            {" "}
            <MdAnchor />
            &ensp; Time Maintenance
          </h3>
          <p style={{ marginLeft: 50 }}>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.{" "}
          </p>
          <h3 style={{ color: "#FE6714" }}>
            {" "}
            <i className="pi pi-truck " />
            &ensp; Security& Trusted
          </h3>
          <p style={{ marginLeft: 50 }}>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.{" "}
          </p>
          <Col style={{ textAlign: "center" }}>
            <Button
              style={{
                borderRadius: "5px",
                border: "2px solid #FE6714",
                backgroundColor: "#141414",
              }}
            >
              Learn More
            </Button>
          </Col>
        </Col>
        <Col>
          <img
            src="./truck8.jpg"
            alt="production image"
            height="450"
            width="450"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Form;
