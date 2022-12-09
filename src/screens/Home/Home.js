import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Banner, Form, Card } from "../../components";

const Home = () => {
  return (
    <div style={{ background: "#141414", color: "#fff" }}>
      <Banner />

      <Container fluid className="">
        <Row className="">
          <Col
            sm={12}
            lg={6}
            style={{
              background: "#FE6714",
              paddingTop: "100px",
            }}
          >
            <h1>Welcome</h1>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.{" "}
            </p>
          </Col>
          <Col
            sm={12}
            lg={6}
            style={{ background: "#222222", paddingTop: "100px" }}
          >
            <h1>Welcome</h1>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="p-lg-5">
        <Form />
      </Container>

      <Card />
    </div>
  );
};

export default Home;
