import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img1 from "../../assets/home/truck6.jpg";

const card = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,.7), rgba(0,0,0,.7) ),url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 400,
        width: "100%",
      }}
    >
      <Container>
        <div style={{ textAlign: "center" }}>
          <h3>Our Features</h3>
          <h2>Why Choose Us!</h2>

          <p>
            Lorem Ipsum Has Been The Industry's Standard Dummy
            <br />
            Text Ever Since The 1500s,When An Unknown Printer
            <br />
            Took A Gallery Of Type And Scrambled It To Make A<br />
            Type Specimen Book
          </p>
        </div>
        <Row>
          <Col>
            <Card
              style={{
                width: "200px",
                height: "180px",
                textAlign: "center",
                color: "black",
              }}
            >
              <Card.Body>
                <h1></h1>
                <Card.Title>Safe Delivery</Card.Title>
                <Card.Text>
                  Lorem Ipsum Has
                  <br /> Been The Industry's
                  <br /> Standard
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "200px",
                height: "180px",
                textAlign: "center",
                color: "black",
              }}
            >
              <Card.Body>
                <Card.Title>Safe Packing</Card.Title>
                <Card.Text>
                  Lorem Ipsum Has
                  <br /> Been The Industry's
                  <br /> Standard
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "200px",
                height: "180px",
                textAlign: "center",
                color: "black",
              }}
            >
              <Card.Body>
                <Card.Title>Safe Packing</Card.Title>
                <Card.Text>
                  Lorem Ipsum Has
                  <br /> Been The Industry's
                  <br /> Standard
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "200px",
                height: "180px",
                textAlign: "center",
                color: "black",
              }}
            >
              <Card.Body>
                <Card.Title>Safe Packing</Card.Title>
                <Card.Text>
                  Lorem Ipsum Has
                  <br /> Been The Industry's
                  <br /> Standard
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default card;
