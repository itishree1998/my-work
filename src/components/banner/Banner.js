import React, { useState } from "react";
import { styles } from "./style";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Banner = () => {
  return (
    <div style={styles.container}>
      <div style={styles.bannerSection}>
        <div style={{ margin: "10%" }}>
          <div style={{ marginRight: "700px" }}>
            <h1 style={styles.title}>
              Safe And
              <br /> Professional <br /> Delivary
              <br />
              <span style={styles.span}>On Time</span>{" "}
            </h1>
          </div>

          <div style={styles.formbox}>
            <Row>
              <h5 style={styles.titleForm}>Track Shipment</h5>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Shipment Code"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={styles.input}
                />
              </Col>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  style={styles.dropdown}
                >
                  <option>Select Your Services</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <div className="d-grid ">
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={styles.button}
                  >
                    Track Now
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
