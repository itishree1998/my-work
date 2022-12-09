import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./header.css";

function OffcanvasExample() {
  function MouseOver(event) {
    event.target.style.color = "#FE6714";
  }
  function MouseOut(event) {
    event.target.style.color = "#FFFFFF";
  }
  const expand = "md";
  return (
    <Navbar
      key={expand}
      expand={expand}
      className="sticky-top"
      style={{ background: "#000", height: "90px" }}
    >
      <Container>
        <Navbar.Brand>
          {" "}
          <Link
            to="/"
            style={{
              color: "#FFFFFF",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            LOGO
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              LOGO
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-flex justify-content-end flex-grow-1" style={{}}>
              <Nav.Link>
                <Link className="items" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="items" to="/orders">
                  Orders
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="items" to="/service">
                  Service
                </Link>
              </Nav.Link>
              {/* <NavDropdown
                title="Services"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                onMouseOut={MouseOut}
                onMouseOver={MouseOver}
              >
                <NavDropdown.Item>
                  <Link className="subitems" to="/in-transit">
                    In Trnasit
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="subitems" to="/about">
                    About
                  </Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item>
                  <Link className="subitems">Servises</Link>
                </NavDropdown.Item>
              </NavDropdown> */}{" "}
              */
              <Nav.Link>
                <Link className="items" to="/about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="items" to="/faq">
                  FAQ
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="items" to="/contact">
                  Contact
                </Link>
              </Nav.Link>
              <Button
                style={{
                  borderRadius: "8px",
                  border: "none",
                  background: "#FE6714",
                }}
              >
                Sign In
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
