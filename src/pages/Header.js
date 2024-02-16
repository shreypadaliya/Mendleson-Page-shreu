import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div className="main">
      <Navbar expand="lg" className="nav-bar">
        <img
          alt=""
          src={require("../imgs/HeaderImg/lefttop.png")}
          width="119"
          height="111"
          className="left-top-nav"
        />
        <img
          alt=""
          src={require("../imgs/HeaderImg/rigthtop.png")}
          width="359"
          height="376"
          className="rigth-top-nav"
        />
        <Container className="nav-container">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("../imgs/HeaderImg/logo.png")}
              className="nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Item className="nav-links">
                <Nav.Link href="#About" className="nav-link-text">
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-links">
                <Nav.Link className="nav-link-text" href="#Services">
                  Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-links">
                <Nav.Link className="nav-link-text" href="#Team">
                  Team
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-links">
                <Nav.Link className="nav-link-text" href="#Clients">
                  Clients
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-links">
                <Nav.Link className="nav-link-text">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
