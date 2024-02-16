import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const Clients = () => {
  return (
    <div className="client-main-body" id="Clients">
      <img
        className="client-bg-img"
        src={require("../imgs/bg img/Assets 9 1.png")}
      />
      <Container>
        <div className="services-heading-container client-heading-container">
          <h1 className="services-heading ">OUR CLIENTS</h1>
          <div className="client-hr-top">
            <div className="client-hr-bottom"></div>
          </div>
        </div>
      </Container>
      <Container>
        <Row className="client-img-container-1">
          <Col className="client-img-body">
            <img src={require("../imgs/Client Img/Layer 19.png")} />
          </Col>
          <Col className="client-img-body">
            <img src={require("../imgs/Client Img/Layer 20.png")} />
          </Col>
          <Col className="client-img-body">
            <img src={require("../imgs/Client Img/1280px-Brigitte-Logo.png")} />
          </Col>
          <Col className="client-img-body">
            <img src={require("../imgs/Client Img/Layer 22.png")} />
          </Col>
          <Col className="client-img-body">
            <img src={require("../imgs/Client Img/BHP_2017_logo.png")} />
          </Col>
        </Row>
        <Row className="client-img-container-2">
          <Col className="client-img-body">
            <img src={require("../imgs/Client Img/Layer 21.png")} />
          </Col>
          <Col className="client-img-body">
            <img src={require("../imgs/Client Img/Layer 23.png")} />
          </Col>
          <Col className="client-img-body">
            <img src={require("../imgs/Client Img/Layer 24.png")} />
          </Col>
          <Col className="client-img-body">
            <img
              src={require("../imgs/Client Img/MelbourneWaterLogo-1024x282.png")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Clients;
