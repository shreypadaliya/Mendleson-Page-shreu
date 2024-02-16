import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const ConsultationAndResearch = () => {
  return (
    <Container>
      <Row className="Service-Consultation-body order-2 ">
        <Col className="Consultation-body " sm="12" md="12" lg="6">
          <h1 className="Services-Consultation-heading">
            CONSULTATION AND RESEARCH
          </h1>
          <p className="Services-Consultation-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque
            et. Sit ac fames facilisis nibh faucibus.
          </p>
        </Col>
        <Col
          className="Services-Consultation-img-container"
          sm="12"
          md="12"
          lg="6"
        >
          <img
            className="Services-Consultation-img"
            src={require("../../imgs/servicesImg/Consultation vector 1.png")}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ConsultationAndResearch;
