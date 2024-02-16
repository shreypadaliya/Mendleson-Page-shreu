import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Communications = () => {
  return (
    <div className="Communications-body-main">
      <img
        className="Communications-bg-img"
        src={require("../../imgs/bg img/Asset 6 1.png")}
      />
      <Container>
        <Row className="Service-Communications-body order-2">
          <Col className="Communications-body" sm="12" md="12" lg="6">
            <h1 className="Services-Communications-heading">COMMUNICATIONS</h1>
            <p className="Services-Communications-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
              et. Sit ac fames facilisis nibh faucibus.
            </p>
          </Col>
          <Col
            className="Services-Communications-img-container"
            sm="12"
            md="12"
            lg="6"
          >
            <img
              className="Services-Communications-img"
              src={require("../../imgs/servicesImg/Coominucation vector 1.png")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Communications;
